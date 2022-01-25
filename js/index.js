function init() {
	const path = document.querySelector('.path');
	const circle = document.querySelector('.circle');

	const value = { distance: 0 };

	gsap.to(value, {
		distance: path.getTotalLength(),
		repeat: -1,
		duration: 3,
		onUpdate: () => {
			const point = path.getPointAtLength(value.distance);
			circle.setAttribute('cx', point.x);
			circle.setAttribute('cy', point.y);
		},
	});
}

window.addEventListener('DOMContentLoaded', init, false);
