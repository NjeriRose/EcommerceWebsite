import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

interface SlideProps {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  link: string;
}

interface HeroSliderProps {
  slides: SlideProps[];
  autoplayInterval?: number;
}

const HeroSlider = ({ slides, autoplayInterval = 5000 }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Preload the next slide image to avoid flicker on slide change
  useEffect(() => {
    const nextSlideIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    const img = new Image();
    img.src = slides[nextSlideIndex].image;
  }, [currentSlide, slides]);

  return (
    <div className="relative overflow-hidden bg-oraimo-black">
      <div className="relative h-96 md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Link to={slide.link}>
              <OptimizedImage
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                priority={index === currentSlide || index === (currentSlide + 1) % slides.length}
                isHero={true}
                quality={90}
                sizes="100vw"
              />
              {(slide.title || slide.subtitle) && (
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 bg-gradient-to-r from-black/60 to-transparent">
                  {slide.title && (
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-xl">{slide.title}</h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-sm md:text-base text-white max-w-md mb-6">{slide.subtitle}</p>
                  )}
                  <button className="bg-oraimo-green hover:bg-oraimo-dark-green text-white px-6 py-2 rounded-md transition-colors">
                    Learn More
                  </button>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-oraimo-green' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
