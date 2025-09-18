// Cargar puntuaciones desde localStorage
function cargarPuntuaciones() {
  const scoreList = document.getElementById('scoreList');
  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  // Ordenar las puntuaciones de menor a mayor tiempo (mejor puntaje primero)
  scores.sort((a, b) => {
      const [minA, secA] = a.score.split(':').map(Number);
      const [minB, secB] = b.score.split(':').map(Number);
      return minA * 60 + secA - (minB * 60 + secB);
  });

  // Generar dinámicamente las filas de la tabla
  scoreList.innerHTML = scores.map((score, index) => `
      <tr>
          <td>${index + 1}</td>
          <td>${score.player}</td>
          <td>${score.score}</td>
      </tr>
  `).join('');
}

// Función para regresar al menú principal
function Regresar() {
  window.location.href = 'Menu.html';
}

// Cargar las puntuaciones al cargar la página
window.onload = cargarPuntuaciones;
