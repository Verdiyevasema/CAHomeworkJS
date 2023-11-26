document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.getElementById('menu-icon');
    let closeIcon = document.getElementById('close-icon');
    let mainNav = document.getElementById('main-nav');

    menuIcon.addEventListener('click', function () {
        mainNav.classList.toggle('show');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        mainNav.classList.toggle('show');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});