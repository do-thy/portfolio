// Page Load Entrance Animation
window.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.animate-on-load',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100),
    duration: 1500,
    easing: 'easeOutExpo'
  });
});

// General hover effect
document.querySelectorAll('.animate-expand').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    anime({
      targets: btn,
      scale: 1.1,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });
  btn.addEventListener('mouseleave', () => {
    anime({
      targets: btn,
      scale: 1,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });
});

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-bar li');

function updateCurrentPage() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let currentIndex = 0;
  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= window.innerHeight / 3) {
      currentIndex = index;
    }
  });
  if (atBottom) {
    currentIndex = sections.length - 1;
  }
  navItems.forEach((item, index) => {
    item.classList.toggle('current-page', index === currentIndex);
  });
}

window.addEventListener('scroll', updateCurrentPage);
window.addEventListener('DOMContentLoaded', updateCurrentPage);

// Big cards hover effect
document.querySelectorAll('.lift-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      translateY: -7,
      scale: 1.01,
      duration: 300,
      easing: 'easeOutQuad'
    });
  });
  card.addEventListener('mouseleave', () => {
    anime({
      targets: card,
      translateY: 0,
      scale: 1.0,
      duration: 300,
      easing: 'easeOutQuad'
    });
  });
});

// Expand carousel images in a viewer on click, with previous/next navigation
const imageViewerEl = document.getElementById('image-viewer');
if (imageViewerEl) {
  const imageViewer = new bootstrap.Modal(imageViewerEl);
  const viewerImg = document.getElementById('image-viewer-img');
  let viewerImages = [];
  let viewerIndex = 0;

  function showViewerImage(index) {
    viewerIndex = (index + viewerImages.length) % viewerImages.length;
    viewerImg.src = viewerImages[viewerIndex].src;
    viewerImg.alt = viewerImages[viewerIndex].alt;
  }

  document.querySelectorAll('#projects .carousel').forEach(carousel => {
    const images = Array.from(carousel.querySelectorAll('.carousel-item img'));
    images.forEach((img, i) => {
      img.addEventListener('click', () => {
        viewerImages = images;
        showViewerImage(i);
        imageViewer.show();
      });
    });
  });

  imageViewerEl.querySelector('.image-viewer-prev').addEventListener('click', () => showViewerImage(viewerIndex - 1));
  imageViewerEl.querySelector('.image-viewer-next').addEventListener('click', () => showViewerImage(viewerIndex + 1));

  imageViewerEl.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showViewerImage(viewerIndex - 1);
    if (e.key === 'ArrowRight') showViewerImage(viewerIndex + 1);
  });
}