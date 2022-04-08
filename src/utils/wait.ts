export async function waitForAnimation(element: HTMLElement, listenChildren: boolean = true, animationName?: string): Promise<void> {
	return new Promise((resolve) => {
		const animationHandler = (event: AnimationEvent) => {
			if (animationName && animationName === event.animationName) return;
			if (!listenChildren && event.target !== element) return;
			element.removeEventListener("animationend", animationHandler);
			element.removeEventListener("animationcancel", animationHandler);
			resolve();
		};
		element.addEventListener("animationend", animationHandler);
		element.addEventListener("animationcancel", animationHandler);
	});
}

export async function waitForTransition(element: HTMLElement, listenChildren: boolean = true, propertyName?: string): Promise<void> {
	return new Promise((resolve) => {
		const transitionHandler = (event: TransitionEvent) => {
			if (propertyName && propertyName === event.propertyName) return;
			if (!listenChildren && event.target !== element) return;
			element.removeEventListener("transitionend", transitionHandler);
			element.removeEventListener("transitioncancel", transitionHandler);
			resolve();
		};
		element.addEventListener("transitionend", transitionHandler);
		element.addEventListener("transitioncancel", transitionHandler);
	});
}

export async function waitAnimationOrTransition(
	element: HTMLElement,
	listenChildren: boolean = true,
	animationName?: string,
	propertyName?: string
): Promise<void> {
	return Promise.any([waitForAnimation(element, listenChildren, animationName), waitForTransition(element, listenChildren, propertyName)]);
}

export default function wait(duration: number = 1000) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}
