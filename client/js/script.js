document.addEventListener('DOMContentLoaded', () => {
  const obtenerDatos = document.getElementById('obtenerDatos');
  obtenerDatos.addEventListener('click', () => {
    fetch('http://localhost:3000/track')
      .then((res) => res.json())
      .then((data) => {
        const contenedor = document.querySelector('#lista-canciones');
        contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos
        data.forEach((cancion) => {
          const itemCancion = document.createElement('li');
          const detalles = document.createElement('ul');

          Object.entries(cancion).forEach(([clave, valor]) => {
            const liDetalle = document.createElement('li');
            liDetalle.textContent = `${clave}: ${valor}`;
            detalles.appendChild(liDetalle);
          });

          itemCancion.appendChild(detalles);
          contenedor.appendChild(itemCancion);
        });
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  });
});
