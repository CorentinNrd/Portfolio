import styles from "../styles/Home.module.css";
import Cards from "../components/ui/cards.jsx";
import Carousel from "../components/ui/carousel.jsx";
import ModalComponent from "../components/ui/Modals.jsx";
import Timeline from "../components/ui/Timeline.jsx";
import { useState } from "react";
import { Trans } from "react-i18next";
import Klineo from "../assets/klineo.png";
import Parisattitude from "../assets/parisattitude.png";
import SecretLancy from "../assets/secretlancy.png";
import AbonnMe from "../assets/abonme.png";
import Tipi from "../assets/tipi.png";
import useDeviceDetection from "../hooks/useDeviceDetection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const device = useDeviceDetection();

  const modalStyles = {
    width: "fit-content",
  };

  const slides = [
    {
      src: Parisattitude,
      alt: "PARIS ATTITUDE",
      url: "https://www.parisattitude.com/",
    },
    { src: Tipi, alt: "TIPI (outil interne)" },
    { src: Klineo, alt: "KLINEO", url: "https://www.klineo.fr/" },
    { src: SecretLancy, alt: "SECRET LANCY", url: "https://secret-lancy.netlify.app/auth" },
    { src: AbonnMe, alt: "ABONNME", url: "https://abonnme.netlify.app/" },
  ];

  return (
    <>
      <h1 className={styles.h1}>CORENTIN NORDMANN</h1>
      <div className={styles.container}>
        <div onClick={() => setIsOpen(true)} className={styles.portraitblock}>
          <Cards className="portrait">
            <h2 className={styles.h2W}>Portrait !</h2>
          </Cards>
        </div>
        {device !== "Mobile" ? (
          <Cards className="projects">
            <Carousel slides={slides} />
          </Cards>
        ) : (
          slides.map((slide, index) => (
            <Cards key={index} className="projects">
              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project_link}
              >
                <img
                  className={styles.project_image}
                  src={slide.src}
                  alt={slide.alt}
                />
              </a>
              <div className={styles.project_text}>
                <p>{slide.alt}</p>
              </div>
            </Cards>
          ))
        )}
      </div>
      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        styles={modalStyles}
      >
        <div className={styles.textblockportrait}>
          <p>
            <Trans i18nKey="content-portrait" />
          </p>
        </div>
        <br />

        <Timeline />
      </ModalComponent>
    </>
  );
}
