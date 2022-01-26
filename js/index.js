function init() {
	const svg = document.querySelector('svg');
	const fuse = document.querySelector('.fuse');

	const pathValue = { distance: 0 };

	gsap.to(pathValue, {
		distance: fuse.getTotalLength(),
		repeat: -1,
		repeatDelay: 2,
		duration: 5,
		onUpdate: () => {
			const point = fuse.getPointAtLength(pathValue.distance);
			createParticle(point);
		},
	});

	fuse.setAttribute('stroke-dasharray', fuse.getTotalLength());
	fuse.setAttribute('stroke-dashoffset', fuse.getTotalLength() * 2);
	gsap.to(fuse, {
		strokeDashoffset: fuse.getTotalLength(),
		duration: 5,
		repeat: -1,
		// Wait 1sec before repeating
		repeatDelay: 2,
	});

	function createParticle(startPoint) {
		const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		svg.prepend(circle);

		circle.setAttribute('cx', startPoint.x);
		circle.setAttribute('cy', startPoint.y);
		circle.setAttribute('r', Math.random() * 2 + 0.3);
		circle.setAttribute(
			'fill',
			gsap.utils.random(['#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808'])
		);

		gsap.to(circle, {
			cx: '+=random(-20,20)',
			cy: '+=random(-20,20)',
			opacity: 0,
			duration: 'random(1,2)',
			autoRound: false,
			onComplete: () => {
				svg.removeChild(circle);
			},
		});
	}
}

window.addEventListener('DOMContentLoaded', init, false);
