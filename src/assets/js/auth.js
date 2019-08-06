export const loginGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        console.log("Hi", user.displayName);
      })
    .catch(function(error) {
        // Handle Errors here.
        console.log(error)
      });
}
export const createAccount = () => {
    return "Cuenta Creada";
}