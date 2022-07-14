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

/* Secciones con ID */
window.addEventListener('scroll', function (e) {
	const scrollY = window.pageYOffset;

	for (const section of sections) {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 58;
		const sectionId = section.getAttribute('id');

		const current = document.querySelector(
			'.hero__nav-link[href*=' + sectionId + ']'
		);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			current.classList.add('active');
		} else {
			current.classList.remove('active');
		}
	}
});

/* Formulario */

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const email = 'romerolaedev@gmail.com';
	const URL_BASE = `https://formsubmit.co/ajax/${email}`;

	const input = e.currentTarget.elements;
	const dataForm = {
		name: input.name.value,
		email: input.email.value,
		message: input.message.value,
	};

	const formData = {
		name: input.name.value,
		email: input.email.value,
		message: input.message.value,
	};

	window.fetch(URL_BASE, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(dataForm),
	});

	alert('Tu mensaje se envió correctamente');
	e.currentTarget.reset();
});
