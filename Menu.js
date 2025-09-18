


const buttons = document.querySelectorAll('#botones button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    playButtonSound(); // Reproduce el sonido

    switch (event.target.id) {
      case 'btnJugar':
        window.location.href = 'Juego.html';
        break;
      case 'btnMultijugador':
        alert('La función Multijugador estará disponible próximamente.');
        break;
      case 'btnConfiguracion':
        window.location.href = 'Configuracion.html';
        break;
      case 'btnPuntuacion':
        window.location.href = 'Puntuacion.html';
        break;
      case 'btnInstrucciones':
        window.location.href = 'Instrucciones.html';
        break;
      default:
        console.warn('Botón no reconocido:', event.target.id);
    }
  });
});
