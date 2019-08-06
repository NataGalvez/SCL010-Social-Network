const loginFacebook = ()=>{
	console.log("ingresandoconfacebook");
}
export const templateFacebook = ()=>{
	const containerLoginFacebook= document.createElement("div");
	const contentLoginFacebook= `<button id="loginFacebook"> Iniciar sesión con Facebook</button>`
	contentLoginFacebook.innerHTML=contentLoginFacebook;

const btnF = contentLoginFacebook.querySelector("#loginFacebook");
btnF.addEventListener("click", () => {
    loginFacebook();
})
} return containerLoginFacebook;