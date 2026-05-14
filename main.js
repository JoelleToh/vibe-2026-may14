const totoContainer = document.getElementById('toto-container');
const generateButton = document.getElementById('generate-button');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'Switch to Day Mode' : 'Switch to Night Mode';
};

// Initialize Theme
setTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Generator Logic
generateButton.addEventListener('click', () => {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  totoContainer.innerHTML = '';
  numbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('toto-number');
    numberElement.textContent = number;
    totoContainer.appendChild(numberElement);
  });
});
