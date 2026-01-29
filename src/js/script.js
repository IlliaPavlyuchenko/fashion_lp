AOS.init({ once: false, duration: 1500, offset: 180 });

const body = document.querySelector('body');

function accordion(accordionBlockSelector) {
	const accordionTitleAll = document.querySelectorAll(accordionBlockSelector + ' [data-accordion-title]');

	accordionTitleAll.forEach(function (item) {
		item.addEventListener('click', function () {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
				return;
			} else {
				accordionTitleAll.forEach(function (i) {
					i.classList.remove('active');
				});
				item.classList.add('active');
			}
		});
	});
}

accordion('.accordionFaq');