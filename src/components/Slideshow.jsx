import { useState, useEffect } from 'react';
import './../css/Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/Stray-Kids-Rome-Roma-min-2-scaled.jpg`,
      caption: "Welcome to STAY Community"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/community/stayhideout.jpg`,
      caption: "Connect with Fans Worldwide"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/community/skz.jpg`,
      caption: "Follow Stray Kids' Journey"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              display: index === currentSlide ? 'flex' : 'none'
            }}
          >
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slide-nav prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slide-nav next" onClick={nextSlide}>
        ›
      </button>

      {/* Dots Navigation */}
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;