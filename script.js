const board = document.getElementById('board');

// Loop to create 800 boxes
for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.classList.add('box');

  // 🎯 Change to random color on hover
  box.addEventListener('mouseover', () => {
    const color = getRandomColor(); // Get random color
    box.style.backgroundColor = color;

    // Remove the color after 1 second
    setTimeout(() => {
      box.style.backgroundColor = 'black';
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
