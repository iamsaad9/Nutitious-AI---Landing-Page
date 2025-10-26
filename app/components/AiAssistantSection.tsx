import React from "react";
import { Sparkles, MessageSquare } from "lucide-react";
import DataDrivenInsight from "./DataDrivenInsight";

const AIAssistantSection = () => {
  return (
    <>
      <style>{`
        .ai-assistant-section {
          padding: 80px 0;
          background: #FAFFF7;
          display: flex;
        }

        .ai-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Side - Image with Chart */
        .ai-image-wrapper {
          position: relative;
          height:100%;
        }

        .main-image {
          width: 100%;
          border-radius: 32px;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #FFE0B2 0%, #FFCC80 100%);
          aspect-ratio: 4/5;
          position: relative;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1625631980722-b728f9cf1036?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500')
        }

        .chart-overlay {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.15);
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .chart-title {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .chart-period {
          font-size: 11px;
          color: #666;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .chart-bars-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 140px;
          gap: 8px;
          margin-bottom: 12px;
        }

        .chart-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .bar-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          width: 100%;
          justify-content: center;
          height: 100%;
        }

        .bar {
          width: 16px;
          border-radius: 6px 6px 0 0;
        }

        .bar.yellow {
          background: linear-gradient(to top, #FDD835 0%, #FFEB3B 100%);
        }

        .bar.orange {
          background: linear-gradient(to top, #FB8C00 0%, #FFA726 100%);
        }

        .bar.red {
          background: linear-gradient(to top, #E53935 0%, #EF5350 100%);
        }

        .bar.purple {
          background: linear-gradient(to top, #8E24AA 0%, #AB47BC 100%);
        }

        .bar-label {
          font-size: 10px;
          color: #999;
          margin-top: 8px;
        }

        .chart-legend {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #666;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-dot.yellow { background: #FDD835; }
        .legend-dot.orange { background: #FB8C00; }
        .legend-dot.red { background: #E53935; }
        .legend-dot.purple { background: #8E24AA; }

        .floating-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4CAF50;
        }

        /* Right Side - Content */
        .ai-content {
          padding-left: 20px;
        }

        .ai-label {
          color: #666;
          font-size: 14px;
          margin-bottom: 16px;
          display: block;
        }

        .ai-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #1a1a1a;
        }

        .ai-description {
          color: #666;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 40px;
        }


        .feature-badges {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }

        .feature-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 24px;
          font-size: 13px;
          color: #1a1a1a;
          font-weight: 500;
        }

        .ai-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ai-feature-item {
          background: #F5F5F5;
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s;
          cursor: pointer;
        }

        .ai-feature-item:hover {
          background: #EEEEEE;
          transform: translateX(4px);
        }

        .feature-item-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .feature-text h4 {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 4px;
        }

        .feature-text p {
          font-size: 13px;
          color: #666;
        }

        .feature-arrow {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        @media (max-width: 968px) {
          .ai-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ai-content {
            padding-left: 0;
          }

          .ai-title {
            font-size: 36px;
          }

          .chart-overlay {
            width: 90%;
            padding: 16px;
          }

          .chart-bars-container {
            height: 120px;
          }
        }

        @media (max-width: 576px) {
          .ai-assistant-section {
            padding: 60px 0;
          }

          .ai-title {
            font-size: 28px;
          }

          .feature-badges {
            flex-wrap: wrap;
          }

          .ai-feature-item {
            padding: 16px 20px;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
          }

          .chart-overlay {
            bottom: 16px;
            padding: 12px;
          }

          .bar {
            width: 12px;
          }

          .floating-badge {
            top: 16px;
            left: 16px;
            padding: 6px 12px;
            font-size: 10px;
          }
        }
      `}</style>

      <section className="ai-assistant-section">
        <div className="ai-container">
          <div className="ai-grid">
            {/* Left Side - Image */}
            <div className="ai-image-wrapper">
              <div className="main-image">
                <div className="image-placeholder"></div>
                <div className="floating-badge">
                  <div className="badge-dot"></div>
                  On Going
                </div>
              </div>
              <div className="chart-overlay">
                <div className="chart-header">
                  <span className="chart-title">Calories This Week</span>
                  <span className="chart-period">● Last 7 days</span>
                </div>
                <div className="chart-bars-container">
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div
                        className="bar yellow"
                        style={{ height: "45%" }}
                      ></div>
                      <div
                        className="bar orange"
                        style={{ height: "60%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Mon</div>
                  </div>
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div
                        className="bar yellow"
                        style={{ height: "70%" }}
                      ></div>
                      <div
                        className="bar orange"
                        style={{ height: "55%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Tue</div>
                  </div>
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div
                        className="bar yellow"
                        style={{ height: "50%" }}
                      ></div>
                      <div
                        className="bar orange"
                        style={{ height: "65%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Wed</div>
                  </div>
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div
                        className="bar yellow"
                        style={{ height: "80%" }}
                      ></div>
                      <div
                        className="bar orange"
                        style={{ height: "75%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Thu</div>
                  </div>
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div
                        className="bar yellow"
                        style={{ height: "55%" }}
                      ></div>
                      <div
                        className="bar orange"
                        style={{ height: "70%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Fri</div>
                  </div>
                  <div className="chart-bar-group">
                    <div className="bar-wrapper">
                      <div className="bar red" style={{ height: "65%" }}></div>
                      <div
                        className="bar purple"
                        style={{ height: "50%" }}
                      ></div>
                    </div>
                    <div className="bar-label">Sat</div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <div className="legend-dot yellow"></div>
                    <span>Breakfast</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot orange"></div>
                    <span>Lunch</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot red"></div>
                    <span>Dinner</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot purple"></div>
                    <span>Snacks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="ai-content">
              <span className="ai-label">Smart AI Nutribot</span>
              <h2 className="ai-title">
                Not Harder Your AI-Powered Nutrition Assistant
              </h2>
              <p className="ai-description">
                Effortlessly reach your health goals with AI that simplifies
                tracking and meal planning, allowing you to focus on progress.
              </p>

              <div className="feature-card">
                <DataDrivenInsight />
                <div className="feature-badges">
                  <div className="feature-badge">
                    <Sparkles size={16} />
                    Deep-Driven Insights
                  </div>
                  <div className="feature-badge">
                    <MessageSquare size={16} />
                    Conversate
                  </div>
                </div>
              </div>

              <div className="ai-features">
                <div className="ai-feature-item">
                  <div className="feature-item-content">
                    <div className="feature-icon">
                      <Sparkles size={24} />
                    </div>
                    <div className="feature-text">
                      <h4>AI Precision Counting</h4>
                      <p>Accurate calorie and nutrient tracking</p>
                    </div>
                  </div>
                  <div className="feature-arrow">→</div>
                </div>

                <div className="ai-feature-item">
                  <div className="feature-item-content">
                    <div className="feature-icon">
                      <MessageSquare size={24} />
                    </div>
                    <div className="feature-text">
                      <h4>Conversate Support</h4>
                      <p>Chat with AI for instant guidance</p>
                    </div>
                  </div>
                  <div className="feature-arrow">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAssistantSection;
