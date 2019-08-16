export const templateHome = () => {
    const containerHome = document.createElement("div");
    const contentHome = `
    <div class="container-home">
        <div class="home-text">
            <span class="slogan"><h4>JUEGA</h4><p>SIN LÍMITES</p></span>
            </div>
            <div class="ball-home">
            <img class="ball" src="./assets/img/ball-home.png">
        </div>
    </div>
    <div class="container-text">
        <p>Encuentra partidos, jugadores, 
                equipos rivales o competiciones para 
                hacer lo que más te gusta.  Únete a la 
                comunidad más grande de amantes 
                del fútbol</p>
        <button class="select join"><a href="#/create">Unirme</a></button>
    </div>`
containerHome.innerHTML = contentHome;
return containerHome;
}