"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utills/cn";




const WebGLShader = dynamic(
	() => import("./WebGLShader").then((module) => module.WebGLShader),
	{ ssr: false } // Disable SSR for WebGL component
);




export const WebGLShaderLoader = () => {

	const ref = useRef<HTMLDivElement>(null!);

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ rootMargin: "64px" }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);


	return (
		<div
			className={cn(
				"canvas flex flex-col items-center w-screen my-10 -mx-6",
				`m-[calc(32px+min(100vw,750px)*0.04)_-24px_calc(48px+min(100vw,750px)` // skew === true
			)}
			ref={ref}
		>
			<WebGLShader
				isPaused={!visible} // Pass pause state
			/>
		</div>
	);
};
















