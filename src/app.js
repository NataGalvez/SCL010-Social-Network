//Routes
import { initRouter } from "./route.js";

const init = () => {
    initRouter();
}
//Probar si firebase funcionó
let app = firebase.app();
console.log("FIREBASE:", app);

window.addEventListener("load", init);