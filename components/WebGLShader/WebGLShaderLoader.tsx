"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";


const WebGLShader = dynamic(
	() => import("./WebGLShader").then((module) => module.WebGLShader),
	{ ssr: false }
);


function useVisible(ref: React.RefObject<HTMLElement>) {
	const [visible, setVisible] = useState(false);
	const [tabVisible, setTabVisible] = useState(true);

	useEffect(() => {
		setTabVisible(!document.hidden);
		const handleVisibilityChange = () => {
			setTabVisible(!document.hidden);
		};
		document.addEventListener('visibilitychange', handleVisibilityChange);
		return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	}, []);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ rootMargin: "64px" }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [ref]);

	return visible && tabVisible;
}


export const WebGLShaderLoader = () => {
	const ref = useRef<HTMLDivElement>(null!);
	const [hasBeenVisible, setHasBeenVisible] = useState(false);
	const visible = useVisible(ref);

	useEffect(() => {
		if (visible && !hasBeenVisible) {
			setHasBeenVisible(true);
		}
	}, [visible, hasBeenVisible]);

	return (
		<div ref={ref}>
			{hasBeenVisible && <WebGLShader isPaused={!visible} />}
		</div>
	);
};








