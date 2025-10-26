"use client";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import CTASection from "./components/CTASections";
import FeatureCardsSection from "./components/FeatureCardSection";
import AIAssistantSection from "./components/AiAssistantSection";
import FeatureHeader from "./components/FeatureHeader";
export default function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #FAFFF7;
          color: #1a1a1a;
        }

        .app {
          min-height: 100vh;
        }

        .text-green {
          color: #4CAF50;
        }
      `}</style>
      <div className="app">
        <Header />
        <HeroSection />
        <FeatureHeader />
        <FeatureCardsSection />
        <AIAssistantSection />
        <CTASection />
      </div>
    </>
  );
}
