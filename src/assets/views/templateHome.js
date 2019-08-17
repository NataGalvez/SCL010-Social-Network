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
    </div>
    <section>
        <h1>PARTIDOS</h1>
        <p>Juega en los próximos encuentros con un sólo clic</p>
        <img src="./assets/img/partidos.png" alt="Partidos">
        <h1>EQUIPOS</h1>
        <p>Únete o crea tu equipo</p>
        <img src="./assets/img/equipos.png" alt="Equipos">
        <h1>LIGAS</h1>
        <p>Participa con tu equipo o como jugador en eventos cercanos a ti</p>
        <img src="./assets/img/ligas.png" alt="Ligas">
    </section>
    <footer>
        <div class="footer-item">
            <h4>Tu cuenta</h4>
            <a class="mbl-none" href="#/create">Regístrate</a>
            <a class="mbl-none" href="#/login">Iniciar sesión</a>
        </div>
        <div class="footer-item">
                <h4>MatchGoal</h4>
                <a class="mbl-none" href="#">Acerca de MatchGoal</a>
        </div>
        <div class="footer-follow">
                <h4>Síguenos</h4>
                <ul>
                    <li><a href="#" class="btn-facebook"><span class="icon-facebook2"></span></a></li>
                    <li><a href="#" class="btn-twitter"><span class="icon-twitter"></span></a></li>
                    <li><a href="#" class="btn-youtube"><span class="icon-youtube"></span></a></li>
                    <li><a href="#" class="btn-instagram"><span class="icon-instagram"></span></a></li>
                </ul>
        </div>
    </footer>`
containerHome.innerHTML = contentHome;
return containerHome;
}