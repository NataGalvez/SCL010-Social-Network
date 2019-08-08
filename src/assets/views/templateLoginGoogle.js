import { loginGoogle } from "../js/auth.js";

export const templateLoginGoogle = () => {
    const containerLoginGoogle = document.createElement("div");
    containerLoginGoogle.className = "container";
    const contentLoginGoogle = `<p>Login con Google</p>
                          <button id="loginGoogle" class="btn">Login with Google</button>` 
containerLoginGoogle.innerHTML = contentLoginGoogle;

const btn = containerLoginGoogle.querySelector("#loginGoogle");
btn.addEventListener("click", () => {
    loginGoogle ();
})
return containerLoginGoogle;
}