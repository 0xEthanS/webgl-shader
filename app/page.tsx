import { WebGLShaderLoader } from "@/components/WebGLShader/WebGLShaderLoader";




export default function Home() {
	return (
		<div>
			<WebGLShaderLoader 
				fragmentShader="final" 
				skew 
				height={275} 
				minWidth={600} 
				maintainHeight={0.3} 
				seed={16192} 
				colorConfiguration={["default", "blue_to_yellow", "green"]} 
			/>
		</div>
	);
}







