function closeImage(background: HTMLDivElement, event: MouseEvent) {
	background.remove();
}

function imageReady(image: HTMLImageElement, event: Event) {
	image.style.position = 'fixed';
	image.style.top = '50%';
	image.style.left = '50%';
	image.style.transform = 'translate(-50%, -50%)';

	if (image.width > image.height) {
		image.style.width = '90%';
	} else {
		image.style.height = '90%';
	}

	const body = document.body;

	const background = document.createElement('div');
	background.style.backgroundColor = 'rgba(0,0,0,0.5)';
	background.style.position = 'fixed';
	background.style.top = '0';
	background.style.right = '0';
	background.style.bottom = '0';
	background.style.left = '0';
	background.insertBefore(image, background.lastChild);
	background.addEventListener('click', (e) => closeImage(background, e));

	body.insertBefore(background, body.lastChild);
}

function expand(event: MouseEvent) {
	const dest = this.dataset.pollexDest;
	const image = document.createElement('img');
	image.onload = (e) => imageReady(image, e);
	image.src = dest;
}

function setupThumbnails(element: Element) {
	const htmlElement = element as HTMLElement;
	if (!htmlElement)
		return;
	htmlElement.addEventListener('click', expand);
	htmlElement.style.cursor = 'pointer';
}

function main() {
	const thumbs = document.querySelectorAll('[data-pollex-dest]');
	thumbs.forEach(setupThumbnails);
}

window.addEventListener('DOMContentLoaded', main);
