export const loginGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        let user = result.user;
        console.log("Hi", user.displayName);
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
};