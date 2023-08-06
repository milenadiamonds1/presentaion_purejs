const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', toggleTheme);
function toggleTheme() {
  const body = document.body;
  const containers = document.querySelectorAll('.container');
  const btn = document.getElementById('theme-toggle-btn');
  const header = document.querySelector('.header');
  console.log(header)

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    containers.forEach(container => {
      container.classList.remove('dark-mode');
      container.classList.add('light-mode');
    });
    btn.innerHTML = 'Theme switcher 🌙'; 
    btn.style.backgroundColor = '#0a1a7e'; 
    header.classList.remove('dark-mode'); 
    header.classList.add('light-mode'); 
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    containers.forEach(container => {
      container.classList.remove('light-mode');
      container.classList.add('dark-mode');
    });
    btn.innerHTML = 'Theme switcher ☀️';
    btn.style.backgroundColor = '#e83e8c';
    header.classList.add('dark-mode'); 
    header.classList.remove('light-mode'); 
  }
};

toggleTheme();


function toggleTechnologyDetails(technologyId) {
    const technologyDetails = document.getElementById(technologyId + '-details');
    technologyDetails.classList.toggle('active');
    const arrowIcon = document.getElementById(`down-arrow-${technologyId}`);
  arrowIcon.classList.toggle('rotated');
}

const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

playBtn.addEventListener('click', () => {
  videoPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  videoPlayer.pause();
});
