import { useEffect, useRef, useState } from 'react';

/**
 * Hook para manejar la lógica de revelado con scroll (Intersection Observer).
 * @param {number} threshold - Cuánto del elemento debe ser visible (0.0 a 1.0).
 * @returns {[import('react').RefObject, boolean]} - Ref para el elemento y estado de visibilidad.
 */
export default function useReveal(threshold = 0.1) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [threshold]);

  return [elementRef, isVisible];
}
