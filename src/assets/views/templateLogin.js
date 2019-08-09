import { loginAccount } from "../js/auth.js";
import { loginGoogle } from "../js/auth.js";
import { loginFacebook } from "./../js/auth.js"
//Contenedor y contenido que se va a mostrar al aparecer el Template
export const templateLogin = () => {
    const containerLogin = document.createElement("div");
    const contentLogin = `
<div class="container login">
    <div class="login-content">
        <input type="email" id="emailLogin" placeholder="Correo Electrónico">
        <input type="password" id="passwordLogin" placeholder="Contraseña"><a href="#">¿Se te olvidó tu contraseña?</a>
        <button id="login" class="login-btn-account">Iniciar sesión</button>
        <button id="loginGoogle" class="login-btn-google">Iniciar sesión con Google</button>
        <button id="facebook" class="btn">Iniciar sesión con Facebook</button>
        <br>
        <p>¿No tienes una cuenta?<a href="#create" class="createAccount">Regístrate</a></p>
    </div>
</div>`
//Imprimir contenido en el container
containerLogin.innerHTML = contentLogin;
//Boton de acceder con facebook
const btnFacebook = containerLogin.querySelector("#facebook");
btnFacebook.addEventListener("click", () => {
    loginFacebook();
})
//Boton de acceder con Google
const btnGoogle = containerLogin.querySelector("#loginGoogle");
btnGoogle.addEventListener("click", () => {
    loginGoogle ();
})
//Boton de iniciar sesión con cuenta existente
const btnLogin = containerLogin.querySelector("#login");
btnLogin.addEventListener("click", () => {
    loginAccount();
})
return containerLogin;
}