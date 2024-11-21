const galleryImages = document.querySelectorAll('.gallery img');
const previewImage = document.getElementById('preview-image');
const imageTitle = document.getElementById('image-title');
const fullscreenViewer = document.getElementById('fullscreen-viewer');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeFullscreenButton = document.getElementById('close-fullscreen');

let currentIndex = 0;

// Update the preview image and title
function updatePreviewImage() {
  const currentImage = galleryImages[currentIndex];
  previewImage.src = currentImage.src;
  previewImage.alt = currentImage.alt;
  imageTitle.textContent = currentImage.alt;
  currentIndex = (currentIndex + 1) % galleryImages.length;
}

// Open full-screen viewer
function openFullscreen(image) {
  fullscreenImage.src = image.src;
  fullscreenImage.alt = image.alt;
  fullscreenViewer.classList.remove('hidden');
}

// Close full-screen viewer
function closeFullscreen() {
  fullscreenViewer.classList.add('hidden');
}

// Set interval to change the preview image every 10 seconds
setInterval(updatePreviewImage, 10000);

// Add click event to gallery images for full-screen view
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    openFullscreen(img);
    currentIndex = index; // Update the index to match clicked image
  });
});

// Add click event to close the full-screen viewer
closeFullscreenButton.addEventListener('click', closeFullscreen);
