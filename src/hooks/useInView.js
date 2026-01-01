import { useEffect, useRef, useState } from "react";

const useInView = (options = { threshold: 0.3, once: false }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          if (options.once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!options.once) {
            setInView(false);
          }
        }
      },
      { threshold: options.threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return { ref, inView };
};

export default useInView;
