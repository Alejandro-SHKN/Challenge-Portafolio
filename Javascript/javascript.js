// Javascript aplicado a la seccion SKILLS
// HTML5
let skillsContainer = document.querySelector('.div__exteriorskills');

skillsContainer.addEventListener('click', function(event) {
    let html5Div = document.getElementById('html5div');
    html5Div.style.display = `flex`
    html5Div.style.flexWrap = `wrap`
    html5Div.style.justifyContent = `center`

    html5Div.innerHTML = "<p class=JS-P__infoHTML5--Skills>Comencé con esto y a partir de aquí descubrí mi amor por las páginas web </p> <button id=botonCerrar>cerrar</button>";
});
