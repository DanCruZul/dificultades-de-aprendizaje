function mostrarSeccion(seccion) {
    // Oculta la sección principal
    document.querySelector('.dificultades .main-section').style.display = 'none';

    // Oculta todas las secciones de actividades
    document.querySelectorAll('.dificultades section:not(.main-section)').forEach(function(seccionActual) {
        seccionActual.style.display = 'none';
    });

    // Muestra la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';

        // Desplázate a la sección seleccionada
        seccionSeleccionada.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializa el evento solo si hay enlaces con la clase 'box'
document.addEventListener('DOMContentLoaded', function() {
    var enlaces = document.querySelectorAll('.box');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(evento) {
            // Evita el desplazamiento predeterminado
            evento.preventDefault();

            // Obtiene el fragmento de la URL
            var fragmento = this.getAttribute('href').substring(1);

            // Muestra la sección correspondiente
            mostrarSeccion(fragmento);

            // Actualiza la URL sin recargar la página
            history.pushState(null, null, '#' + fragmento);
        });
    });
});

