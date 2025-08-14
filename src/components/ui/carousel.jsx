import useEmblaCarousel from "embla-carousel-react";
import "../../styles/Carousel.css";
import { DotButton, CarouselDotButton } from "./CarouselDotButton";
import {
  PrevButton,
  NextButton,
  CarouselArrowButton,
} from "./CarouselArrowButton";

export default function Carousel({slides}) {
  const options = {
    loop: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    CarouselDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = CarouselArrowButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide.url ? (
                <a
                  href={slide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project_link"
                >
                  <img
                    className="project_image"
                    src={slide.src}
                    alt={slide.alt}
                  />
                </a>
              ) : (
                <img
                  className="project_image"
                  src={slide.src}
                  alt={slide.alt}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div>
          <span className="embla__selected-index">
            {
              // get alt text of the current slide
              slides[selectedIndex]
                ? slides[selectedIndex].alt
                : "No slide selected"
            }
          </span>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
