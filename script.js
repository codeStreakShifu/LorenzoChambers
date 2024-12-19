document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
      duration: 600,
      offset: 100,
  });

  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
      hamburger.setAttribute('aria-expanded', !expanded);
      navbar.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.book-section, .book-section2, .book-section3, .first-section, .events-section');
  
  sections.forEach(section => {
    const video = document.createElement('video');
    video.src = 'images/background1.mp4';  // Path to your video
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsinline = true;
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';  // Place the video behind the content

    section.appendChild(video);
  });
});