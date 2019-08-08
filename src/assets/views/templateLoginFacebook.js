import { loginFacebook } from "./../js/auth.js"

export const templateFacebook = () => {
	const containerLoginFacebook= document.createElement("div");
	const contentLoginFacebook= `<button id="facebook" class="btn"> Iniciar sesión con Facebook</button>`
	containerLoginFacebook.innerHTML = contentLoginFacebook;

const btn = containerLoginFacebook.querySelector("#facebook");
btn.addEventListener("click", () => {
    loginFacebook();
})
return containerLoginFacebook;
}