import React, { useEffect, useMemo, useRef } from "react";
import Typed from "typed.js";
import "./extras.css";
import type { buttonProps } from "../interface";

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

export const AutoTypeAbout: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "ABOUT ME",
      "WHAT I DO?"
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
      backDelay: 4000,
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

export const ButtonComp: React.FC<buttonProps> = ({
  className = "",
  onClick,
  text = "Button",
  disabled = false,
  hrefroute,
  target,
  style,
  ...rest
}) => {
  const isLink = !!hrefroute && !disabled;
  const rel =
    target === "_blank" ? "noopener noreferrer" : undefined;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // If no href, treat it like a button (don’t navigate)
    if (!hrefroute) e.preventDefault();
    onClick?.();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLAnchorElement> = (e) => {
    // Space/Enter should activate when acting as a button
    if (!hrefroute && !disabled && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <a
      href={isLink ? hrefroute : undefined}
      target={target}
      rel={rel}
      role={!isLink ? "button" : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      className={`buttonnormal ${disabled ? "is-disabled" : ""} ${className}`}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {text}
    </a>
  );
};
