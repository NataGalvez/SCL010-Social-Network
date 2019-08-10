export const templateHome = () => {
    const cointainerHome = document.createElement("div");
    cointainerHome.className = "container-img"
    const contentHome = `
<div class="container-img">
<span type="image" class="template" alt="Cancha de fútbol"><h4>¡Ingresa - Confirma - Juega!</h4></span>
</div>`
    cointainerHome.innerHTML = contentHome;
    return cointainerHome;
} 
