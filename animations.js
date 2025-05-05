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