export const templateAditionalInfo = () => {
    const containerAditionalInfo = document.createElement("div");
    containerAditionalInfo.className = "container";
    const contentInfo = ` 
    <div class="container-info-perfil">
<label> Posición </label>
                    <select id="position">
                        <option value="0"> Seleccione una posición de juego</option>
                        <option value="Arquero"> Arquero </option>
                        <option value="Defensa"> Defensa</option>
                        <option value="Mediocampista"> Mediocampista</option>
                        <option value="Delantero"> Delantero</option>
                    </select>
                    </div>
                    <div class="container-info-perfil">
                    <label>Region</label>
                    <select id="region">
                        <option value="1"> Seleccione una Región</option>
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
                    <div class="container-info-perfil">
                      <button id="create" class="login btn">Crear Cuenta</button>
                    </div>`
	//Imprimir contenido en el container
	containerAditionalInfo.innerHTML = contentInfo;
	//Boton para crear una cuenta de usuario
	const btnEnter = containerAditionalInfo.querySelector("#create");
	btnEnter.addEventListener("click", () => {
    let positionSelect=document.getElementById("position").value;
	let regionSelect=document.getElementById("region").value;
	document.getElementById("root").innerHTML = regionSelect +" y " +positionSelect;

	//document.getElementById("root").innerHTML = positionSelect;

	console.log(positionSelect);
	console.log(regionSelect);
	})

	return containerAditionalInfo;
}