import { loginAccount } from "../js/auth.js";
import { loginGoogle } from "../js/auth.js";
import { loginFacebook } from "./../js/auth.js";
//Contenedor y contenido que se va a mostrar al aparecer el Template
export const templateLogin = () => {
    document.querySelector(".menu-bar").style.display="none";
    const containerLogin = document.createElement("div");
    const contentLogin = `
<div class="container login">
    <div class="login-content">
        <button id="loginGoogle" class="login-google btn">Iniciar sesión con Google</button>
        <button id="loginFacebook" class="login-facebook btn">Iniciar sesión con Facebook</button>
        <p>––––––––––––––– o –––-––––––––––––</p>
        <input type="email" id="emailLogin" placeholder="Correo Electrónico">
        <input type="password" id="passwordLogin" placeholder="Contraseña"><p><a href="#">¿Se te olvidó tu contraseña?</a></p>
        <button id="login" class="login btn">Iniciar sesión</button>
        <br>
        <p>¿No tienes una cuenta?<a href="#/create" class="createAccount">Regístrate</a></p>
    </div>
</div>`
//Imprimir contenido en el container
containerLogin.innerHTML = contentLogin;
//Boton de acceder con facebook
const btnFacebook = containerLogin.querySelector("#loginFacebook");
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