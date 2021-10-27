function imageReady(image: HTMLImageElement, event: Event) {
	image.style.position = 'fixed';
	image.style.top = '50%';
	image.style.left = '50%';
	image.style.transform = 'translate(-50%, -50%)';
}

function expand(event: MouseEvent) {
	const dest = this.dataset.pollexDest;
	const image = document.createElement('img');
	image.onload = (e) => imageReady(image, e);
	image.src = dest;
}

function foo(element: Element) {
	const htmlElement = element as HTMLElement;
	if (!htmlElement)
		return;
	htmlElement.addEventListener('click', expand);
}

function main() {
	const thumbs = document.querySelectorAll('[data-pollex-dest]');
	thumbs.forEach(foo);
}

window.addEventListener('DOMContentLoaded', main);
