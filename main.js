var opended = true;

function toggle() {
    opended = !opended;
    const sidenav = document.getElementById('sidenav');
    const logo = document.getElementById('logo');
    const modalBg = document.getElementById('modal-bg');
    if (opended) {
        sidenav.style.width = '300px';
        logo.classList.add('sidenav-button-opened');
        logo.classList.remove('sidenav-button-closed');
        modalBg.style.display = '';
    } else {
        sidenav.style.width = '48px';
        logo.classList.remove('sidenav-button-opened');
        logo.classList.add('sidenav-button-closed');
        modalBg.style.display = 'none';
    }
}