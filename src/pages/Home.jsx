import styles from "../styles/Home.module.css";
import Cards from "../components/ui/cards.jsx";
import Carousel from "../components/ui/carousel.jsx";
import ModalComponent from "../components/ui/Modals.jsx";
import Timeline from "../components/ui/Timeline.jsx";
import { useState } from "react";
import { Trans } from "react-i18next";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyles = {
    width: "fit-content",
  };

  return (
    <>
      <h1 className={styles.h1}>CORENTIN NORDMANN</h1>
      <div className={styles.container}>
        <div onClick={() => setIsOpen(true)} className={styles.portraitblock}>
          <Cards className="portrait">
            <h2 className={styles.h2}>Portrait !</h2>
          </Cards>
        </div>
        <Cards className="projects">
          <Carousel />
        </Cards>
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
