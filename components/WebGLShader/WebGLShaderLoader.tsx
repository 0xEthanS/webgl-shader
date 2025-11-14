"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utills/cn";




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
		<div
			className={cn(
				"canvas flex flex-col items-center w-screen my-10 -mx-6",
				`m-[calc(32px+min(100vw,750px)*0.04)_-24px_calc(48px+min(100vw,750px)`
			)}
			ref={ref}
		>




			{hasBeenVisible ? (
				<WebGLShader isPaused={!visible} />
			) : (
				<div className="relative w-full -skew-y-6 h-[250px] max-h-[250px] bg-emerald-300" />
			)}




		</div>
	);
};







