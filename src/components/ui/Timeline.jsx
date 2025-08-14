import { useEffect, useRef } from "react";
import "../../styles/Timeline.css";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();
  const timelineRef = useRef(null);

  const timelineData = t("timelineData", { returnObjects: true });

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll(".timeline-item");

    // Observer pour chaque item
    items.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animation avec Web Animations API
              entry.target.animate(
                [
                  {
                    opacity: 0,
                    transform: "translateY(50px) scale(0.8)",
                  },
                  {
                    opacity: 1,
                    transform: "translateY(0px) scale(1)",
                  },
                ],
                {
                  duration: 800,
                  delay: 200,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                  fill: "forwards",
                }
              );

              // Ne plus observer cet élément une fois animé
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      observer.observe(item);
    });

    // Cleanup
    return () => {
      items.forEach((item) => {
        const observer = new IntersectionObserver(() => {});
        observer.disconnect();
        observer.observe(item); // Déconnecte l'observer pour éviter les fuites de mémoire
      });
    };
  }, [timelineData]);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-line"></div>
      {timelineData && timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-content">
            <div className="timeline-year">{item.year}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
          <div className="timeline-dot"></div>
        </div>
      ))}
    </div>
  );
}
