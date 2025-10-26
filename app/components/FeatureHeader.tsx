import React from "react";
import DataDrivenInsight from "./DataDrivenInsight";

const NutritionTrackingHeader = () => {
  return (
    <>
      <style>{`
        .nutrition-header-section {
          padding: 60px 0 40px;
          background: #FAFFF7;
        }

        .nutrition-header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .header-left {
          flex: 1;
          max-width: 600px;
        }

        .header-label {
          color: #666;
          font-size: 13px;
          margin-bottom: 16px;
          display: block;
          font-weight: 500;
        }

        .header-title {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .header-title .text-green {
          color: #4CAF50;
        }

        .header-description {
          color: #666;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .insight-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          padding: 12px 20px;
          border-radius: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .badge-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-icon::before {
          content: '📊';
          font-size: 20px;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .badge-label {
          font-size: 11px;
          color: #999;
          font-weight: 500;
        }

        .badge-title {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .feature-tags {
          display: flex;
          gap: 16px;
        }

        .feature-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 10px 16px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          font-size: 12px;
          font-weight: 500;
          color: #1a1a1a;
        }

        .tag-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .tag-icon.breakfast::before {
          content: '🍳';
        }

        .tag-icon.salad::before {
          content: '🥗';
        }

        .tag-icon.protein::before {
          content: '🥩';
        }

        /* Responsive Styles */
        @media (max-width: 968px) {
          .nutrition-header-section {
            padding: 50px 0 30px;
          }

          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }

          .header-title {
            font-size: 36px;
          }

          .header-right {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .feature-tags {
            width: 100%;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 576px) {
          .nutrition-header-section {
            padding: 40px 0 24px;
          }
         .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .header-title {
            font-size: 28px;
          }

          .header-description {
            font-size: 14px;
          }

          .insight-badge {
            padding: 10px 16px;
          }

          .badge-icon {
            width: 36px;
            height: 36px;
          }

          .badge-icon::before {
            font-size: 18px;
          }

          .badge-title {
            font-size: 12px;
          }

          .badge-label {
            font-size: 10px;
          }

          .feature-tag {
            padding: 8px 14px;
            font-size: 11px;
          }

          .tag-icon {
            width: 20px;
            height: 20px;
            font-size: 10px;
          }
        }
      `}</style>

      <section className="nutrition-header-section">
        <div className="nutrition-header-container">
          <div className="header-content">
            {/* Left Side - Title and Description */}
            <div className="header-left">
              <span className="header-label">Smart AI That Gets You!</span>
              <h1 className="header-title">
                <span className="text-green">Effortless Nutrition</span>{" "}
                Tracking,
                <br />
                Tailored for You
              </h1>
              <p className="header-description">
                Keep managing calories, protein, and nutrients in a snap—no
                fuss, no guessing.
              </p>
            </div>

            {/* Right Side - Badges */}
            <DataDrivenInsight />
          </div>
        </div>
      </section>
    </>
  );
};

export default NutritionTrackingHeader;
