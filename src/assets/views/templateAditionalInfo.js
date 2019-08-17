export const templateAditionalInfo = () => {
    const containerAditionalInfo = document.createElement("div");
    containerAditionalInfo.className = "container";
    const contentInfo = ` 
    <div class="login-content">
                    <div class="selectors">
                    <select id="position">
                        <option value="0"> Seleccionar posición</option>
                        <option value="Arquero"> Arquero </option>
                        <option value="Defensa"> Defensa</option>
                        <option value="Mediocampista"> Mediocampista</option>
                        <option value="Delantero"> Delantero</option>
                    </select>
                    <select id="region">
                        <option value="1"> Seleccionar región</option>
                        <option value="Región de Arica y Parinacota"> Región de Arica y Parinacota</option>
                        <option value="Región de Tarapacá"> Región de Tarapacá</option>
                        <option value="Región de Antofagasta"> Región de Antofagasta</option>
                        <option value="Región de Atacama"> Región de Atacama</option>
                        <option value="Región de Coquimbo"> Región de Coquimbo</option>
                        <option value="Región de Valparaíso"> Región de Valparaíso</option>
                        <option value="Región Metropolitana de Santiago"> Región Metropolitana de Santiago</option>
                        <option value="Región del Libertador General Bernardo O'Higgins"> Región del Libertador General Bernardo O'Higgins</option>
                        <option value="Región del Maule"> Región del Maule</option>
                        <option value="Región del Ñuble"> Región del Ñuble</option>
                        <option value="Región del Biobío"> Región del Biobío</option>
                        <option value="Región de La Araucanía"> Región de La Araucanía</option>
                        <option value="Región de Los Ríos"> Región de Los Ríos</option>
                        <option value="Región de Los Lagos"> Región de Los Lagos</option>
                        <option value="Región de Aysén del General Carlos Ibáñez del Campo"> Región de Aysén del General Carlos Ibáñez del Campo</option>
                        <option value="Región de Magallanes y la Antártica Chilena"> Región de Magallanes y la Antártica Chilena</option>   
                    </select>
                    </div>
    <button id="create" class="btn">Ir a MatchGoal</button>
    </div>`
	
	containerAditionalInfo.innerHTML = contentInfo;
	
	let btnEnter = containerAditionalInfo.querySelector("#create");
	btnEnter.addEventListener("click", () => {
    let positionSelect=document.getElementById("position").value;
	let regionSelect=document.getElementById("region").value;
	document.getElementById("root").innerHTML = regionSelect+" y " +positionSelect;
})
return containerAditionalInfo;
}