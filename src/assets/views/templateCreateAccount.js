import { createAccount } from "./../js/auth.js";

export const templateCreateAccount = () => {
    const containerCreateAccount = document.createElement("div");
    containerCreateAccount.className = "container";
    const contentCreatAccount = `<input type="email" id="email" placeholder="Ingresa tu email">
                                 <input id="password" type="password" placeholder="Ingresa una contraseña">
                                 <input id="verified" type="password" placeholder="Confirma tu contraseña">
                                 <button id="create" class="btn">Crear Cuenta</button>`
containerCreateAccount.innerHTML = contentCreatAccount;

const btn = containerCreateAccount.querySelector("#create");
btn.addEventListener("click", () => {
    createAccount();
})
return containerCreateAccount;
}