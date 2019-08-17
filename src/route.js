import { templateLogin} from "./assets/views/templateLogin.js";
import { templateCreateAccount } from "./assets/views/templateCreateAccount.js";
import { templateAditionalInfo} from "./assets/views/templateAditionalInfo.js";
import { templateHome } from "./assets/views/templateHome.js";
import { templateWall } from "./assets/views/templateWall.js";

//Envía el nuevo hash para mostrar el template que se va a mostrar a través de ese 
//nuevo hash
const changeRouter = (hash) => {
    if (hash === "") {
        return showTemplate("#/home")
    }
    if (hash === "#/home") {
        return showTemplate(hash);
    }
    if (hash === "#/login") {
        return showTemplate(hash);
    }
    if (hash === "#/create") {
        return showTemplate(hash);
    }
    if (hash === "#/wall") {
        return showTemplate(hash);
    }
    if (hash === "#/info") {
        return showTemplate(hash);
    }
}
//Completar el hash según el cambio en la ruta
const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML = "";
//Ejecutar funcion según la ruta escrita en el hash
    switch(router) {
        case "home":
            containerRoot.appendChild(templateHome());
        break;
        case "login":
            containerRoot.appendChild(templateLogin());
        break;
        case "create":
            containerRoot.appendChild(templateCreateAccount());
        break;
        case "wall":
            containerRoot.appendChild(templateWall());
        break;
        case "info":
            containerRoot.appendChild(templateAditionalInfo());
        break;
        default:
            containerRoot.innerHTML = `<p>Página no encontrada, Error 404</p>`
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