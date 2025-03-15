const board = document.getElementById('board');

// Generate 800 boxes
for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.classList.add('square');

  // Hover effect with color disappearing after 1 second
  box.addEventListener('mouseover', () => {
    const color = getRandomColor();
    box.style.backgroundColor = color;

    setTimeout(() => {
      box.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  board.appendChild(box);
}

// Function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
