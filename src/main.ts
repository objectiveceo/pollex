function expand(event: MouseEvent) {
	const dest = this.dataset.pollexDest;
	const image = document.createElement('img');
	image.src = dest;
	const body = document.body;
	body.insertBefore(image, body.lastChild);
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
