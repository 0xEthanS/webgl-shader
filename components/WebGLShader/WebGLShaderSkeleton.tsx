import { useMemo } from "react";

import { css } from "@emotion/css";




import { 
	StyleOptions, 
	useStyles 
} from "@/components/WebGLShader/utils/styles";






function useCanvasHeightPlaceholderClassName(
	minWidth: number | undefined
) {
	const height = 250;
	const maintainHeight = 0;



	return useMemo(() => {
		const styled = { css };
		const classNames = [
			styled.css`
				position: relative;
				padding-top: ${height}px;
				width: 100vw;
			`,
		];
		if (typeof minWidth === "number") {
			const heightProportion = height / minWidth;
			classNames.push(styled.css`
				@media (max-width: ${minWidth}px) {
					padding-top: ${heightProportion * 100}vw !important;
					padding-bottom: calc(
						${height * maintainHeight}px - ${heightProportion * maintainHeight * 100}vw
					);
				}
			`);
		}
		return classNames.join(" ");
	}, [minWidth, height]);
}








const styles = ({ styled, theme }: StyleOptions) => ({
	wrapper: styled.css`
		overflow: hidden;
		margin: 0px auto;
		max-width: 100%;

		&--skew {
			transform: skewY(-6deg);
		}
		&--hasWidth {
			width: 750px;
			border-radius: 4px;
		}
	`,

	loadingMessage: styled.css`
		color: ${theme.text400};
		margin: 0;
		position: relative;
		z-index: 3;
		padding: 0 32px;
		text-align: center;

		&--skew {
			transform: skewY(6deg) skewX(-12deg);
		}
	`,
});








export const WebGLShaderSkeleton = (
	{
		minWidth, 
		maintainHeight
	}:any
) => {

	const skew = false;
	const hasWidth = false; 



	const s = useStyles(styles);


	const heightClassName = useCanvasHeightPlaceholderClassName(minWidth);


	


	return (
		<div
			className={[heightClassName, s("wrapper", { hasWidth, skew })].join(" ")}
			data-maintain={maintainHeight}
		>


			<p className={s("loadingMessage", { skew })}>
				Loading canvas...
			</p>


		</div>
	);
};











