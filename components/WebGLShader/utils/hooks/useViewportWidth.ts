import { useEffect, useState } from "react";




export const useViewportWidth = () => {
	const [width, setWidth] = useState<number | null>(() => 
		typeof window === "undefined" ? null : window.innerWidth
	);
	useEffect(() => {
		const listener = () => setWidth(window.innerWidth);
		window.addEventListener("resize", listener);
		return () => window.removeEventListener("resize", listener);
	}, []);
	return width;
};







