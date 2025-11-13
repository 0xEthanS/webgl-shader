import { useEffect, useMemo, useRef, useState } from "react";


import { 
	StyleOptions, 
	useStyles 
} from "@/components/WebGLShader/utils/styles";


import { cssVariables } from "@/components/WebGLShader/utils/cssVariables";
import { useViewportWidth } from "@/components/WebGLShader/utils/hooks/useViewportWidth";
import { fragmentShaderRegistry } from "@/components/WebGLShader/shaders/fragmentShaders";
import { WebGLRenderer } from "@/components/WebGLShader/WebGLRenderer";
import { ColorConfiguration, colorConfigurations } from "@/components/WebGLShader/colorConfigurations";
import { vertexShaderRegistry } from "@/components/WebGLShader/shaders/vertexShaders";
import { CONTROLS_HEIGHT, DEFAULT_HEIGHT, SKEW_DEG } from "@/components/WebGLShader/constants";
import { FragmentShader } from "@/components/WebGLShader/shaders/types";
import { clamp } from "@/components/WebGLShader/utils/math/lerp";






function calculateWebGLCanvasDimensions(
	maintainHeight: number | undefined,
	minWidth: number | undefined,
	viewportWidth: number
) {
	let height = DEFAULT_HEIGHT
	
	const width = clamp(
		viewportWidth,
		minWidth ?? viewportWidth,
		viewportWidth,
	);
	if (maintainHeight != null) {
		const fac = (Math.max(1, width / viewportWidth) - 1) * maintainHeight;
		height *= 1 + fac;
	}
	height = Math.round(height); // A fractional canvas height causes visual artifacts

	return [width, height];
}


const styles = ({ styled }: StyleOptions) => ({
	canvasWrapper: styled.css`
		position: relative;
		max-width: 100%;

		canvas {
			position: absolute;
			top: 0;
			left: 0;
		}

		&--skew {
			transform: skewY(-${SKEW_DEG}deg);
		}
	`,

	variables: styled.css`
		position: relative;
		z-index: 2;
		display: flex;
		gap: 32px;
		align-items: flex-start;
		padding-left: ${cssVariables.contentPadding}px;
		padding-right: ${cssVariables.contentPadding}px;
		padding-top: 20px;
		height: ${CONTROLS_HEIGHT}px;
		max-width: 100%;
		box-sizing: border-box;

		@media (max-width: ${cssVariables.mobileWidth}px) {
			padding-top: 40px;
		}
	`,
});






interface FragmentShaderProps {
	fragmentShader: string;
	fragmentShaderOptions?: Partial<Record<string, unknown>>;
}


export interface WebGLShaderProps extends FragmentShaderProps {
	skew?: boolean;
	colorConfiguration: ColorConfiguration;
	width?: number;
	minWidth?: number;
	maintainHeight?: number;
	height?: number;
	showControls?: boolean;
	animate?: boolean;
	seed?: number;
	usesVariables?: boolean;
}






function useFragmentShader(
	fragmentShader: string
) {
	const FRAGMENTSHADER = useMemo(() => {
		const createFragmentShader = fragmentShaderRegistry[fragmentShader]!({});
		return createFragmentShader as FragmentShader;
	}, [fragmentShader]);
	return FRAGMENTSHADER;
}








export const WebGLShader = (
	{
		colorConfiguration, 
		fragmentShader, 
		height, 
		maintainHeight, 
		minWidth, 
		seed, 
		skew 
	}:WebGLShaderProps 
) => {





	const showControls = true; 
	const animate = true; 






	const STYLES = useStyles(styles);


	const canvasRef = useRef<HTMLCanvasElement>(null);






	const viewportWidth = useViewportWidth()!;


	const [width, HEIGHT] = calculateWebGLCanvasDimensions(
		maintainHeight, 
		minWidth, 
		viewportWidth
	);


	const idealScale = Math.min(1, viewportWidth / width);


	const canvasScale = Math.ceil(HEIGHT * idealScale) / HEIGHT;




	const FRAGMENTSHADER = useFragmentShader(fragmentShader);






	const [uniformValues] = useState(() => {

		const values: Record<string, number> = {};

		for (const [key, uniform] of Object.entries(FRAGMENTSHADER.uniforms)) {
			values[key] = uniform.value;
		}

		return values;

	});




	const pendingUniformWrites = useRef<[string, number][]>([]);


	const colorConfigurationRef = useRef(colorConfiguration);


	colorConfigurationRef.current = colorConfiguration;




	useEffect(() => {

		let resized = true;
		let stop = false;




		const canvas = canvasRef.current;

		if (!canvas) return;

		if (!colorConfigurations[colorConfiguration]) {
			console.warn(colorConfiguration);
		}

		const renderer = new WebGLRenderer(
			canvas,
			vertexShaderRegistry.default!,
			FRAGMENTSHADER.shader,
			colorConfigurations[colorConfiguration],
			seed,
		);

		for (const [key, value] of Object.entries(uniformValues)) {
			pendingUniformWrites.current.push([key, value]);
		}

		if (!animate) renderer.setTimeSpeed(0, 0);

		let lastColorConfiguration = colorConfiguration;

		

		function tick() {
			
			if (stop) return;

			requestAnimationFrame(tick);

			if (resized) {
				const [width, height] = calculateWebGLCanvasDimensions(
					maintainHeight, 
					minWidth, 
					window.innerWidth
				);
				renderer.setDimensions(width, height);
				resized = false;
			}

			if (lastColorConfiguration !== colorConfigurationRef.current) {
				lastColorConfiguration = colorConfigurationRef.current;
				renderer.setColorConfig(colorConfigurations[lastColorConfiguration]);
			}

			for (let [key, value] of pendingUniformWrites.current) {
				renderer.setUniform(key, value);
			}

			pendingUniformWrites.current.length = 0;

			renderer.render();

		}

		tick();

		const resizeListener = () => (resized = true);

		window.addEventListener("resize", resizeListener);

		return () => {
			stop = true;
			window.removeEventListener("resize", resizeListener);
		};

	}, [FRAGMENTSHADER, animate]);




	const uniformEntries = useMemo(
		() => Object.entries(FRAGMENTSHADER.uniforms), [FRAGMENTSHADER]
	);




	useEffect(() => {

		const shouldHaveUsesVariablesProp = uniformEntries.length > 0 && showControls;

		const usesVariables = false;

		if (shouldHaveUsesVariablesProp !== usesVariables) {
			console.warn(
				`'usesVariables' should be ${shouldHaveUsesVariablesProp} for fragment shader '${fragmentShader}'`,
			);
		}

	}, [uniformEntries, showControls]);








	return (
		<div 
			className={STYLES("canvasWrapper", { skew })} 
			style={{ width }}
		>




			<div style={{ paddingTop: `${(HEIGHT / width) * 100}%` }} />




			<canvas
				ref={canvasRef}
				width={width}
				height={HEIGHT}
				style={{
					transform: `scale(${canvasScale})`,
					transformOrigin: "0 0",
				}}
			/>




		</div>
	);
};







