import { createAccount } from "./../js/auth.js";
import { loginGoogle } from "../js/auth.js";
import { loginFacebook } from "./../js/auth.js";

export const templateCreateAccount = () => {
    const containerCreateAccount = document.createElement("div");
    containerCreateAccount.className = "container";
    const contentCreatAccount = ` 
    <div class="container login">
        <div class="login-content">
            <button id="enterGoogle" class="login-google btn">Registrarse con Google</button>
            <button id="enterFacebook" class="login-facebook btn">Registrarse con Facebook</button>
            <p>––––––––––––––– o –––-––––––––––––</p>
            <input type="email" id="email" placeholder="Correo Electrónico">
            <input id="password" type="password" placeholder="Ingresa una contraseña">
            <input id="verified" type="password" placeholder="Confirma tu contraseña">
            <button id="create" class="login btn">Crear Cuenta</button>
            <br>
            <p>¿Ya tienes una cuenta?<a href="#/login" class="createAccount">  Iniciar sesión</a></p>
        </div>
    </div>`
//Imprimir contenido en el container
containerCreateAccount.innerHTML = contentCreatAccount;
//Boton para crear una cuenta de usuario
const btnEnter = containerCreateAccount.querySelector("#create");
btnEnter.addEventListener("click", () => {
    createAccount();
})
//Boton registrarse con Facebook
const btnFacebook = containerCreateAccount.querySelector("#enterFacebook");
btnFacebook.addEventListener("click", () => {
    loginFacebook();
})
//Boton registrarse con Google
const btnGoogle = containerCreateAccount.querySelector("#enterGoogle");
btnGoogle.addEventListener("click", () => {
    loginGoogle ();
})
return containerCreateAccount;
}