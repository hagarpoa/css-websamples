// JavaScript
const video = document.querySelector('video');
window.addEventListener('scroll', () => {
  const value = 1 + window.scrollY / -600;
  video.style.opacity = value;
});