import { loginAccount } from "../js/auth.js";

export const templateLogin = () => {
    const containerLogin = document.createElement("div");
    containerLogin.className = "container";
    const contentLogin = `<input type="email" id="emailLogin" placeholder="Email">
                          <input type="password" id="passwordLogin" placeholder="Contraseña">
                          <button id="login" class="customBtn">Ingresar</button>`
containerLogin.innerHTML = contentLogin;

const btn = containerLogin.querySelector("#login");
btn.addEventListener("click", () => {
    loginAccount();
})
return containerLogin;
}