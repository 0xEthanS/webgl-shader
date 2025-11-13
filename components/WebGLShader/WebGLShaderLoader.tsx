"use client"

import dynamic from "next/dynamic";
import { useRef } from "react";
import { WebGLShaderSkeleton } from "@/components/WebGLShader/WebGLShaderSkeleton";
import { useVisible } from "@/components/WebGLShader/utils/hooks/useVisible";


import { 
	StyleOptions, 
	useStyles 
} from "@/components/WebGLShader/utils/styles";


import { cssVariables } from "@/components/WebGLShader/utils/cssVariables";
import { SKEW_DEG } from "@/components/WebGLShader/constants";






let _WebGLShader


function getWebGLShader() {
	_WebGLShader ||= dynamic(() => import("./WebGLShader").then((module) => module.WebGLShader), {
		loading: WebGLShaderSkeleton,
	});
	return _WebGLShader;
}






const styles = (
	{ 
		styled, 
		theme 
	}: StyleOptions
) => ({
	container: styled.css`
		width: 100vw;
		margin: 40px -${cssVariables.contentPadding}px;
		display: flex;
		flex-direction: column;
		align-items: center;

		&--skew {
			margin: calc(32px + min(100vw, ${cssVariables.contentWidth}px) * 0.04) -${cssVariables.contentPadding}px
				calc(48px + min(100vw, ${cssVariables.contentWidth}px) * 0.04);
		}
	`,

	colorButtonWrapper: styled.css`
		margin-top: 40px;
		padding: 0 ${cssVariables.contentPadding}px;
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		justify-content: center;

		&--skew {
			transform: skewY(-6deg);
		}

		@media (max-width: 600px) {
			margin-top: 32px;
		}

		@media (max-width: 450px) {
			margin-top: 24px;
		}
	`,

	colorButton: styled.css`
		width: 64px;
		height: 48px;
		border-radius: 8px;
		transition: outline 0.2s;
		border: 3px solid ${theme.background};
		outline: 0px solid ${theme.background};

		&--skew {
			transform: skewY(${SKEW_DEG}deg) skewX(-12deg);
		}

		@media (max-width: 450px) {
			width: 56px;
		}
	`,
});






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


	const STYLES = useStyles(styles);


	const colorConfigurationArr = Array.isArray(colorConfiguration)
		? colorConfiguration
		: [colorConfiguration ?? "default"];


	const ref = useRef<HTMLDivElement>(null!);


	const visible = useVisible(ref, "64px");





	return (
		<div 
			className={
				[
					STYLES(
						"container", 
						{ skew }), 
						"canvas"
				].join(" ")
			} 
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













