const loginFacebook = ()=>{
	console.log("ingresandoconfacebook");
}
export const templateFacebook = ()=>{
	const containerLoginFacebook= document.createElement("div");
	const contentLoginFacebook= `<button id="facebook"> Iniciar sesión con Facebook</button>`
	containerLoginFacebook.innerHTML=contentLoginFacebook;

const btnF = contentLoginFacebook.querySelector("#facebook");
btnF.addEventListener("click", () => {
    loginFacebook();
})
} return containerLoginFacebook;