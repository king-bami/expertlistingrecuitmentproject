
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AnimatedNumberProps {
    value: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const counterRef = useRef({ val: 0 });
    const textRef = useRef<HTMLSpanElement>(null);

    // Parse the numeric value and non-numeric characters
    const numericString = value.replace(/[^0-9.]/g, "");
    const targetValue = parseFloat(numericString) || 0;
    const prefix = value.match(/^[^\d]+/)?.[0] || "";
    const suffix = value.match(/[^\d]+$/)?.[0] || "";
    const hasDecimal = value.includes(".");

    useEffect(() => {
        // Kill any existing animations on this ref
        gsap.killTweensOf(counterRef.current);

        // Initial value for the animation
        const startValue = counterRef.current.val;

        gsap.to(counterRef.current, {
            val: targetValue,
            duration: 1.5,
            ease: "power3.out",
            onUpdate: () => {
                const currentVal = counterRef.current.val;

                let formatted;
                if (suffix.toLowerCase().includes("k")) {
                    // Handle 1.8k type values
                    formatted = currentVal.toFixed(1);
                } else {
                    formatted = currentVal.toLocaleString(undefined, {
                        minimumFractionDigits: hasDecimal ? 2 : 0,
                        maximumFractionDigits: 2,
                    });
                }

                setDisplayValue(`${prefix}${formatted}${suffix}`);
            },
        });
    }, [targetValue, prefix, suffix, hasDecimal]);

    return <span ref={textRef}>{displayValue}</span>;
};
