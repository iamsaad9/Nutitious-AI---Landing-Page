import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <>
      <style>{`
        .cta-section {
          padding: 50px 0;
          background: #FAFFF7;
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .cta-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .cta-icon::before {
          content: '🎯';
          font-size: 36px;
        }

        .cta-label {
          color: #666;
          font-size: 14px;
          margin-bottom: 20px;
          display: block;
          font-weight: 500;
        }

        .cta-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #1a1a1a;
        }

        .cta-title .text-green {
          color: #4CAF50;
        }

        .cta-description {
          color: #666;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
        }

        .cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(76, 175, 80, 0.4);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: white;
          color: #1a1a1a;
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-btn-secondary:hover {
          border-color: #4CAF50;
          color: #4CAF50;
        }

        .cta-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid #e0e0e0;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 42px;
          font-weight: 700;
          color: #4CAF50;
          margin-bottom: 8px;
          display: block;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 968px) {
          .cta-title {
            font-size: 42px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-stats {
            gap: 40px;
          }

          .stat-value {
            font-size: 36px;
          }
        }

        @media (max-width: 576px) {
          .cta-section {
            padding: 80px 0;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-icon {
            width: 64px;
            height: 64px;
          }

          .cta-icon::before {
            font-size: 28px;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .cta-stats {
            flex-direction: column;
            gap: 32px;
          }

          .stat-value {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <div className="cta-icon"></div>
            </div>

            <span className="cta-label">Ready To Start Your Journey?</span>

            <h2 className="cta-title">
              Your Health Journey
              <br />
              <span className="text-green">Starts Now</span>
            </h2>

            <p className="cta-description">
              Join thousands of users who have transformed their health with our
              AI-powered nutrition assistant. Start tracking today and see
              results tomorrow.
            </p>

            <div className="cta-buttons">
              <button className="cta-btn-primary">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className="cta-btn-secondary">Watch Demo</button>
            </div>

            <div className="cta-stats">
              <div className="stat-item">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4.9★</span>
                <span className="stat-label">User Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">1M+</span>
                <span className="stat-label">Meals Tracked</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
