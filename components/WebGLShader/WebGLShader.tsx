"use client"

import { useEffect, useRef, useState, useCallback } from "react";
import { fragmentShaderRegistry } from "@/components/WebGLShader/shaders/fragmentShaders";
import { WebGLRenderer } from "@/components/WebGLShader/WebGLRenderer";
import { colorConfigurations } from "@/components/WebGLShader/colorConfigurations";
import { vertexShaderRegistry } from "@/components/WebGLShader/shaders/vertexShaders";
import { FragmentShader } from "@/components/WebGLShader/shaders/types";






export const WebGLShader = ({ isPaused }: { isPaused: boolean }) => {


	const colorConfiguration = "default";
	const seed = 16192;
	const fragmentShader = fragmentShaderRegistry["final"]!({}) as FragmentShader;




	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<WebGLRenderer | null>(null);
	const animationFrameRef = useRef<number | undefined>(undefined);

	const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

	const uniformValues: Record<string, number> = {};


	for (const [key, uniform] of Object.entries(fragmentShader.uniforms)) {
		uniformValues[key] = uniform.value;
	}


	const updateDimensions = useCallback(() => {
		if (!containerRef.current) return;
		const width = containerRef.current.clientWidth;
		const height = containerRef.current.clientHeight;
		setDimensions(prev => {
			if (prev.width === width && prev.height === height) {
				return prev;
			}
			return { width, height };
		});
	}, []);


	useEffect(() => {
		if (!containerRef.current) return;
		const resizeObserver = new ResizeObserver(updateDimensions);
		resizeObserver.observe(containerRef.current);
		updateDimensions();
		return () => {
			resizeObserver.disconnect();
		};
	}, [updateDimensions]);


	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) return;


		if (!rendererRef.current) {
			rendererRef.current = new WebGLRenderer(
				canvas,
				vertexShaderRegistry.default!,
				fragmentShader.shader,
				colorConfigurations[colorConfiguration],
				seed,
			);
			for (const [key, value] of Object.entries(uniformValues)) {
				rendererRef.current.setUniform(key, value);
			}
		}


		const renderer = rendererRef.current;
		const { width, height } = dimensions;

		canvas.width = width;
		canvas.height = height;

		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		renderer.setDimensions(width, height);


		const animate = () => {
			if (!isPaused && renderer) {
				renderer.render();
				animationFrameRef.current = requestAnimationFrame(animate);
			}
		};


		if (!isPaused) {
			animate();
		}


		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};

	}, [dimensions, isPaused, fragmentShader, colorConfiguration, uniformValues]);




	return (
		<div className="
				relative 
				w-full 
				-skew-y-6 
				h-[250px] 
				max-h-[250px] 

				bg-emerald-300 
			"
		>
			<div 
				ref={containerRef}
				className="
					absolute 
					inset-0 
					w-full 
					h-full 
				"
			>
				<canvas
					ref={canvasRef}
					className="
						absolute 
						top-0 
						left-0 
						w-full 
						h-full 
						[image-rendering:pixelated] 
					"
				/>
			</div>
		</div>
	);
};







