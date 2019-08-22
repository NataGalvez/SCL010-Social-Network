import { templateAditionalInfo } from "./templateAditionalInfo.js";
import { getCurrentUser} from "../js/auth.js";
export const templateProfile = (profile) =>{
const containerProfile = document.createElement("div");
containerProfile.clasName = "profile"; 
document.getElement("root").appenChild(containerProfile);

let name = document.createElement("div");
let position = document.createElement("div");
let region = document.createElement("div");
name.textContent = profile.data().userName;
position.textContent= profile.data().position;
region.textContent= profile.data().region;

        
  containerProfile.appenChild(name);
  containerProfile.appenChild(position);
  containerProfile.appenChild(region);
        
}
