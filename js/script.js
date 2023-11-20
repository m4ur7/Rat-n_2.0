// Agrega los IDs de los videos de YouTube que quieras mostrar
const videoIds = [
  "XFkzRNyygfk",
  "GQ0im8c6Guk",
  "C6WUDisKn8o",
  "aSWLJUIQMvA",
  "fAMP0MBfGhY",
  "lHRAPIwsS5I",
  "yfrbeCFQ65w",
  "wxYePyR-DRg",
  "sCz5y84dwuA",
  "IsqqjOxEuAg",
  "XmKUak37jLU",
  "5rAOyh7YmEc",
];

// Obtén referencias a los contenedores en tu HTML
const currentVideoContainer = document.getElementById("current-video");
const videoListContainer = document.getElementById("video-list");

// Función para mostrar el video actual
function showCurrentVideo(videoId) {
  // Crea el iframe con la URL del video de YouTube
  currentVideoContainer.innerHTML = `
    <iframe width="100%" height="100%" 
      src="https://www.youtube.com/embed/${videoId}" 
      frameborder="0" allowfullscreen>
    </iframe>
  `;
}

// Función para mostrar la lista de videos
function showVideoList() {
  // Recorre cada ID en el array y crea un elemento para cada video
  videoIds.forEach((videoId) => {
    const videoItem = document.createElement("div");
    // Crea el iframe con la URL del video de YouTube
    videoItem.innerHTML = `
      <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allowfullscreen>
      </iframe>
    `;
    // Agrega el nuevo video a la lista
    videoListContainer.appendChild(videoItem);

    // Agrega un evento clic para cambiar el video actual cuando se hace clic en un video de la lista
    videoItem.addEventListener("click", () => showCurrentVideo(videoId));
  });
}

// Inicializa la galería llamando a las funciones de mostrar
function initializeGallery() {
  // Elige el primer video del array para mostrar inicialmente
  const initialVideoId = videoIds[0];
  // Muestra el video actual y la lista de videos
  showCurrentVideo(initialVideoId);
  showVideoList();
}

// ¡Iniciamos la galería cuando la página se carga!
initializeGallery();


function zoomEffect(event) {
    if (event.target.classList.contains('video-thumbnail')) {
        event.target.style.transform = 'scale(1.1)'; // Efecto de zoom al pasar el ratón
    }
}

function resetZoomEffect() {
    var thumbnails = document.querySelectorAll('.video-thumbnail');
    thumbnails.forEach(function (thumbnail) {
        thumbnail.style.transform = 'scale(1)';
    });

  }
