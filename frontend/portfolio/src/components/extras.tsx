import React, { useEffect, useMemo, useRef } from "react";
import Typed from "typed.js";
import "./extras.css";
import type { aboutcardProps, buttonProps, HeaderProps, projectcardProps, Skill, skillcardProps } from "../interface";

export const AutoType: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "Software Developer",
      "Front-end Developer",
      "Back-end Developer",
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
      backDelay: 3000,
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

export const AutoTypeCareer: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "PROFESSIONAL EXPERIENCE",
      "CAREER HIGHLIGHTS",
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
      backDelay: 3000,
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

export const AutoTypeProjects: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "FEATURED PROJECTS",
      "WHAT I'VE BUILT"
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
      backDelay: 3000,
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
export const AutoTypeSkills: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);

  // Keep strings stable so Typed.js doesn't re-init on every render
  const titles = useMemo(
    () => [
      "SKILLS",
      "WHAT I WORK WITH"
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
      backDelay: 3000,
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


export const AboutcardComponent: React.FC<aboutcardProps> = (Props) => {

  return(
    <>
      <div className={`aboutcarddiv ${Props.darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`}>
          <div className={`cardiconround ${Props.darkMode ? 'darkmoderound':'lightmoderound'} `}>
              <i className={`${Props.className} iconfont`}></i>
          </div>
          <h1 className={`${Props.darkMode ? 'darkmodetext' : 'lightmodetext'} h1smalltext`}>{Props.h1text}</h1>
          <p className={`${Props.darkMode ? 'darkmodetext' : 'lightmodetext'} ptext`}>{Props.ptext}</p>
      </div>
    </>
  )
};

export const SkillscardComponent: React.FC<skillcardProps> = (Props) => {
  
 
  return(

    <>
      <div className={`skillcardparent ${Props.darkMode ? 'darkmodeaboutcard' : 'lightmodeaboutcard'}`}>
            <h1 className={`${Props.darkMode ? 'darkmodetext' : 'lightmodetext'} h1text`}>{Props.h1text}</h1>
            <div className="skill-gridcard">
                {Props?.items?.map((s, i)=>(
                  <>
                    <div className={`skill-itemcard ${Props.darkMode ? 'darkmodetext' : 'lightmodetext'}`} key={i}>
                      <div className={`skill-icon ${Props.darkMode ? 'darkmoderound darkmodeaboutcard':'lightmoderound lightmodeaboutcard'}`}>
                        <i className="fa-solid fa-check iconfont"></i>
                      </div>
                      <div className="skilldetails">

                          <p className="h1smalltext">{s.name}</p>
                          <p className="ptext">{s.level}</p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
      </div>
    </>
  )
}

export const ProjectcardComponent: React.FC<projectcardProps> = ({darkMode, setDarkMode, cardarray}) => {

  return(

    <>
      <div className={`card-div-carousel ${darkMode ? 'darkmodeaboutcard darkmodetext' : 'lightmodeaboutcard lightmodetext'}`}>
          <div className="card-div-images">
                <img src={cardarray?.imageUrl} alt="Image" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              <div className="card-div-para">
                <p className={`ptext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>{cardarray?.description}</p>
              </div>
          </div>
          <div className="card-details">
            <h1 className={`h1smalltext ${darkMode ? 'darkmodetext' : 'lightmodetext'}`}>{cardarray?.title}</h1>
            <ButtonComp text="View Project" className={`${darkMode ? 'darkmodebutton' : 'lightmodebutton'}`}/>
          </div>
      </div>
    </>
  )
}