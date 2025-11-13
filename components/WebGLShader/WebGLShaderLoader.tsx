"use client"

import dynamic from "next/dynamic";
import { useRef } from "react";
import { WebGLShaderSkeleton } from "@/components/WebGLShader/WebGLShaderSkeleton";
import { useVisible } from "@/components/WebGLShader/utils/hooks/useVisible";

import clsx from "clsx";
import { cn } from "@/lib/utills/cn";





let _WebGLShader


function getWebGLShader() {
	_WebGLShader ||= dynamic(() => import("./WebGLShader").then((module) => module.WebGLShader), {
		loading: WebGLShaderSkeleton,
	});
	return _WebGLShader;
}











export const WebGLShaderLoader = (
	{
		colorConfiguration, 
		fragmentShader, 
		height, 
		maintainHeight, 
		minWidth, 
		seed, 
		skew 
	}:any
) => {


	


	const colorConfigurationArr = Array.isArray(colorConfiguration)
		? colorConfiguration
		: [colorConfiguration ?? "default"];


	const ref = useRef<HTMLDivElement>(null!);


	const visible = useVisible(ref, "64px");







	return (
		<div 
			className={cn(
					"canvas", 
					`
						flex 
						flex-col 
						items-center 
						w-screen 
						my-10 
						-mx-6 
					`
				)
			} 
			style={skew ? {
				margin: 'calc(32px + min(100vw, 750px) * 0.04) -24px calc(48px + min(100vw, 750px) * 0.04)'
			} : undefined}
			ref={ref}
		>
			{visible ? (
				(() => {
					const WebGLShader = getWebGLShader();
					return (
						<WebGLShader 
							colorConfiguration={colorConfigurationArr[0]} 
							fragmentShader={fragmentShader}
							height={height}
							maintainHeight={maintainHeight} 
							minWidth={minWidth} 
							seed={seed} 
							skew={skew}
						/>
					);
				})()
			) : (
				<WebGLShaderSkeleton 
					minWidth={minWidth}
					maintainHeight={maintainHeight}
				/>
			)}
		</div>
	);
};













