const galleryPhoto = document.querySelectorAll('.gallery-photo');
const prevBtn = document.querySelector('.btn-left');
const nextBtn = document.querySelector('.btn-right');
const previousPhoto = document.querySelector('.previous-photo img');
const mainPhoto = document.querySelector('.main-photo img');
const nextPhoto = document.querySelector('.next-photo img');

let aryindex = 0;

function setAttributes(el, attrs) {
	Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
}

const changeNextPhoto = () => {
	aryindex++;
	if (aryindex + 2 == galleryPhoto.length) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[aryindex].src,
			alt: galleryPhoto[aryindex].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[aryindex + 1].src,
			alt: galleryPhoto[aryindex + 1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[aryindex - (galleryPhoto.length - 2)].src,
			alt: galleryPhoto[aryindex - (galleryPhoto.length - 2)].alt,
		});
	} else if (
		aryindex + 2 > galleryPhoto.length &&
		aryindex < galleryPhoto.length
	) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[aryindex].src,
			alt: galleryPhoto[aryindex].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[0].src,
			alt: galleryPhoto[0].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[galleryPhoto.length - (galleryPhoto.length - 1)].src,
			alt: galleryPhoto[galleryPhoto.length - (galleryPhoto.length - 1)].alt,
		});
	} else if (aryindex === galleryPhoto.length) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[0].src,
			alt: galleryPhoto[0].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[1].src,
			alt: galleryPhoto[1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[2].src,
			alt: galleryPhoto[2].alt,
		});
		aryindex = 0;
	} else {
		setAttributes(previousPhoto, {
			src: galleryPhoto[aryindex].src,
			alt: galleryPhoto[aryindex].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[aryindex + 1].src,
			alt: galleryPhoto[aryindex + 1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[aryindex + 2].src,
			alt: galleryPhoto[aryindex + 2].alt,
		});
	}
	nextAnimation();
	clearInterval(autoChange);
	autoChange = setInterval(autoChangePhoto, 3000);
};

const changePrevPhoto = () => {
	aryindex--;
	if (aryindex + 1 == 0) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[galleryPhoto.length - 1].src,
			alt: galleryPhoto[galleryPhoto.length - 1].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[aryindex + 1].src,
			alt: galleryPhoto[aryindex + 1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[aryindex + 2].src,
			alt: galleryPhoto[aryindex + 2].alt,
		});
	} else if (aryindex < 0 && aryindex > -3) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[galleryPhoto.length - 2].src,
			alt: galleryPhoto[galleryPhoto.length - 2].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[galleryPhoto.length - 1].src,
			alt: galleryPhoto[galleryPhoto.length - 1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[0].src,
			alt: galleryPhoto[0].alt,
		});
		aryindex = galleryPhoto.length - 2;
	} else if (aryindex === 3) {
		setAttributes(previousPhoto, {
			src: galleryPhoto[aryindex - 3].src,
			alt: galleryPhoto[aryindex - 3].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[aryindex - 2].src,
			alt: galleryPhoto[aryindex - 2].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[aryindex - 1].src,
			alt: galleryPhoto[aryindex - 1].alt,
		});
	} else {
		setAttributes(previousPhoto, {
			src: galleryPhoto[aryindex].src,
			alt: galleryPhoto[aryindex].alt,
		});
		setAttributes(mainPhoto, {
			src: galleryPhoto[aryindex + 1].src,
			alt: galleryPhoto[aryindex + 1].alt,
		});
		setAttributes(nextPhoto, {
			src: galleryPhoto[aryindex + 2].src,
			alt: galleryPhoto[aryindex + 2].alt,
		});
	}
	prevAnimation();
	clearInterval(autoChange);
	autoChange = setInterval(autoChangePhoto, 3000);
};

const nextAnimation = () => {
	mainPhoto.classList.add('next-animation');
	setTimeout(() => {
		mainPhoto.classList.remove('next-animation');
	}, 400);
};
const prevAnimation = () => {
	mainPhoto.classList.add('prev-animation');
	setTimeout(() => {
		mainPhoto.classList.remove('prev-animation');
	}, 400);
};

const autoChangePhoto = () => {
	changeNextPhoto();
};
let autoChange = setInterval(autoChangePhoto, 3000);



nextBtn.addEventListener('click', changeNextPhoto);
prevBtn.addEventListener('click', changePrevPhoto);
