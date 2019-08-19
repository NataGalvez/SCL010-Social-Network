import {templateAditionalInfo} from "./templateAditionalInfo.js";
import { loginGoogle} from "../js/auth.js";
export const templateProfile = () =>{
const containerProfile = document.createElement("div");
containerProfile.clasName = "profile";
let contentProfile = firebase.firestore().collection("Users").doc(result.user.uid).get().then((userData)=>{
     let user = userData.data();
     user.type;
     user.region;
     containerAditionalInfo.innerHTML = contentInfo;
    return templateProfile; 
})
}