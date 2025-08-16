import React, { useEffect, useMemo, useRef } from "react";
import Typed from "typed.js";

export const AutoType: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
    ],
    []
  );

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      if (el.current) el.current.textContent = titles[0];
      return;
    }

    const typed = new Typed(el.current!, {
      strings: titles,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      
     
    });

    return () => typed.destroy(); 
  }, [titles]);

  return (
    <span className="autotype">
      <span ref={el} />
    </span>
  );
};