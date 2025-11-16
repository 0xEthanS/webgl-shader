import { WebGLShader } from "@/components/WebGLShader/WebGLShader";




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
				rounded-xl 
				overflow-hidden 

				bg-slate-300
			"
		>


			<WebGLShader 
				colorConfiguration={"default"} // color definition
				fragmentShaderValue={"final"} // shader shape
				seed={16192} 
			/>


		</div>
	);
}







