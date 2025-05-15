// Récupérer les éléments du DOM
const musicButton = document.getElementById('music-button');
const musicIcon = document.getElementById('music-icon');
const musicImage = document.querySelector('.music-button-img'); // Sélectionner l'image
const player = document.getElementById('soundcloud-player').contentWindow;
let isPlaying = false;

// Fonction pour activer/désactiver la musique
musicButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton

    if (!isPlaying) {
        // Démarrer la musique
        player.postMessage('{"method":"play"}', '*');
        musicIcon.classList.replace('fa-play', 'fa-pause'); // Changer l'icône pour "pause"
        musicImage.classList.add('playing'); // Ajouter la classe pour l'animation
    } else {
        // Mettre la musique en pause
        player.postMessage('{"method":"pause"}', '*');
        musicIcon.classList.replace('fa-pause', 'fa-play'); // Changer l'icône pour "play"
        musicImage.classList.remove('playing'); // Supprimer la classe pour l'animation
    }

    // Inverser l'état de lecture
    isPlaying = !isPlaying;
});