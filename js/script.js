const backdropParent = document.querySelector('.page-header').firstElementChild;

window.addEventListener('scroll', function () {
	let opacity = window.scrollY / 150;
	backdropParent.style.setProperty('--backdrop-opacity', opacity);
});
