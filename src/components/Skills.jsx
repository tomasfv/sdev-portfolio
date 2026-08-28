import { useRef, useEffect, useState } from "react";
import { logos } from "../utils/assetMapper";

function MarqueeRow({ skills, direction = "normal" }) {
  const containerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationFrameId = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoScrollSpeed = direction === "reverse" ? -1.2 : 1.2;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isDownRef.current) {
        container.scrollLeft += autoScrollSpeed;

        const halfWidth = container.scrollWidth / 2;
        if (direction === "reverse") {
          if (container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        } else {
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;

    const halfWidth = container.scrollWidth / 2;
    if (direction === "reverse") {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      }
    } else {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      }
    }
  };

  const handleTouchStart = (e) => {
    const container = containerRef.current;
    if (!container) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDownRef.current) return;
    const container = containerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;

    const halfWidth = container.scrollWidth / 2;
    if (direction === "reverse") {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      }
    } else {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth;
        startXRef.current = x;
        scrollLeftRef.current = container.scrollLeft;
      }
    }
  };

  return (
    <div
      className={`skills-marquee-container ${isDragging ? "dragging" : ""}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <div className="skills-marquee-track">
        {skills.map((skill, index) => (
          <div className="skill-marquee-card" key={`${skill.name}-1-${index}`}>
            <div className="skill-marquee-logo-wrapper">
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-marquee-logo"
              />
            </div>
            <span className="skill-marquee-name">{skill.name}</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div className="skill-marquee-card" key={`${skill.name}-2-${index}`}>
            <div className="skill-marquee-logo-wrapper">
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-marquee-logo"
              />
            </div>
            <span className="skill-marquee-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const row1 = [
  { name: "TypeScript", logo: logos.typescript },
  { name: "Javascript", logo: logos.javascript },
  { name: "React", logo: logos.react },
  { name: "Next.js", logo: logos.nextjs },
  { name: "Redux", logo: logos.redux },
  { name: "HTML", logo: logos.html },
  { name: "CSS", logo: logos.css },
  { name: "Material UI", logo: logos.materialui },
  { name: "Tailwind CSS", logo: logos.tailwind },
  { name: "Node.js", logo: logos.node },
  { name: "Express.js", logo: logos.express },
  { name: "PostgreSQL", logo: logos.postgre },
  { name: "Sequelize", logo: logos.sequelize },
];

const row2 = [
  { name: "Bootstrap", logo: logos.bootstrap },
  { name: "C#", logo: logos.csharp },
  { name: "Unity3D", logo: logos.unity },
  { name: "Electron", logo: logos.electron },
  { name: "AI LLM Integration", logo: logos.groq },
  { name: "Vercel", logo: logos.vercel },
  { name: "Amazon Web Services", logo: logos.aws },
  { name: "GitHub", logo: logos.github },
  { name: "Git", logo: logos.git },
  { name: "Docker", logo: logos.docker },
  { name: "React Testing Library", logo: logos.reacttesting },
  { name: "Vitest", logo: logos.vitest },
  { name: "Jest", logo: logos.jest },
];

export default function Skills() {
  return (
    <section className="skills-section" id="testimonials">
      <div className="container-fluid px-0">
        <div className="section-title-container">
          <h2 className="section-title">Skills</h2>
        </div>
        <MarqueeRow skills={row1} />
        <MarqueeRow skills={row2} direction="reverse" />
      </div>
    </section>
  );
}
