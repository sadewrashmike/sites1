document.addEventListener('DOMContentLoaded', () => {
    const logoBtn = document.getElementById('logoBtn');
    const aboutDrawer = document.getElementById('aboutDrawer');
    const overlay = document.getElementById('overlay');
    const closeDrawer = document.getElementById('closeDrawer');
    const icons = document.querySelectorAll('.s-icon');

    // Active Icon Switcher
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    });

    // Open About Drawer
    const openAbout = () => {
        aboutDrawer.classList.add('active');
        overlay.classList.add('active');
    };

    // Close About Drawer
    const closeAbout = () => {
        aboutDrawer.classList.remove('active');
        overlay.classList.remove('active');
    };

    logoBtn.addEventListener('click', openAbout);
    closeDrawer.addEventListener('click', closeAbout);
    overlay.addEventListener('click', closeAbout);
});