const createAccount = () => {
    console.log("Crear Cuenta");
}

export const templateCreateAccount = () => {
    const containerCreateAccount = document.createElement("div");
    const contentCreatAccount = `<p>Crear Cuenta</p>
                                 <button id="create">Crear Cuenta</button>`
containerCreateAccount.innerHTML = contentCreatAccount;

const btn = containerCreateAccount.querySelector("#create");
btn.addEventListener("click", () => {
    createAccount();
})
return containerCreateAccount;
}