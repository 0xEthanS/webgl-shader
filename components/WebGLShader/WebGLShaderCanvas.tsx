"use client"

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { fragmentShaderRegistry } from "@/components/WebGLShader/shaders/fragmentShaders";
import { WebGLRenderer } from "@/components/WebGLShader/WebGLRenderer";
import { colorConfigurations, ColorConfiguration } from "@/components/WebGLShader/colorConfigurations";
import { vertexShaderRegistry } from "@/components/WebGLShader/shaders/vertexShaders";
import { FragmentShader } from "@/components/WebGLShader/shaders/types";






export const WebGLShaderCanvas = (
	{ 
		isPaused, 
		colorConfiguration, 
		fragmentShaderValue, 
		seed
	}: { 
		isPaused: boolean; 
		colorConfiguration: ColorConfiguration;
		fragmentShaderValue: string;
		seed: number; 
	}
) => {
	const fragmentShader = useMemo(() => 
		fragmentShaderRegistry[fragmentShaderValue]!({}) as FragmentShader
	, [fragmentShaderValue]); 
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const rendererRef = useRef<WebGLRenderer | null>(null);
	const animationFrameRef = useRef<number | undefined>(undefined);

	const [dimensions, setDimensions] = useState({ width: 1, height: 1 });


	const uniformValues = useMemo(() => {
		const values: Record<string, number> = {};
		for (const [key, uniform] of Object.entries(fragmentShader.uniforms)) {
			values[key] = uniform.value;
		}
		return values;
	}, [fragmentShader.uniforms]);


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


		// Cleanup function with proper WebGL resource disposal
		return () => {
			if (rendererRef.current) {
				const renderer = rendererRef.current as any;
				if (renderer.gl) {
					// Delete WebGL resources
					if (renderer.program) {
						renderer.gl.deleteProgram(renderer.program);
					}
					if (renderer.positionBuffer) {
						renderer.gl.deleteBuffer(renderer.positionBuffer);
					}
					if (renderer.gradientTexture) {
						renderer.gl.deleteTexture(renderer.gradientTexture);
					}
				}
				rendererRef.current = null;
			}
		};


	}, [fragmentShader, colorConfiguration, uniformValues, seed]);








	useEffect(() => {
		if (!canvasRef.current || !rendererRef.current) return;
		
		const { width, height } = dimensions;
		const canvas = canvasRef.current;
		
		canvas.width = width;
		canvas.height = height;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		
		rendererRef.current.setDimensions(width, height);
	}, [dimensions]);




	const isPausedRef = useRef(isPaused);

	useEffect(() => {
		isPausedRef.current = isPaused;
	}, [isPaused]);

	useEffect(() => {
		if (!rendererRef.current) return;

		const renderer = rendererRef.current;
		
		const animate = () => {
			if (!isPausedRef.current) {
				renderer.render();  // Only render when not paused
			}
			animationFrameRef.current = requestAnimationFrame(animate);  // Always continue loop
		};

		animate();

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
				animationFrameRef.current = undefined;
			}
		};
	}, []); // Only run once






	return (
		<div ref={containerRef} className="absolute inset-0 w-full h-full">
			<canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full [image-rendering:pixelated]" />
		</div>
	);
};







