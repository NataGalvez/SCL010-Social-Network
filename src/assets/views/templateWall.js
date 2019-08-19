export const templateWall = () => {
    const containerWall = document.createElement("div");
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
            <div class="containerTeam" id="containerTeam"></div>
        </div>
        <div id="matches">
            <div id="nextMatches"></div>
            <header>
                <h3>Tus Partidos</h3>
                <button id="createMatch" class="btn">Crear Partido</button>
            </header>
            <div class="containerMatch" id="containerMatch">
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
                <option value="Mixto">Mixto</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
            </select>
            </td>
        </tr>
        <tr>
            <td><input type="text" id="teamPhoto" placeholder="url..."></td>
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
  <table>
      <!-- Posible Mejora: en lugar de escribir los equipos, que despliegue lista de equipos como en un select y seleccionar uno en lugar de escribirlo, o que al escribirlo, te vaya sugiriendo equipos existentes -->
      <tr>
          <td><p>Equipo Retador</p></td>
          <td><input type="text" id="challengingTeamName" placeholder="..."></td>
      </tr>
      <tr>
          <td><p>Equipo Desafiado</p></td>
          <td><input type="text" id="challengedTeamName" placeholder="..."></td>
      </tr>
      <tr>
          <td><p>Tipo de Juego</p></td>
          <td>
          <select id="matchGame">
                <option value="Fútbol 11">Fútbol 11</option>
                <option value="Futbolito">Futbolito</option>
                <option value="Baby Fútbol">Baby Fútbol</option>
          </select>
          </td>
      </tr>
      <tr>
          <td><p>Jugadores</p></td>
          <td>
          <select id="teamTypeMatch">
                <option value="Mixto">Mixto</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
          </select>
          </td>
      </tr>
      <tr>
          <td><p>Encuentro Amistoso o Torneo</p></td>
          <td>
          <select id="matchType">
                <option value="Amistoso">Amistoso</option>
                <option value="Torneo">Torneo</option>
          </select>
          </td>
      </tr>
      <tr>
          <td><p>Organizador</p></td>
          <!-- Posible Mejora: sugiera usuario o equipo organizador -->
          <td><input type="text" id="organizer" placeholder="..."></td>
      </tr>
      <tr>
          <td><p>Cuándo</p></td>
          <td>
          <!-- Posible Mejora: Desplegar un calendario y seleccionar en él la fecha -->
          <p>día: </p>
          <select id="day">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
          </select>
          <p>, mes: </p>
          <select id="month">
                <option value="enero">enero</option>
                <option value="febrero">febrero</option>
                <option value="marzo">marzo</option>
                <option value="abril">abril</option>
                <option value="mayo">mayo</option>
                <option value="junio">junio</option>
                <option value="julio">julio</option>
                <option value="agosto">agosto</option>
                <option value="septiembre">septiembre</option>
                <option value="octubre">octubre</option>
                <option value="noviembre">noviembre</option>
                <option value="diciembre">diciembre</option>
          </select>
          <p>, año: </p>
          <select id="year">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
          </select>
          </td>
      </tr>
      <tr>
          <td><p>Dónde (dirección)</p></td>
          <td><input type="text" id="address" placeholder="..."></td>
      </tr>

  </table>
  <button id="saveMatch">Crear Partido</button>
</div>

</div>
`

//Imprimir contenido en el container
containerWall.innerHTML = contentWall;


// Get the team modal
let createTeamModal = containerWall.querySelector("#createTeamModal");
// Get the <span> team element that closes the modal
let createTeamClose = containerWall.querySelector("#createTeamClose");
//hacer click en el enlace "Crear Equipo" abre modal con formulario
const btnCreateTeam = containerWall.querySelector("#createTeam");
btnCreateTeam.addEventListener("click", () => {
    createTeamModal.style.display = "block";
})
// When the user clicks on <span> (x), close the modal
createTeamClose.addEventListener("click", () => {
    createTeamModal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createTeamModal) {
        createTeamModal.style.display = "none";
    }
}

// Get the match modal
let createMatchModal = containerWall.querySelector("#createMatchModal");
// Get the <span> team element that closes the modal
let createMatchClose = containerWall.querySelector("#createMatchClose");
//hacer click en el enlace "Crear Partido" abre modal con formulario
const btnCreateMatch = containerWall.querySelector("#createMatch");
btnCreateMatch.addEventListener("click", () => {
    createMatchModal.style.display = "block";
})
// When the user clicks on <span> (x), close the modal
createMatchClose.addEventListener("click", () => {
    createMatchModal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createMatchModal) {
        createMathcModal.style.display = "none";
    }
}


//cuando cargue el usuario actual, si tiene equipos, mostrarlos
const containerTeam = containerWall.querySelector("#containerTeam");
//cuando cargue el usuario actual, si tiene partidos, mostrarlos
const containerMatch = containerWall.querySelector("#containerMatch");

let user = firebase.auth().currentUser;
if (user != null) {
    //mostrar divs de los equipos del usuario actual
    firebase.firestore().collection("Users").doc(user.uid).collection("teams").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());//imprimir equipos del usuario actual en consola
            // doc.data() is never undefined for query doc snapshots
            const contentTeam = document.createElement("div");
            contentTeam.innerHTML = `
                <div class="team-content" id="team-content">
                    <div class="team-photo"><a href="${doc.data().photo}"></a></div>
                    <p class="team-type">${doc.data().teamType}</p>
                    <h4 class="team-name">${doc.data().teamName}</h4>
                    <p class="team-info">${doc.data().info}</p>
                    <button class="joinMe" id="${doc.data().teamId}" value="${doc.data().teamId}">Unirme</button>
                    <p id="team-userJoins-${doc.data().teamId}"></p>
                </div>
                `
            containerTeam.appendChild(contentTeam);
            counterUserJoins(user, doc);//actualizar html id team-userJoins...
            const btnJoinMe = containerWall.querySelector("#"+doc.data().teamId);
            btnJoinMe.addEventListener("click", () => {
                console.log("asignó el listener que querimoh");
                //cuando presione botón, se guarda en una colección de usuarios del equipo los usuarios que se unieron (para partir, sólo puedo unirme yo mismo)
                userJoins(user, doc);
            })
        });
    });
    containerWall.querySelector("#containerTeam");

    //mostrar divs de los partidos del usuario actual
    firebase.firestore().collection("Users").doc(user.uid).collection("matches").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());//imprimir equipos del usuario actual en consola
            // doc.data() is never undefined for query doc snapshots
            const contentMatch = document.createElement("div");
            contentMatch.innerHTML = `
                <div class="match-content" id="match-content">
                    <p class="match-date">${doc.data().date}</p>
                    <p class="match-rivals">${doc.data().challengingTeamName} vs ${doc.data().challengedTeamName}</p>
                    <p class="match-matchGame&teamType">${doc.data().matchGame}, ${doc.data().teamTypeMatch}</p>
                    <p class="match-matchType">${doc.data().matchType}</p>
                    <p class="match-organizer">Organizado por: ${doc.data().organizer}</p>
                    <p class="match-address">${doc.data().address}</p>
                    <button class="takePart" id="${doc.data().matchId}" value="${doc.data().matchId}">Participar</button>
                    <p id="match-takePart-${doc.data().matchId}"></p>
                </div>
                `
            containerMatch.appendChild(contentMatch);
            counterUsersTakePart(user, doc);//actualizar html id match-takePart-...
            const btnTakePart = containerWall.querySelector("#"+doc.data().matchId);
            btnTakePart.addEventListener("click", () => {
                console.log("asignó el listener que querimoh");
                //cuando presione botón, se guarda en una colección de usuarios del equipo los usuarios que se unieron (para partir, sólo puedo unirme yo mismo)
                userTakePart(user, doc);
            })
        });
    });
    containerWall.querySelector("#containerMatch");
}


//cuando presione "btnCreateTeam" guarda el equipo en el array teams del database del usuario actual
//mejoras:
//---detectar cuando hay un equipo con el mismo nombre antes de crear
const btnsaveTeam = containerWall.querySelector("#saveTeam");
btnsaveTeam.addEventListener("click", () => {
    let user = firebase.auth().currentUser;//Obtén el usuario con sesión activa

    if (user != null) {//añade una sub collección al usuario
        firebase.firestore().collection("Users").doc(user.uid).collection("teams").add({
            teamName: containerWall.querySelector("#teamName").value,
            teamType: containerWall.querySelector("#teamType").value,
            photo: "",
            info: "",
            teamId: ""
        });
        //imprimir equipos del usuario cuando ya creó equipo nuevo
        firebase.firestore().collection("Users").doc(user.uid).collection("teams").get()
        .then(function(querySnapshot) {
            containerTeam.innerHTML = "";//borra para que no se acumulen
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());

                //(1)update id de cada team para que quede guardado en database (no se puede guardar el id con .add, por eso lo añadimos aquí). Se actualizará forever and ever
                firebase.firestore().collection("Users").doc(user.uid).collection("teams").doc(doc.id).update({
                    "teamId": doc.id
                })
        

                const contentTeam = document.createElement("div");
                contentTeam.innerHTML = `
                    <div class="team-content" id="team-content">
                        <div class="team-photo"><a href="${doc.data().photo}"</a></div>
                        <p class="team-type">${doc.data().teamType}</p>
                        <h4 class="team-name">${doc.data().teamName}</h4>
                        <p class="team-info">${doc.data().info}</p>
                        <button class="joinMe" id="${doc.data().teamId}" value="${doc.data().teamId}">Unirme</button>
                        <p id="team-userJoins-${doc.data().teamId}"></p>
                    </div>
                    `
                containerTeam.appendChild(contentTeam);
                const btnJoinMe = containerWall.querySelector("#"+doc.data().teamId);
                btnJoinMe.addEventListener("click", () => {
                    console.log("asignó el listener que querimoh");
                    //cuando presione botón, se guarda en una colección de usuarios del equipo los usuarios que se unieron (para partir, sólo puedo unirme yo mismo)
                    userJoins(user, doc);
                })
            });
        });
    }
    createTeamModal.style.display = "none";
})


//cuando presione "btnCreateMatch" guarda el equipo en el array matches del database del usuario actual
const btnsaveMatch = containerWall.querySelector("#saveMatch");
btnsaveMatch.addEventListener("click", () => {
    let user = firebase.auth().currentUser;//Obtén el usuario con sesión activa

    if (user != null) { //añade una sub collección al usuario
        firebase.firestore().collection("Users").doc(user.uid).collection("matches").add({
            challengingTeamName: containerWall.querySelector("#challengingTeamName").value,
            challengedTeamName: containerWall.querySelector("#challengedTeamName").value,
            matchGame: containerWall.querySelector("#matchGame").value,
            teamTypeMatch: containerWall.querySelector("#teamTypeMatch").value,
            matchType: containerWall.querySelector("#matchType").value,
            organizer: containerWall.querySelector("#organizer").value,
            date: containerWall.querySelector("#day").value +" "+ containerWall.querySelector("#month").value +", "+ containerWall.querySelector("#year").value,
            address: containerWall.querySelector("#address").value,
            matchId: ""
        });
        //imprimir partidos del usuario cuando ya creó un partido nuevo
        firebase.firestore().collection("Users").doc(user.uid).collection("matches").get()
        .then(function(querySnapshot) {
            containerMatch.innerHTML = "";//borra para que no se acumulen
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());

                //(1)update id de cada team para que quede guardado en database (no se puede guardar el id con .add, por eso lo añadimos aquí). Se actualizará forever and ever
                firebase.firestore().collection("Users").doc(user.uid).collection("matches").doc(doc.id).update({
                    "matchId": doc.id
                })

                const contentMatch = document.createElement("div");
                contentMatch.innerHTML = `
                <div class="match-content" id="match-content">
                    <p class="match-date">${doc.data().date}</p>
                    <p class="match-rivals">${doc.data().challengingTeamName} vs ${doc.data().challengedTeamName}</p>
                    <p class="match-matchGame&teamType">${doc.data().matchGame}, ${doc.data().teamTypeMatch}</p>
                    <p class="match-matchType">${doc.data().matchType}</p>
                    <p class="match-organizer">Organizado por: ${doc.data().organizer}</p>
                    <p class="match-address">${doc.data().address}</p>
                    <button class="takePart" id="${doc.data().matchId}" value="${doc.data().matchId}">Participar</button>
                    <p id="match-takePart-${doc.data().matchId}"></p>
                </div>
                `
                containerMatch.appendChild(contentMatch);
                const btnTakePart = containerWall.querySelector("#"+doc.data().matchId);
                btnTakePart.addEventListener("click", () => {
                    console.log("asignó el listener que querimoh");
                    //cuando presione botón, se guarda en una colección de usuarios del equipo los usuarios que se unieron (para partir, sólo puedo unirme yo mismo)
                    userTakePart(user, doc);
                })
            });
        });
    }
    createMatchModal.style.display = "none";
})


const userTakePart = (user, doc) => {
    firebase.firestore().collection("Users").doc(user.uid).collection("matches").doc(doc.data().matchId).collection("takePart").doc(user.uid).set({
        username: user.displayName,
        email: user.email,
        userId: user.uid,
        position: "",
        region: "",
        photo: ""
        //some more user data
    }).then(() => {
        console.log("Document successfully written!");
        //añadir la cantidad de personas que se unieron al partido al html
        counterUsersTakePart(user, doc);
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    });
    console.log("terminé de agregar datos");
}

const userJoins = (user, doc) => {
    firebase.firestore().collection("Users").doc(user.uid).collection("teams").doc(doc.data().teamId).collection("usersJoin").doc(user.uid).set({
        username: user.displayName,
        email: user.email,
        userId: user.uid,
        position: "",
        region: "",
        photo: ""
        //some more user data
    }).then(() => {
        console.log("Document successfully written!");
        //añadir la cantidad de personas que se unieron al partido al html
        counterUserJoins(user, doc);
    })
    .catch(error => {
        console.error("Error writing document: ", error);
    });
    console.log("terminé de agregar datos");
}

const counterUserJoins = (user, doc) => {//añadir la cantidad de personas que se unieron al partido al html
    firebase.firestore().collection("Users").doc(user.uid).collection("teams").doc(doc.data().teamId).collection("usersJoin").get()
    .then(function(querySnapshot) {
        containerWall.querySelector("#team-userJoins-"+doc.data().teamId).innerHTML = "";//borra para que no se acumulen
        let counter = 0;
        console.log("counter: "+counter);
        
        querySnapshot.forEach(function(doc) {
            counter++;
            console.log("counter: "+counter);
        });
        containerWall.querySelector("#team-userJoins-"+doc.data().teamId).innerHTML = "Miembros: "+ counter;
    });
}

const counterUsersTakePart = (user, doc) => {
    //añadir la cantidad de personas que se unieron al partido al html
    firebase.firestore().collection("Users").doc(user.uid).collection("matches").doc(doc.data().matchId).collection("takePart").get()
    .then(function(querySnapshot) {
        containerWall.querySelector("#match-takePart-"+doc.data().matchId).innerHTML = "";//borra para que no se acumulen
        let counter = 0;
        console.log("counter: "+counter);
        
        querySnapshot.forEach(function(doc) {
            counter++;
            console.log("counter: "+counter);
        });
        containerWall.querySelector("#match-takePart-"+doc.data().matchId).innerHTML = "Participantes: "+counter;
    });
}


return containerWall;
}