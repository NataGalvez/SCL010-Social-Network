import { templateLoginGoogle } from "./assets/views/templateLoginGoogle.js";
import { templateLogin} from "./assets/views/templateLogin.js";
import { templateCreateAccount } from "./assets/views/templateCreateAccount.js";

//Envía el nuevo hash para mostrar el template que se va a mostrar a través de ese 
//nuevo hash
const changeRouter = (hash) => {
    if (hash === "#/loginGoogle") {
        return showTemplate(hash);
    }
    if (hash === "#/create") {
        return showTemplate(hash);
    }
    if (hash === "#/login") {
        return showTemplate(hash);
    }
}

const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML = "";
//
    switch(router) {
        case "loginGoogle":
            containerRoot.appendChild(templateLoginGoogle());
        break;
        case "login":
            containerRoot.appendChild(templateLogin());
        break;
        case "create":
            containerRoot.appendChild(templateCreateAccount());
        break;
        default:
            containerRoot.innerHTML = 
            `<p>Error 404</p>`
    }
}

export const initRouter = () => {
    window.addEventListener("load", changeRouter(window.location.hash));

    if ("onhashchange" in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash);
        }
    }
}