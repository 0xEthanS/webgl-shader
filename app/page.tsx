import { WebGLShaderLoader } from "@/components/WebGLShader/WebGLShaderLoader";




export default function Home() {
	return (
		<div className="
				relative 
				h-[250px] 
				max-h-[250px] 
				w-full 
				max-w-5xl 
				pr-[max(env(safe-area-inset-left),24px)] 
				pl-[max(env(safe-area-inset-left),24px)] 
				mx-auto 
				mt-10 
				rounded-md 
				overflow-hidden 

				bg-orange-300 
			"
		>


			<WebGLShaderLoader />


		</div>
	);
}







