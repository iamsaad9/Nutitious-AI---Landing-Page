import React, { useState, useCallback, useEffect } from "react";

const FeatureCardsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Desktop slides - 2 cards per slide
  const desktopSlides = [
    [
      {
        type: "dashboard",
        title: "Get Smarter Insights By Calories, Macros, And Nutrients.",
        subtitle: "Track everything from calories to vitamins and minerals.",
        footer:
          "Precision you can trust—every nutrient of your food, right in front of you, with full transparency!",
      },
      {
        type: "video",
        title: "Personalized Meal Plan Based On Your Goals.",
        subtitle: "Watch Demo",
      },
    ],
    [
      {
        type: "video",
        title: "Track Your Progress With AI Insights.",
        subtitle: "Learn More",
      },
      {
        type: "dashboard",
        title: "Smart Meal Planning Made Simple.",
        subtitle: "Get personalized recommendations based on your goals.",
        footer: "Your nutrition journey simplified with intelligent tracking!",
      },
    ],
  ];

  // Mobile slides - 1 card per slide (flattened)
  const mobileSlides = desktopSlides.flat();

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    const totalSlides = isMobile ? mobileSlides.length : desktopSlides.length;
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [desktopSlides.length, mobileSlides.length]);

  const prevSlide = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    const totalSlides = isMobile ? mobileSlides.length : desktopSlides.length;
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [desktopSlides.length, mobileSlides.length]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
      
        .feature-cards-section {
          padding: 80px 0;
          background: #FAFFF7;
        }

        .feature-container {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .carousel-wrapper {
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          touch-action: pan-y;
        }

        .carousel-slide {
          min-width: 100%;
          flex-shrink: 0;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        /* Card Base Styles */
        .feature-card {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          margin: 0 10px;
          max-height: 500px;
        }

        /* Dashboard Card */
        .feature-card.dashboard {
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          padding: 36px;
        }

        .card-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .card-title {
          color: white;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .card-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
          line-height: 1.6;
        }

        .dashboard-mockup {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
          flex: 1;
        }

        .mockup-card {
          background: white;
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }


        .mockup-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .mockup-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, #FFB74D 0%, #FFA726 100%);
        }

        .mockup-title {
          font-size: 11px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .mockup-value {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .mockup-label {
          font-size: 10px;
          color: #666;
        }

        .meal-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .meal-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .meal-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          flex-shrink: 0;
        }


         .meal-icon.breakfast {
          background: url('https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=500');
          background-size: cover;
        }

        .meal-icon.lunch {
          background: url('https://images.unsplash.com/photo-1627309302198-09a50ae1b209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHVuY2h8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500');
          background-size: cover;
        }

        .meal-icon.dinner {
          background: url('https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170');
          background-size: cover;
        }


        .meal-info {
          flex: 1;
        }

        .meal-name {
          font-size: 11px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 2px;
        }

        .meal-time {
          font-size: 9px;
          color: #999;
        }

        .chart-mockup {
          height: 80px;
          background: linear-gradient(to top, #E8F5E9 0%, transparent 100%);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 100%;
          padding: 10px 6px;
        }

        .chart-bar {
          width: 12px;
          background: linear-gradient(to top, #4CAF50 0%, #81C784 100%);
          border-radius: 3px 3px 0 0;
        }

        .chart-bar:nth-child(1) { height: 40%; }
        .chart-bar:nth-child(2) { height: 70%; }
        .chart-bar:nth-child(3) { height: 55%; }
        .chart-bar:nth-child(4) { height: 85%; }
        .chart-bar:nth-child(5) { height: 60%; }

        .badge-green {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 16px;
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        .badge-icon {
          width: 14px;
          height: 14px;
          background: white;
          border-radius: 50%;
        }

        .card-footer {
          text-align: center;
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 11px;
          line-height: 1.5;
        }

        /* Video Card */
        .feature-card.video {
          background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170');
          z-index: 1;
        }

        .video-content {
          position: relative;
          z-index: 2;
          padding: 32px;
          color: white;
          width: 100%;
          text-align: center;
        }

        .play-button {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .play-button:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: scale(1.05);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-left: 18px solid white;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          margin-left: 3px;
        }

        .video-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .video-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Navigation Arrows */
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .carousel-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav.prev {
          left: -20px;
        }

        .carousel-nav.next {
          right: -20px;
        }

        .carousel-nav svg {
          width: 22px;
          height: 22px;
          color: #4CAF50;
        }

        /* Pagination Dots */
        .pagination-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
        }

        .pagination-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #C8E6C9;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          padding: 0;
        }

        .pagination-dot:hover {
          background: #A5D6A7;
        }

        .pagination-dot.active {
          background: #4CAF50;
          width: 28px;
          border-radius: 5px;
        }

        /* Mobile Styles - Show single cards */
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .carousel-slide.mobile-slide {
            width: 100%;
          }

          .feature-card {
            min-height: 420px;
          }

          .feature-card.dashboard {
            padding: 32px 24px;
          }

          .card-title {
            font-size: 18px;
          }

          .video-title {
            font-size: 20px;
          }

          .dashboard-mockup {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .mockup-card.wide {
            grid-column: span 1;
          }

          .carousel-nav {
            width: 40px;
            height: 40px;
          }

          .carousel-nav.prev {
            left: 12px;
          }

          .carousel-nav.next {
            right: 12px;
          }
        }

        @media (max-width: 576px) {
          .feature-cards-section {
            padding: 60px 0;
          }

          .feature-card {
            min-height: 380px;
          }

          .feature-card.dashboard {
            padding: 28px 20px;
          }

          .card-title {
            font-size: 17px;
          }

          .video-title {
            font-size: 19px;
          }

          .play-button {
            width: 52px;
            height: 52px;
          }

          .carousel-nav {
          }
        }
      `}</style>

      <section className="feature-cards-section">
        <div className="feature-container">
          <div
            className="carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* Desktop View - 2 cards per slide */}
              <div className="desktop-slides" style={{ display: "contents" }}>
                {desktopSlides.map((slideGroup, slideIndex) => (
                  <div
                    key={`desktop-${slideIndex}`}
                    className="carousel-slide desktop-slide"
                  >
                    <div className="cards-grid">
                      {slideGroup.map((card, cardIndex) => (
                        <div
                          key={cardIndex}
                          className={`feature-card ${card.type}`}
                        >
                          {card.type === "dashboard" ? (
                            <>
                              <div className="card-header">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-subtitle">{card.subtitle}</p>
                              </div>

                              <div className="dashboard-mockup">
                                <div className="mockup-card">
                                  <div className="mockup-header">
                                    <div className="mockup-icon"></div>
                                  </div>
                                  <div className="mockup-value">2150</div>
                                  <div className="mockup-label">
                                    Nutrition Score
                                  </div>
                                </div>

                                <div className="mockup-card">
                                  <span className="badge-green">
                                    <div className="badge-icon"></div>
                                    On Track
                                  </span>
                                </div>

                                <div className="mockup-card wide">
                                  <div className="mockup-header">
                                    <div className="mockup-title">
                                      Today&apos;s Meals
                                    </div>
                                  </div>
                                  <div className="meal-list">
                                    <div className="meal-item">
                                      <div className="meal-icon breakfast"></div>
                                      <div className="meal-info">
                                        <div className="meal-name">
                                          Breakfast
                                        </div>
                                        <div className="meal-time">8:00 AM</div>
                                      </div>
                                    </div>
                                    <div className="meal-item">
                                      <div className="meal-icon lunch"></div>
                                      <div className="meal-info">
                                        <div className="meal-name">Lunch</div>
                                        <div className="meal-time">1:00 PM</div>
                                      </div>
                                    </div>
                                    <div className="meal-item">
                                      <div className="meal-icon dinner"></div>
                                      <div className="meal-info">
                                        <div className="meal-name">Dinner</div>
                                        <div className="meal-time">7:00 PM</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mockup-card wide">
                                  <div
                                    className="mockup-title"
                                    style={{ marginBottom: "10px" }}
                                  >
                                    Weekly Progress
                                  </div>
                                  <div className="chart-mockup">
                                    <div className="chart-bars">
                                      <div className="chart-bar"></div>
                                      <div className="chart-bar"></div>
                                      <div className="chart-bar"></div>
                                      <div className="chart-bar"></div>
                                      <div className="chart-bar"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card-footer">{card.footer}</div>
                            </>
                          ) : (
                            <>
                              <div className="video-overlay"></div>
                              <div className="video-content">
                                <div className="play-button">
                                  <div className="play-icon"></div>
                                </div>
                                <h3 className="video-title">{card.title}</h3>
                                <p className="video-subtitle">
                                  {card.subtitle}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View - 1 card per slide */}
              <div className="mobile-slides" style={{ display: "contents" }}>
                {mobileSlides.map((card, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="carousel-slide mobile-slide"
                    style={{ display: "none" }}
                  >
                    <div className="cards-grid">
                      <div className={`feature-card ${card.type}`}>
                        {card.type === "dashboard" ? (
                          <>
                            <div className="card-header">
                              <h2 className="card-title">{card.title}</h2>
                              <p className="card-subtitle">{card.subtitle}</p>
                            </div>

                            <div className="dashboard-mockup">
                              <div className="mockup-card">
                                <div className="mockup-header">
                                  <div className="mockup-icon"></div>
                                </div>
                                <div className="mockup-value">2150</div>
                                <div className="mockup-label">
                                  Nutrition Score
                                </div>
                              </div>

                              <div className="mockup-card">
                                <span className="badge-green">
                                  <div className="badge-icon "></div>
                                  <span>On Track</span>
                                </span>
                              </div>

                              <div className="mockup-card wide">
                                <div className="mockup-header">
                                  <div className="mockup-title">
                                    Today&apos;s Meals
                                  </div>
                                </div>
                                <div className="meal-list">
                                  <div className="meal-item">
                                    <div className="meal-icon breakfast"></div>
                                    <div className="meal-info">
                                      <div className="meal-name">Breakfast</div>
                                      <div className="meal-time">8:00 AM</div>
                                    </div>
                                  </div>
                                  <div className="meal-item">
                                    <div className="meal-icon lunch"></div>
                                    <div className="meal-info">
                                      <div className="meal-name">Lunch</div>
                                      <div className="meal-time">1:00 PM</div>
                                    </div>
                                  </div>
                                  <div className="meal-item">
                                    <div className="meal-icon dinner"></div>
                                    <div className="meal-info">
                                      <div className="meal-name">Dinner</div>
                                      <div className="meal-time">7:00 PM</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mockup-card wide">
                                <div
                                  className="mockup-title"
                                  style={{ marginBottom: "10px" }}
                                >
                                  Weekly Progress
                                </div>
                                <div className="chart-mockup">
                                  <div className="chart-bars">
                                    <div className="chart-bar"></div>
                                    <div className="chart-bar"></div>
                                    <div className="chart-bar"></div>
                                    <div className="chart-bar"></div>
                                    <div className="chart-bar"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card-footer">{card.footer}</div>
                          </>
                        ) : (
                          <>
                            <div className="video-overlay"></div>
                            <div className="video-content">
                              <div className="play-button">
                                <div className="play-icon"></div>
                              </div>
                              <h3 className="video-title">{card.title}</h3>
                              <p className="video-subtitle">{card.subtitle}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="carousel-nav prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="carousel-nav next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          {/* Pagination Dots */}
          <div className="pagination-dots">
            {(isMobile ? mobileSlides : desktopSlides).map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .desktop-slide {
            display: none !important;
          }
          .mobile-slide {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-slide {
            display: none !important;
          }
          .desktop-slide {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default FeatureCardsSection;
