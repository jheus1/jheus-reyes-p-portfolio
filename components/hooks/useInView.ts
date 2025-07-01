import { useEffect, useState, useRef, MutableRefObject } from "react";

export default function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.3
): [MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible]; // ✅ Correct order: [ref, boolean]
}
