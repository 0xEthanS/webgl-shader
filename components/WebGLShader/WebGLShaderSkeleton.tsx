import { useMemo } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utills/cn";
import { css } from "@emotion/css";






export const WebGLShaderSkeleton = (
	{
		minWidth, 
		maintainHeight
	}:any
) => {

	const skew = false;
	const hasWidth = false; 




	const heightClassName = useMemo(() => {
		return css`
			@media (max-width: ${minWidth}px) {
				padding-top: ${(250 / minWidth!) * 100}vw !important;
			}
		`;
	}, [minWidth]);


	



	return (
		<div
			className={cn(
				heightClassName, 
				clsx(
					"relative w-screen overflow-hidden max-w-full my-0 mx-auto ",
					{
						"-skew-y-6": skew,
    					"w-[750px] rounded": hasWidth
					}
				)
			)}

			data-maintain={maintainHeight}
		>


			<p className={clsx(
					"w-screen relative m-0 pt-[250px] px-8 text-center z-30 text-slate-400",
					{
						"skew-y-6 -skew-x-12": skew
					}
				)}
			>
				Loading canvas...
			</p>


		</div>
	);
};











