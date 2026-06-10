import { useRef, useEffect, useState } from "react";
import { logos } from "../utils/assetMapper";

export default function Skills() {
  const containerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationFrameId = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoScrollSpeed = 1.2;

  const skillsList = [
    { name: "React", logo: logos.react },
    { name: "Redux", logo: logos.redux },
    { name: "Electron", logo: logos.electron },
    { name: "Javascript", logo: logos.javascript },
    { name: "TypeScript", logo: logos.typescript },
    { name: "Next.js", logo: logos.nextjs },
    { name: "HTML", logo: logos.html },
    { name: "CSS", logo: logos.css },
    { name: "Material UI", logo: logos.materialui },
    { name: "Tailwind CSS", logo: logos.tailwind },
    { name: "Bootstrap", logo: logos.bootstrap },
    { name: "Node.js", logo: logos.node },
    { name: "Express.js", logo: logos.express },
    { name: "PostgreSQL", logo: logos.postgre },
    { name: "Sequelize", logo: logos.sequelize },
    { name: "AI LLM Integration", logo: logos.groq },
    { name: "Vitest", logo: logos.vitest },
    { name: "React Testing Library", logo: logos.reacttesting },
    { name: "Unity3D", logo: logos.unity },
    { name: "C#", logo: logos.csharp },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isDownRef.current) {
        container.scrollLeft += autoScrollSpeed;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
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
    const walk = (x - startXRef.current) * 1.5; // Ajuste de sensibilidad del arrastre
    container.scrollLeft = scrollLeftRef.current - walk;

    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
      startXRef.current = x;
      scrollLeftRef.current = container.scrollLeft;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
      startXRef.current = x;
      scrollLeftRef.current = container.scrollLeft;
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
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
      startXRef.current = x;
      scrollLeftRef.current = container.scrollLeft;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
      startXRef.current = x;
      scrollLeftRef.current = container.scrollLeft;
    }
  };

  return (
    <section className="skills-section" id="testimonials">
      <div className="container-fluid px-0">
        <div className="section-title-container">
          <h2 className="section-title">Skills</h2>
        </div>
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
            {skillsList.map((skill, index) => (
              <div className="skill-marquee-card" key={`${skill.name}-1-${index}`}>
                <div className="skill-marquee-logo-wrapper">
                  <img src={skill.logo} alt={skill.name} className="skill-marquee-logo" />
                </div>
                <span className="skill-marquee-name">{skill.name}</span>
              </div>
            ))}
            {/* Duplicado para efecto scroll infinito */}
            {skillsList.map((skill, index) => (
              <div className="skill-marquee-card" key={`${skill.name}-2-${index}`}>
                <div className="skill-marquee-logo-wrapper">
                  <img src={skill.logo} alt={skill.name} className="skill-marquee-logo" />
                </div>
                <span className="skill-marquee-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


