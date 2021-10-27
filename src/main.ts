interface ElementCreator {
	body: HTMLElement,
	createImg: () => HTMLImageElement,
	createDiv: () => HTMLDivElement,
	createParagraph: () => HTMLParagraphElement,
}

function closeImage(background: HTMLDivElement) {
	background.remove();
}

function imageReady(image: HTMLImageElement, background: HTMLDivElement) {
	image.style.position = 'fixed';
	image.style.top = '50%';
	image.style.left = '50%';
	image.style.transform = 'translate(-50%, -50%)';

	if (image.width > image.height) {
		image.style.width = '90%';
	} else {
		image.style.height = '90%';
	}

	if (background.lastChild) {
		image.style.paddingBottom = `${(background.lastChild as HTMLElement).offsetHeight + 16}px`;
	}

	background.addEventListener('click', () => closeImage(background));
	background.insertBefore(image, background.lastChild);
}

function createBackground(creator: ElementCreator): HTMLDivElement {
	const background = creator.createDiv();
	background.style.backgroundColor = 'rgba(0,0,0,0.5)';
	background.style.position = 'fixed';
	background.style.top = '0';
	background.style.right = '0';
	background.style.bottom = '0';
	background.style.left = '0';
	return background;
}

function createCaption(element: HTMLElement, creator: ElementCreator): HTMLParagraphElement | null {
	const caption = element.dataset.pollexCaption;
	if (!caption) {
		return null;
	}

	const para = creator.createParagraph();
	para.innerHTML = caption;
	para.style.position = 'absolute';
	para.style.bottom = '0';
	para.style.width = '100%';
	para.style.textAlign = 'center';
	para.style.color = 'white';
	para.style.textShadow = '#000 0 2px 2px';
	return para;
}

function expand(element: HTMLElement, creator: ElementCreator) {
	const dest = element.dataset.pollexDest;
	const image = creator.createImg();
	const background = createBackground(creator);
	image.onload = (e) => imageReady(image, background);
	image.src = dest;

	const caption = createCaption(element, creator);
	if (caption) {
		background.insertBefore(caption, background.lastChild);
	}

	creator.body.insertBefore(background, creator.body.lastChild);
}

function setupThumbnails(element: Element, creator: ElementCreator) {
	const htmlElement = element as HTMLElement;
	if (!htmlElement) {
		return;
	}
	htmlElement.addEventListener('click', () => expand(htmlElement, creator));
	htmlElement.style.cursor = 'pointer';
}

function main() {
	const thumbs = document.querySelectorAll('[data-pollex-dest]');
	const creator = {
		body: document.body,
		createImg: () => document.createElement('img'),
		createDiv: () => document.createElement('div'),
		createParagraph: () => document.createElement('p'),
	}
	thumbs.forEach((x) => setupThumbnails(x, creator));
}

window.addEventListener('DOMContentLoaded', main);
