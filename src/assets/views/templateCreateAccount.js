const createAccount = () => {
    console.log("Crear Cuenta");
}

export const templateCreateAccount = () => {
    const containerCreateAccount = document.createElement("div");
    const contentCreatAccount = `<input type="email" placeholder="Ingresa tu email">
                                 <input id="password" type="password" placeholder="Ingresa una contraseña">
                                 <input id="verified" type="password" placeholder="Confirma tu contraseña">
                                 <button id="create">Crear Cuenta</button>`
containerCreateAccount.innerHTML = contentCreatAccount;

const btn = containerCreateAccount.querySelector("#create");
btn.addEventListener("click", () => {
    createAccount();
})
return containerCreateAccount;
}