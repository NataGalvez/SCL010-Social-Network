export const templateAditionalInfo = () => {
    const containerAditionalInfo = document.createElement("div");
    containerAditionalInfo.className = "container-info-perfil"
    const contentInfo = `
<div class="container-info-perfil">
<label> Posición </label>
                    <select id="position">
                        <option value=""> Seleccione una posición de juego</option>
                        <option value=""> Arquero </option>
                        <option value=""> Defensa</option>
                        <option value=""> Mediocampista</option>
                        <option value=""> Delantero</option>
                    </select>
                    <label>Region</label>
                    <select id="region">
                        <option value=""> Seleccione una Región</option>
                        <option value=""> Región de Arica y Parinacota</option>
                        <option value=""> Región de Tarapacá</option>
                        <option value=""> Región de Antofagasta</option>
                        <option value=""> Región de Atacama</option>
                        <option value=""> Región de Coquimbo</option>
                        <option value=""> Región de Valparaíso</option>
                        <option value=""> Región Metropolitana de Santiago</option>
                        <option value=""> Región del Libertador General Bernardo O'Higgins</option>
                        <option value=""> Región del Maule</option>
                        <option value=""> Región del Ñuble</option>
                        <option value=""> Región del Biobío</option>
                        <option value=""> Región de La Araucanía</option>
                        <option value=""> Región de Los Ríos</option>
                        <option value=""> Región de Los Lagos</option>
                        <option value=""> Región de Aysén del General Carlos Ibáñez del Campo</option>
                        <option value=""> Región de Magallanes y la Antártica Chilena</option>   
                    </select>
                     <label class="search">Genero</label>
                    <select id="gender">
                        <option value=""> Seleccione un género</option>
                        <option value=""> Mujer</option>
                        <option value=""> Hombre</option>
                        <option value=""> Sin Genero</option>
                    </select> </div>`
    containerAditionalInfo.innerHTML = contentInfo;
    return containerAditionalInfo;
} 
