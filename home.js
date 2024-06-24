function toggleMenu() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

document.getElementById('menu-btn').addEventListener('click', toggleMenu);
