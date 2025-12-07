import { useState, useEffect } from "react";

export const useBreakpoint = (): { breakpoint: Breakpoint; width: number } => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );

    const update = () => {
      setWidth(window.innerWidth);
      if (mobile.matches) return setBreakpoint("mobile");
      if (tablet.matches) return setBreakpoint("tablet");
      setBreakpoint("desktop");
    };

    update();
    window.addEventListener("resize", update);
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return { breakpoint, width };
};

// usage in components:
// const { breakpoint, width } = useBreakpoint();
// const isMobile = breakpoint === 'mobile';
// console.log(width);
