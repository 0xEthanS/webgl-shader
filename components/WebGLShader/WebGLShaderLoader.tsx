"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";




// Simple dynamic import - Next.js handles caching automatically
const WebGLShader = dynamic(
    () => import("./WebGLShader").then((module) => module.WebGLShader),
    { ssr: false } // Disable SSR for WebGL component
);






export const WebGLShaderLoader = ({
    colorConfiguration,
    fragmentShader,
    height,
    maintainHeight,
    minWidth,
    seed,
    skew
}: any) => {


    const colorConfigurationArr = Array.isArray(colorConfiguration)
        ? colorConfiguration
        : [colorConfiguration ?? "default"];


    const ref = useRef<HTMLDivElement>(null!);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { rootMargin: "64px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);




    return (
        <div
            className={clsx(
                "canvas flex flex-col items-center w-screen my-10 -mx-6",
                {
                    "m-[calc(32px+min(100vw,750px)*0.04)_-24px_calc(48px+min(100vw,750px)": skew
                }
            )}
            ref={ref}
        >
            {visible ? (
                <WebGLShader
                    colorConfiguration={colorConfigurationArr[0]}
                    fragmentShader={fragmentShader}
                    height={height}
                    maintainHeight={maintainHeight}
                    minWidth={minWidth}
                    seed={seed}
                    skew={skew}
                />
            ) : (
                <div className="relative w-screen overflow-hidden max-w-full my-0 mx-auto aspect-3/1">
					<p className="absolute inset-0 flex items-center justify-center text-slate-400">
						Loading canvas...
					</p>
				</div>
            )}
        </div>
    );
};







