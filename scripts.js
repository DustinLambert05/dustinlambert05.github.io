document.addEventListener('DOMContentLoaded', function () {
	const whoBtn = document.getElementById('whoBtn');
	const hiddenContent = document.getElementById('hiddenContent');
	if (whoBtn && hiddenContent) {
		whoBtn.addEventListener('click', function () {
			if (!hiddenContent.classList.contains('visible')) {
				hiddenContent.style.display = 'block';
				void hiddenContent.offsetWidth;
				hiddenContent.classList.add('visible');
				whoBtn.style.display = 'none';
			}
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contactForm');
	const successMsg = document.getElementById('formSuccess');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			form.reset();
			if (successMsg) {
				successMsg.style.display = 'block';
			}
		});
	}
});
