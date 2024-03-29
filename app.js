let theme = () => {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    const text = document.querySelector('#text');
    text.textContent = newTheme;
    root.className = newTheme;
}

const tbtn = document.querySelector('#tbtn');

tbtn.addEventListener('click', theme);