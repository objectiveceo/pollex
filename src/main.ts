interface ElementCreator {
	body: HTMLElement,
	createImg: () => HTMLImageElement,
	createDiv: () => HTMLDivElement,
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
	background.addEventListener('click', () => closeImage(background));
	background.insertBefore(image, background.lastChild);
}

function expand(element: HTMLElement, creator: ElementCreator) {
	const dest = element.dataset.pollexDest;
	const image = creator.createImg();
	const background = creator.createDiv();
	image.onload = (e) => imageReady(image, background);
	image.src = dest;

	background.style.backgroundColor = 'rgba(0,0,0,0.5)';
	background.style.position = 'fixed';
	background.style.top = '0';
	background.style.right = '0';
	background.style.bottom = '0';
	background.style.left = '0';
	creator.body.insertBefore(background, creator.body.lastChild);
}

function setupThumbnails(element: Element, creator: ElementCreator) {
	const htmlElement = element as HTMLElement;
	if (!htmlElement)
		return;
	htmlElement.addEventListener('click', () => expand(htmlElement, creator));
	htmlElement.style.cursor = 'pointer';
}

function main() {
	const thumbs = document.querySelectorAll('[data-pollex-dest]');
	const creator = {
		body: document.body,
		createImg: () => document.createElement('img'),
		createDiv: () => document.createElement('div'),
	}
	thumbs.forEach((x) => setupThumbnails(x, creator));
}

window.addEventListener('DOMContentLoaded', main);
