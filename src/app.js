console.log("holi");

import { initRouter } from "./route.js";
import {firebaseInit} from "./assets/js/firebaseInit.js";

const init = () => {
	firebaseInit();
    initRouter();
}

window.addEventListener("load", init);