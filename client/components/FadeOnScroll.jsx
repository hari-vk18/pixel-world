import { useEffect, useRef, useState } from "react";

/**
 * FadeOnScroll
 * Props:
 * - children: React node
 * - className: extra wrapper classes
 * - threshold: IntersectionObserver threshold (0-1)
 * - rootMargin: IntersectionObserver rootMargin
 * - duration: transition duration in ms
 * - delay: delay before transition starts in ms
 * - distance: translate distance in px when hidden
 * - direction: 'up' | 'down' | 'left' | 'right'
 * - once: when true (default) the animation runs once and the observer is disconnected
 * - repeat: if true, animate each time it enters the viewport
 */
export default function FadeOnScroll({
	children,
	className = "",
	threshold = 0.2,
	rootMargin = "0px",
	duration = 700,
	delay = 0,
	distance = 24,
	direction = "up",
	once = true,
	repeat = false,
}) {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
						if (once && !repeat) observer.unobserve(el);
					} else if (repeat) {
						// allow toggling when repeat is true
						setInView(false);
					}
				});
			},
			{ threshold, rootMargin }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, rootMargin, once, repeat]);

	// compute hidden transform based on direction
	const hiddenTransform = (() => {
		const d = `${distance}px`;
		switch (direction) {
			case "down":
				return `translateY(${d})`;
			case "left":
				return `translateX(-${d})`;
			case "right":
				return `translateX(${d})`;
			case "up":
			default:
				return `translateY(-${d})`;
		}
	})();

	const style = {
		transitionProperty: "opacity, transform",
		transitionDuration: `${duration}ms`,
		transitionTimingFunction: "cubic-bezier(.22,.9,.38,1)",
		transitionDelay: `${delay}ms`,
		transform: inView ? "none" : hiddenTransform,
		opacity: inView ? 1 : 0,
	};

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
}

