import {templateAditionalInfo} from "./templateAditionalInfo.js"
export const templateProfile = () =>{
document.getElementById("root").innerHTML = window.currenUser + window.positionSelect + window.regionSelect;
}
templateProfile();