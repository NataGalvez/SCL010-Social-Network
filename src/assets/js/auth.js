let ifIsNewUser = (firebaseAuthResult) => {
    let isNew = firebaseAuthResult.additionalUserInfo.isNewUser;
    console.log("es nuevo: "+isNew);
    if (isNew) {
        console.log("Hi ", firebaseAuthResult.user.displayName + ". Id: "+firebaseAuthResult.user.uid+ ", email: "+ firebaseAuthResult.user.email);
        //comprobar si el usuario había sido eliminado alguna vez y ahora volvió.
        //si el correo del usuario está en database, borra el documento antiguo para escribir el nuevo.
        ifIsReturningUser(firebaseAuthResult)
    }
}

const deleteDocumentById = (documentId) => {
    firebase.firestore().collection("Users").doc(documentId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

let ifIsReturningUser = (firebaseAuthResult) => {
    let emailNewUser = firebaseAuthResult.user.email;
    console.log("emailNewUser:", emailNewUser);

    firebase.firestore().collection("Users").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log(doc.id, " => ", doc.data().email);
            if (emailNewUser === doc.data().email) {
                console.log("YEI id", doc.id);
                console.log("ya hay un id con el mismo email en database. Vamos a borrarlo");
                deleteDocumentById(doc.id);
            }
        });
        //escribir el database del nuevo usuario (o del usuario que volvió)
        writeUserData(firebaseAuthResult.user);
    });
} 

const writeUserData = (user) => {
    console.log("write user data");
    firebase.firestore().collection('Users').doc(user.uid).set({
      username: user.displayName,
      email: user.email,
      userId: user.uid,
      position: "",
      region: "",
      photo: ""
      //some more user data
    }).then(() => {
        console.log("Document successfully written!");
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    });
    console.log("terminé de agregar datos");
  }

export const loginGoogle = () => {
    console.log("ingresé a loginGoogle");
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        //comprobar si el usuario se logueó por primera vez. 
        ifIsNewUser(result);  
        window.location.hash = "#/wall";   
      })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
            alert("Este email ya esta en uso");
        }
      });
}

export const createAccount = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const verified = document.getElementById("verified").value;
    if (verified !== password) {
        alert("Las contraseñas no coinciden");
    } else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
        //comprobar si el usuario es nuevo y si se encuentra en database
        //(si fue eliminado y después vuelve, podría estar en database aunque no esté en auth)
        ifIsNewUser(result);
        verification();
        //window.location.hash = "#/info";
      })

    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
             alert("Ingresa un email");
        } else if (password == "") {
            alert("Ingresa una contraseña");
        } else if (errorCode === "auth/weak-password") {
            alert("La contraseña debe tener 6 carácteres o más");
        } else if (errorCode === "auth/email-already-in-use") {
            alert("Este email ya esta en uso"); 
        }
    })
}
};

export const loginAccount = () => {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
            alert("Email invalido");
        } else if (password == "") {
           alert("Ingresa una contraseña");
        } else if (errorCode === "auth/wrong-password") {
           alert("La contraseña ingresada no es valida");
        } else if (errorCode === "auth/user-not-found") {
            alert("Email no registrado")
        }
    })
}

export const loginFacebook = () => {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
      //comprobar si el usuario se logueó por primera vez. 
      ifIsNewUser(result); 
})
  .catch(function(error) {
    let errorCode = error.code;
      if (errorCode === "auth/account-exists-with-different-credential") {
          alert("Ya existe una cuenta con este correo electrónico. Inicia sesión usando la cuenta asociada al correo electrónico.")
      }      
})
}
export const verification = ()=>{
      let user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
        console.log("enviando Correo");
    }).catch(function(error) {
        console.log("no se enviará correo");
    })
}
