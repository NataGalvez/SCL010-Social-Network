# Creando una Red Social
> Este proyecto fue desarrollado en Laboratoria SCL y tuvo por objetivo crear una red social que permita a cualquier usuario crear una cuenta de acceso y loguearse con ella; crear, editar, borrar y "likear" publicaciones.

## Índice

 - [Idea](#idea)
    *  [Preámbulo](#preámbulo)
     * [MatchGoal](#matchgoal)
     * [Funcionalidades](#funcionalidades)
     * [Público Objetivo](#objetivo)
         * [Principales usuarios](#principales-usuarios)
        * [Potenciales clientes](#potenciales-clientes)
     * [Visión](#visión)
      * [Misión](#misión)
      * [Cómo usar la aplicación](#cómo-usar-la-aplicación)
  - [Metodología](#metodología)
     * [Experiencia de Usuario](#experiencia-de-usuario)
        *   [Hipótesis](#hipótesis)
             * [Investigación](#investigación)
             *  [Benchmarking](#benchmarking)
        * [Definición de historias de usuario](#definición-de-historias-de-usuario)
        * [Diagrama de flujo](#diagrama-de-flujo)
        * [Prototipo de baja fidelidad](#prototipo-de-baja-fidelidad)
          * [Wireframe](#wireframe)
        *  [Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
           * [Definición del nombre de la aplicación](#definición-del-nombre-de-la-aplicación)
          *  [Definición de colores](#definición-de-colores)
          *  [Definición de estilo](#definición-de-estilo)
          *  [Testeo con usuarios](#testeo-con-usuarios)
          *  [Modificaciones](#modificaciones)
    * [Planificación](#planificación)
- [Herramientas utilizadas](#herramientas-utilizadas)
 - [Equipo de trabajo](#equipo-de-trabajo)
-  [Proyecciones Futuras](#proyecciones-futuras)

*
# Idea

![Logo](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Logo.jpg)

## Preámbulo

Practicar deportes de equipo no siempre es una tarea fácil. Principalmente en las grandes ciudades, coordinarse con amigos es, en ocasiones, una tarea imposible, por lo que más de una vez tenemos que colgar nuestras botas y mirarlas con anhelo. Pero hoy, conectarnos está al alcance de la mano. Las redes sociales y las app de contacto se han especializado en cada ámbito de nuestra vida, y el deporte no iba a ser menos.

## MatchGoal

¿Ganas de jugar al fútbol pero no hay con quienes disputar un partido? Al parecer este es el problema más recurrente entre los aficionados jugadores de fútbol, y es que no es tarea fácil juntar equipos completos para disputar un partido, ya que deben coordinar sus horarios, definir un lugar accesible para la mayoría y contar con una cantidad mínima de participantes y, algo importante también que se debe considerar, las distintas categorías de juego que existen como fútbol 11, futbolito y baby fútbol y sus modalidades, partidos mixtos, masculinos o femeninos.

MatchGoal es una red social que permite al alcance de la mano y en poco tiempo, participar de partidos de fútbol con quienes comparten la misma pasión. También permite formar parte de una gran comunidad futbolística uniéndose a equipos o ligas con un sólo clic.

¿Cómo funciona? ¡Rápido y sencillo! Solo debes crear un perfil en la aplicación, inscribirte para jugar en un partido con un sólo clic y listo, ya puedes divertirte jugando a lo que más te gusta.

> [Demo MatchGoal](https://villarrealscarlette.github.io/SCL010-data-lovers/src/index.html) 

## Funcionalidades

MatchGoal permitirá:
- Encontrar partidos de fútbol e inscribirte para jugar con un solo clic
- Acceder a tu perfil de jugador
- Conformar equipos e invitar a otros jugadores a unirse   
- Participar de distintas competiciones como jugador o con tu equipo 
- Crear tus propios partidos o ligas competitivas
- Formar parte de equipos o ligas organizadas por la comunidad

## Público Objetivo

### Principales usuarios

MatchGoal es para todos aquellos hombres y mujeres mayores de 16 años que desean jugar al fútbol. Los partidos consideran las distintas categorías, modalidades y niveles de juego. 
¡Bienvenidos todos a este hermoso deporte!

### Potenciales clientes

Se evaluaron distintas posibilidades futuras de generación de ingresos, sin dejar de ser una aplicación de acceso gratuito para sus usuarios. Dentro de las más atractivas están:

- *Patrocinio de centros deportivos:* permitir arrendar instalaciones deportivas para llevar a cabo partidos de fútbol o competiciones a través de la aplicación.
- *Marketing y exposición online de marcas:* anuncios publicitarios dentro de la aplicación de las diferentes marcas patrocinadoras. 
 - *Actividades patrocinadas:* los patrocinadores podrán exponer publicidad durante las actividades como también colocar stands para la venta de productos, entre otras formas de negocios. 

## Visión

Convertirnos en la comunidad de jugadores y jugadoras de fútbol más grande del país. 

## Misión

Promover, de manera inclusiva, la práctica de jugar al fútbol a todo aquel que lo desee practicar, a través de la gestión y organización de partidos de cualquier nivel, ofreciendo una aplicación de encuentro entre jugadores y equipos.

## Cómo usar la aplicación

- El usuario debe acceder al sitio web de [MatchGoal](https://villarrealscarlette.github.io/SCL010-data-lovers/src/index.html)
- Para ingresar dentro de la aplicación deberá iniciar sesión o registrarse
- Al registrarse deberá completar información adicional de su perfil como lo son la posición de juego de su preferencia y la Región donde se ubica.
- Al ingresar a la aplicación se visualizará el muro (panel) de acceso a su perfil de jugador, notificaciones, sus equipos, sus próximos partidos, partidos disponibles para participar, otros equipos y el navegador de búsqueda.
- Para editar la información de usuario, modificar las ligas activas y cerrar sesión se debe acceder al perfil de jugador desde el muro
- Para crear un partido se debe dar clic en "Crear partido" ubicado en la sección del muro "Tus próximos partidos"
- Para crear un equipo se debe dar clic en "Crear equipo" ubicado en la sección del muro "Tus equipos"
- Para ver la información de un partido o desistir de participar, se debe dar clic sobre su tarjeta ubicada en la sección "Tus próximos partidos" o para participar en uno desde la sección "Otros partidos"
- Para ver la información de un equipo o retirarse de el, se debe dar clic sobre su tarjeta ubicada en la sección "Tus equipos" o para unirte a uno desde la sección "Otros equipos"
- Para ver la información de una liga activa o retirarse, se debe dar clic sobre su tarjeta ubicada en el perfil de jugador

# Metodología

## UX: Experiencia de Usuario

### Hipótesis

La idea surgió a raíz de la problemática que dos de las integrantes del equipo de trabajo comparten: las pocas instancias para jugar al fútbol por la falta de organización con los demás jugadores y los pocos espacios para practicar fútbol femenino. 

Con base en lo anterior, se discutió como equipo de trabajo la posibilidad de que esta problemática la tuvieran también otros futbolistas. Se planteó entonces como hipótesis que, *la falta de organización o jugadores es una problemática constante entre quienes desean jugar al fútbol*.

#### Investigación

Para la comprobación de la hipótesis se utilizó, como fundamento de nuestra investigación, una encuesta online la cual tuvo un alcance de 31 jugadores(as) de fútbol de todos los niveles.

![Encuesta](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Readme/encuesta.jpg)

Para acceder a la encuesta haz clic [aquí](https://forms.gle/E9W4kzqcDkDve7Y19)

### Benchmarking

Se consideró dentro del Benchmarking las siguientes aplicaciones:

- [Equipo Completo](https://www.equipocompleto.cl/)

Equipo completo entrega el servicio de mejorar la gestión y organización de actividades deportivas grupales en distintos deportes. 

- [Meetup](https://www.meetup.com/)

Meetup es un servicio usado para organizar grupos online que organizan eventos en persona para personas con similares intereses. Se analizó la manera de organizar y presentar la información tanto de grupos como eventos, ya que consideramos es una forma óptima y sencilla de utilizar por los usuarios, logrando adaptar su modelo a nuestra aplicación.

- [Pitz](https://play.google.com/store/apps/details?id=com.amplemind.dev.pitz&hl=es_CL)

Pitz es una aplicación que permite organizar partidos de fútbol. Se comparó nuestro diagrama de flujo con la usabilidad de la aplicación para durimentar el flujo de decisión de los usuarios dentro de MatchGoal. Además, se analizaron los procesos de creación de partidos y creación de equipos para adaptarlos a nustra aplicación.

### Definición de historias de usuario

La definición fue basada en las funcionalidades que la aplicación debe realizar para cumplir con las necesidades de sus usuarios.

- *Historia de usuario #1 Ingresar a la aplicación*: Yo como jugador(a) de fútbol quisiera ingresar mediante inicio de sesión o registro a la aplicación para acceder a sus servicios

- *Historia de usuario #2 Muro/timeline*: Yo como jugador(a) de futbol quisiera visualizar en un sólo lugar los equipos, partidos y ligas disponibles para participar.

- *Historia de usuario #3 Perfil*: Yo como jugador(a) de fútbol quisiera tener un perfil para poder participar dentro de la comunidad

- *Historia de usuario #4 Partidos*: Yo como jugador(a) de futbol quisiera crear, participar o desistir de encuentros futbolísticos

- *Historia de usuario #5 Equipos*: Yo como jugador(a) de fútbol quisiera poder crear y participar de equipos para aumentar mis posibilidades de jugar

- *Historia de usuario #6 Ligas*: Yo como jugador(a) de fútbol quisiera poder participar de ligas como jugador(a) o con mi equipo para aumentar mis posibilidades de jugar e interactuar con la comunidad


### Diagrama de flujo

Detalla el proceso que sigue el uso de la aplicación, basado en las historias de usuarios antes definidas.  
![Diagrama](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Readme/Diagrama.jpg)

### Prototipo de baja fidelidad

#### Wireframe

Se elaboró el prototipo de baja fidelidad según las primeras lluvias de ideas sobre la aplicación. el cual fue la principal guía para la elaboración del diseño y estructura

Se puede visualizar el wireframe completo [aquí](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/bajaFidelidad)

#### Definición del nombre de la aplicación

La definición del nombre se realizó mediante el testeo, con seis compañeras del Bootcamp, de las cuatro siguientes alternativas:
- MatchGoal
- Todos Jugamos
- FutbolGO
- MatchRival

Tras obtener 5 votos a favor, MatchGoal fue elegido como nombre para la aplicación.

Algunas consideraciones recibidas respecto al nombre fueron:
- Es corto y fácil de recordar
- Se asocia al fútbol porque es una palabra compuesta entre partido (match) y gol (goal)

### Prototipo de alta fidelidad

Se realizó en la aplicación Adobe XD basado en las ideas abstraidas del benchmarking y siguiendo los principios de diseño de balance, énfasis, repetición y proximidad.

![Matchgoal-web](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Readme/web.jpg)

Se puede visualizar el diseño completo [aquí](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Prototipo%20Alta%20Fidelidad%20MatchGoal)

#### Definición de colores

Se definieron los colores en base a lo que representa la aplicación, también se utilizó una imagen de fondo representativa del pasto de una cancha de fútbol. El color verde como símbolo de la salud, el deporte, el bienestar y la energía, aspectos a los que aspira MatchGoal a entregar a sus usuarios a través de la promoción del jugar al fútbol. Y amarillo como símbolo de la competitividad, el movimiento y la extroversion, con la finalidad de promover la actividad física en comunidad.

![Paleta-de-colores](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/Readme/Colores.png)

#### Testeo con usuarios

Se testeó con 3 usuarios la usabilidad y diseño de la aplicación

#### Usuario 1

Identificación de usuario 1

- *Nombre:* Claudia Carzioglo
- *Edad:* 55 años
- *Ocupación:* Trabajadora independiente
- *Relación con el fútbol:* Fue jugadora hasta los 45 años
- *Feedback/consideraciones:*
   - Considera que deberían existir más información sobre el servicio que entrega la aplicación
   - Dice que no es intuitivo es scroll en las pantallas, aconsejó incluir un botón o flecha que indique que hacia abajo hay más contenido
   - Plantea una duda respecto a quién pertenece el perfil, no le queda claro si pertenece a ella como usuario o a otro jugador de la aplicación
   - Entiende que la parte inferior del perfil son equipos, cuando lo que se quiere reflejar son las ligas en las que participa el jugador

![Usuario-1](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/testeos/1)

Identificación de usuario 2

- *Nombre:* Matias Galvez
- *Edad:* 16 años
- *Ocupación:* Estudiante
- *Relación con el fútbol:* Es jugador amateur 
- *Feedback/consideraciones:*
   - Sin intención descubre que existe más información haciendo scroll ya que él no expresa que no era intuitivo
   - Plantea una duda respecto de cómo puede acceder a participar de un partido o equipo
   - Expresa que los colores y el diseño le gustan
   - No evidencia mayores complicaciones al utilizar la aplicación

![Usuario-2](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/testeos/2)

Identificación de usuario 3

- *Nombre:* Pablo Galvez
- *Edad:* 26 años
- *Ocupación:* Estudiante
- *Relación con el fútbol:* Juega ocasionalmente
- *Feedback/consideraciones:*
   - No pudo acceder a toda la información ya que hacer scroll no fue intuitivo
   - Dice que entiende el proposito de la aplicación y que le gusta tanto la idea como el diseño
   - Gesticula y verbaliza entender cada acción que realiza
   - No evidencia mayores complicaciones al utilizar la aplicación

![Usuario-3](https://github.com/VillarrealScarlette/SCL010-Social-Network/blob/master/src/assets/img/testeos/3)

Feedback entregado por el área de UX de Laboratoria

Coach: Allison
- Nos planteó que habían elementos no estaban bien alineados
- Nos hizo ver que había una sobrecarga de colores
- Nos explicó que los elementos principales deben estar posicionados estrategicamente para que el usuario pueda acceder facilmente a ellos
- Nos sugirió tanto resaltar la información más relevantes para los usuarios, como minimizar o quitar aquella que no lo era
#### Modificaciones

Basado en los testeos realizados, nuestras consideraciones son que debemos mejorar la aplicación en aspectos de diseño, existen elementos que a los cuales no se logra acceder por falta de claridad ya que no son intuitivos, el no intuir realizar scroll es una de las consideraciones que se repitió entre los usuarios. Otro aspectos que consideramos relevante de mejorar son las instrucciones, guías e información que se le entrega al usuario para navegar en la aplicación, consideramos que podrían ser más asertivos para no generar dudas en las acciones que se van a realizar.

Considerando el feedback recibido por Allison se modificaron la alineación de los elementos dentro de main; los elementos principales como las notificaciones fueron reacomodados de lugar; existian colores, como el gris, que fueron cambiados para evitar generar un sobrecargo de colores; y finalmente se hizo un esfuerzo por optimizar la entrega de la información.

## Planificación

- Kanban
Para la planificación y gestión de las tareas del proyecto se utilizó la metodología ágil Kanban. El tablero se encuentra disponible [aquí](https://trello.com/b/4CMhkDxt)

- Daily Meeting
Reuniones diarias para inspeccionar el trabajo realizado el día anterior y planificar las actividades del día

# Herramientas utilizadas

- [Balsamiq](https://balsamiq.com/)

Herramienta utilizada para elaborar el prototipo de baja fidelidad Wireframe. 

- [Lucidchart](https://lucidchart.com/‎)

Herramienta utilizada para elaborar el diagrama de flujo.

- [Google Forms](https://www.google.com/intl/es-419_cl/forms/about/)

Herramienta utilizada para elaborar la encuesta de nuestra hipótesis.

- [Trello](https://trello.com/)

Herramienta utilizada para elaborar el tablero de planificación Kanban.

- [Adobe XD](https://www.adobe.com/la/products/xd.html)

Herramienta utilizada para elaborar el prototipo de alta fidelidad.

- [Firebase](https://firebase.google.com/)

Herramienta utilizada para compilar nuestro proyecto.

# Equipo de trabajo

[Claudia Quezada](https://github.com/ClaudiaQuezadaRiquelme)

[Natalia Galvez](https://github.com/natagalvez)

[Scarlette Villarreal Á.](https://github.com/VillarrealScarlette/)

# Proyecciones Futuras

- Implementar un buscador interno, mediante la función de filtrar, para permitir al usuario encontrar información de forma más rápida
- Añadir secciones "Tus próximos partidos" y "Tus equipos" al comienzo del muro del usuario para facilitar la vasualización de la información más relevante para los usuarios 
- Modificar y mejorar el estilo del diseño y la usabilidad de la aplicación con la finalidad de crear una experiencia de usuario más satisfaciente
- Funcionalidades que permita al usuario añadir amigos, enviar invitaciones a partidos, equipos o ligas, como también poder visualizar aquellos jugadores asistentes a los encuentros