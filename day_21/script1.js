const responsiveNavbar = (function () {
	const button = document.querySelector("#menuButton");
	const navbar = document.querySelector("#navbar")
	button.addEventListener("click", function () {
		if (navbar.className === "navbar") {
			navbar.className += " navbarResponsive";
		}
		else {
			navbar.className = "navbar";
		}
	});
})();

const fruitSlider = document.querySelector('#headerSlide .ms-content');
const sliderNextButton = document.querySelector('#headerSlide .ms-right');
const sliderPreviousButton = document.querySelector('#headerSlide .ms-left');

if (fruitSlider && sliderNextButton && sliderPreviousButton) {
	let isAnimating = false;
	let animationTimer;
	const originalSlides = Array.from(fruitSlider.children);
	const firstClone = originalSlides[0].cloneNode(true);
	const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
	firstClone.setAttribute('aria-hidden', 'true');
	lastClone.setAttribute('aria-hidden', 'true');
	fruitSlider.append(firstClone);
	fruitSlider.prepend(lastClone);
	let currentSlide = 1;

	const getSlideStep = () => {
		const firstSlide = fruitSlider.querySelector('.item');
		if (!firstSlide) return 0;
		const styles = window.getComputedStyle(fruitSlider);
		return firstSlide.getBoundingClientRect().width + (parseFloat(styles.columnGap) || 0);
	};
	const moveToSlide = (index, animate = true) => {
		fruitSlider.style.transition = animate ? 'transform 350ms ease' : 'none';
		fruitSlider.style.transform = `translateX(-${getSlideStep() * index}px)`;
	};
	const finishSlideTransition = () => {
		window.clearTimeout(animationTimer);
		if (currentSlide === 0) {
			currentSlide = originalSlides.length;
			moveToSlide(currentSlide, false);
		} else if (currentSlide === originalSlides.length + 1) {
			currentSlide = 1;
			moveToSlide(currentSlide, false);
		}
		isAnimating = false;
	};

	moveToSlide(currentSlide, false);
	fruitSlider.getBoundingClientRect();

	const showNextSlide = () => {
		if (isAnimating || fruitSlider.children.length < 2) return;
		isAnimating = true;
		currentSlide += 1;
		moveToSlide(currentSlide);
		animationTimer = window.setTimeout(finishSlideTransition, 450);
	};

	const showPreviousSlide = () => {
		if (isAnimating || fruitSlider.children.length < 2) return;
		isAnimating = true;
		currentSlide -= 1;
		moveToSlide(currentSlide);
		animationTimer = window.setTimeout(finishSlideTransition, 450);
	};

	fruitSlider.addEventListener('transitionend', (event) => {
		if (event.target !== fruitSlider || event.propertyName !== 'transform') return;
		finishSlideTransition();
	});

	sliderNextButton.addEventListener('click', showNextSlide);
	sliderPreviousButton.addEventListener('click', showPreviousSlide);
}


function closeCart() {
	const cart = document.querySelector('.productOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shopping-cart');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.productOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);