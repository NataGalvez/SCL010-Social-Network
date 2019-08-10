let ifIsNewUser = (firebaseAuthResult) => {
    let isNew = firebaseAuthResult.additionalUserInfo.isNewUser;
        console.log("es nuevo: "+isNew);
    if (isNew) {
        // aqui va la llamada funcion que envia ese usuario a la base de datos
        console.log("Hi ", firebaseAuthResult.user.displayName + ". Id: "+firebaseAuthResult.user.uid+ ", email: "+ firebaseAuthResult.user.email);
        writeUserData(firebaseAuthResult.user);
    }
}

const writeUserData = (user) => {
    //TAREA CLAUDIA ESCRIBIR FUNCION SIMILAR QUE NO SOBREESCRIBA LOS DATOS PARA LOGIN GOOGLE Y LOGIN FACEBOOK
    console.log("write user data");
    firebase.firestore().collection('Users').doc(user.uid).set({
      username: user.displayName,
      email: user.email,
      userId: user.uid,
      type: "",
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
        let user = result.user;
        //comprobar si el usuario se logueó por primera vez. Si ya estaba logueado, no sobreescribirá sus datos
        ifIsNewUser(result);        
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
        let user = result.user;
        // aqui va la llamada funcion que envia ese usuario a la base de datos
        console.log("Hi ", user.displayName + ". Id: "+user.uid+ ", email: "+ user.email);
        writeUserData(user);
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
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let token = result.credential.accessToken;
      console.log(token);
      // The signed-in user info.
      let user = result.user;
      //comprobar si el usuario se logueó por primera vez. Si ya estaba logueado, no sobreescribirá sus datos
      ifIsNewUser(result); 
})
  .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      console.log(errorCode);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);
      
});
}
