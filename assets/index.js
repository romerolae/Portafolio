const navBar = document.getElementById('navBar');
const btnMenu = document.getElementById('btnMenu');
const heroMenu = document.getElementById('heroMenu');
const sections = document.querySelectorAll('section[id]');
const form = document.getElementById('form');
const logo1 = document.getElementById('logo');

/* Header agregar/quitar fondo */
window.addEventListener('scroll', function () {
	if (window.scrollY >= 60) {
		navBar.classList.add('nav-fixed');
		heroMenu.classList.add('linkwhite');
		logo1.classList.add('linkwhite');
		btnMenu.classList.add('linkwhite');
	} else {
		navBar.classList.remove('nav-fixed');
		heroMenu.classList.remove('linkwhite');
		logo1.classList.remove('linkwhite');
		btnMenu.classList.remove('linkwhite');
	}
});

/* ==========toggle menu ========*/

btnMenu.addEventListener('click', function () {
	heroMenu.classList.toggle('active');
});

heroMenu.addEventListener('click', function (e) {
	if (e.target.matches('.hero__nav-link')) {
		heroMenu.classList.remove('active');
	}
});
