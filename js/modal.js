'use strict';

// Modal
(() => {
	const refs = {
		openModalBtns: document.querySelectorAll('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};

	console.log(refs.openModalBtns.length);

	for (let i = 0; i < refs.openModalBtns.length; i++) {
		refs.openModalBtns[i].addEventListener('click', toggleModal);
	}

	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
		document.querySelector('html').classList.toggle('is-frozen');
	}
})();
