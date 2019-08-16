export const templateWall = () => {
    const cointainerWall = document.createElement("div");
    const contentWall = `
<div class="container wall">
    <div class="wall-content">
        <header id="header">
            <input id="search" placeholder="Búsqueda">
        </header>
        <div id="teams">
            <div id="yourTeam"></div>
            <header>
                <h3>Tus Equipos</h3>
                <button id="createTeam" class="btn">Crear Equipo</button>
            </header>
            <div class="team-content" id="team-content">
        </div>
        <div id="matches">
            <div id="nextMatches"></div>
            <header>
                <h3>Tus Partidos</h3>
                <button id="createMatch" class="btn">Crear Partido</button>
            </header>
            <div class="match-content" id="match-content">
        </div>
    </div>
</div>
<!-- TeamModal -->
<div id="createTeamModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span id="createTeamClose" class="close">&times;</span>
    <table>
        <tr>
            <td><p>Nombre Equipo</p></td>
            <td><input type="text" id="teamName" placeholder="..."></td>
        </tr>
        <tr>
            <td><p>Jugadores</p></td>
            <td>
            <select id="teamType">
            <option value="mixed">Mixto</option>
            <option value="femenine">Femenino</option>
            <option value="masculine">Masculino</option>
        </select>
            </td>
        </tr>
    </table>
    <button id="saveTeam">Crear Equipo</button>
  </div>

</div>

<!-- MatchModal -->
<div id="createMatchModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span id="createMatchClose" class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
`

//Imprimir contenido en el container
cointainerWall.innerHTML = contentWall;
//const btnFacebook = containerLogin.querySelector("#loginFacebook");


// Get the modal
let createTeamModal = cointainerWall.querySelector("#createTeamModal");
// Get the <span> element that closes the modal
let createMatchClose = cointainerWall.querySelector("#createTeamClose");
//hacer click en el enlace "Crear Equipo" abre modal con formulario
const btnCreateTeam = cointainerWall.querySelector("#createTeam");
btnCreateTeam.addEventListener("click", () => {
    createTeamModal.style.display = "block";
})
// When the user clicks on <span> (x), close the modal
createMatchClose.addEventListener("click", () => {
    createTeamModal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createTeamModal) {
        createTeamModal.style.display = "none";
    }
}

//cuando presione "btnCreateTeam" guarda el equipo en el array teams del database del usuario actual
//mejoras:
//---detectar cuando hay un equipo con el mismo nombre antes de crear
const btnsaveTeam = cointainerWall.querySelector("#saveTeam");
btnsaveTeam.addEventListener("click", () => {
    let user = firebase.auth().currentUser;//Obtén el usuario con sesión activa

    if (user != null) { //añade una sub collección al usuario
        firebase.firestore().collection("Users").doc(user.uid).collection("teams").add({
            teamName: cointainerWall.querySelector("#teamName").value,
            teamType: cointainerWall.querySelector("#teamType").value,
            members: 0
        });
        //CREO LA COLLECTION PERO NO PUEDO LLAMARLA. ARREGLAR
        let subCollection = firebase.firestore().collection("Users").doc(user.uid).collection("teams").get()
        .then(function(doc) {
            if (doc.exists) {
              console.log("Document teamName:", doc.data().teamName);
              console.log("Document teamType:", doc.data().teamType);
              console.log("Document members:", doc.data().members);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }).catch(function(error) {
            console.log("Error getting document:", error);
          });
        //${data.Poster}//comentario para sintaxis
        const contentTeam = `
        <p>Nombre del Equipo: ${user.Poster}</p>
        `
    }
    createTeamModal.style.display = "none";
})



  


return cointainerWall;
}