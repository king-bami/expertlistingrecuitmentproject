
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(containerRef.current, {
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                        onComplete
                    });
                }
            });

            // Rapid but smooth sequence (Total intro ~0.7s)
            tl.fromTo(logoRef.current,
                { scale: 0, rotation: -45, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            );

            tl.fromTo(textRef.current,
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
                "-=0.1" // Staggered entrance, comes in last
            );

            // Brief pause to complete the 1s feel
            tl.to({}, { duration: 0.3 });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[1000] bg-white flex items-center justify-center p-6"
        >
            <div className="flex items-center gap-4 overflow-hidden px-4 py-2">
                <div ref={logoRef} className="shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-xl shadow-sm  flex items-center justify-center p-2.5">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div ref={textContainerRef} className="overflow-hidden">
                    <h1
                        ref={textRef}
                        className="text-xl sm:text-2xl font-extrabold text-[#105B48] tracking-tight whitespace-nowrap"
                    >
                        Expert Listing
                    </h1>
                </div>
            </div>
        </div>
    );
};
