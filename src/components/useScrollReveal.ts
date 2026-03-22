import { useEffect, useRef } from "react";

type RevealType = "up" | "left" | "right" | "scale";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  type: RevealType = "up"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classMap: Record<RevealType, string> = {
      up: "animate-reveal-up",
      left: "animate-reveal-left",
      right: "animate-reveal-right",
      scale: "animate-reveal-scale",
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(classMap[type]);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [type]);

  return ref;
}
