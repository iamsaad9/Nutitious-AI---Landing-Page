import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <style>{`
        .hero {
          paddingBottom: 60px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .hero-left{
        padding-top: 50px;
        }

        .hero-label {
          color: #666;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .text-green {
          color: #4CAF50;
        }

        .hero-description {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .input-group {
          display: flex;
           position: relative;
          gap: 12px;
          margin-bottom: 24px;
          width: 60%;
        }

        .hero-input {
  flex: 1;
  padding: 16px 60px 16px 20px; 
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  font-size: 15px;
  background: white;
  box-sizing: border-box;
}

        .hero-input:focus {
          outline: none;
          border-color: #4CAF50;
        }

       
.send-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  height: 44px;
  background: #4CAF50;
  border: none;
  border-radius: 70px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}


        .send-btn:hover {
          background: #45a049;
        }

        .tags {
          display: flex;
          gap: 12px;
          margin-top: 100px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 8px 16px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          font-size: 13px;
          color: #666;
        }

        .hero-right {
          position: relative;
        }

        .image-card {
          position: relative;
          width: 100%;
          height:calc(100vh - 100px);
          border-radius: 32px;
          overflow: hidden;
                    background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80') no-repeat center center;
            background-size: cover;
        }

        .report-card {
          position: absolute;
          top: 200px;
          right: -150px;
          background: white;
          padding: 16px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          min-width: 180px;
          z-index: 3;
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .report-header span {
          font-size: 13px;
          font-weight: 600;
        }

        .more-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #999;
        }

        .report-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .report-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .report-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .report-icon.breakfast {
          background: url('https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=500');
          background-size: cover;
        }

        .report-icon.lunch {
          background: url('https://images.unsplash.com/photo-1627309302198-09a50ae1b209?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHVuY2h8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&q=60&w=500');
          background-size: cover;
        }

        .report-icon.dinner {
          background: url('https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170');
          background-size: cover;
        }

        .report-label {
          flex: 1;
          font-size: 13px;
          color: #666;
        }

        .report-value {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .mashed-potato-card {
          position: absolute;
          bottom: 100px;
          left: 20px;
          background: white;
          padding: 12px 16px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 3;
        }

        .potato-icon {
          width: 50px;
          height: 40px;
        }

        .potato-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .potato-name {
          font-size: 13px;
          font-weight: 600;
        }

        .potato-stats {
          display: flex;
          gap: 12px;
        }

        .stat {
          font-size: 11px;
          color: #666;
        }

       

        .doctor-card {
          position: absolute;
          bottom: 20px;
          left: 50%;
          width: 80%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 16px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 3;
          justify-content: space-between;
        }

        .doctor-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGRvY3RvcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=500');
          background-size: cover;
        }

        .doctor-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .doctor-name {
          font-size: 13px;
          font-weight: 600;
          color: #4CAF50;
        }

        .doctor-role {
          font-size: 11px;
          color: #666;
        }

        .arrow-btn {
          width: 36px;
          height: 36px;
          background: #2E7D32;
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .arrow-btn:hover {
          background: #1B5E20;
        }

        .nav-dots {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
        }

        .dot.active {
          background: #4CAF50;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-title {
            font-size: 36px;
          }

          .report-card {
            display: none;
           
          }

          .mashed-potato-card {
            bottom: 80px;
            left: 12px;
            padding: 10px 12px;
          }

          .doctor-card {
            bottom: 12px;
          }
        }
      `}</style>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-left relative">
              <div className="report-card">
                <div className="report-header">
                  <span>Today Report</span>
                  <button className="more-btn">•••</button>
                </div>
                <div className="report-items">
                  <div className="report-item">
                    <div className="report-icon breakfast"></div>
                    <span className="report-label">Breakfast</span>
                    <span className="report-value">280kcal</span>
                  </div>
                  <div className="report-item">
                    <div className="report-icon lunch"></div>
                    <span className="report-label">Lunch</span>
                    <span className="report-value">390kcal</span>
                  </div>
                  <div className="report-item">
                    <div className="report-icon dinner"></div>
                    <span className="report-label">Dinner</span>
                    <span className="report-value">620kcal</span>
                  </div>
                </div>
              </div>
              <p className="hero-label">Nutrition Assistant</p>
              <h1 className="hero-title">
                A Simplified Way
                <br />
                to Start{" "}
                <span className="text-green">
                  Losing
                  <br />
                  Weight.
                </span>
              </h1>
              <p className="hero-description">
                Track your calories and protein intake with Nutrition Bot.
                That&apos;s it...
              </p>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Hi Nutribot..."
                  className="hero-input"
                />
                <button className="send-btn">
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="tags">
                <span className="tag">Nutrition</span>
                <span className="tag">Healthy Food</span>
                <span className="tag">Consultation</span>
                <span className="tag">+32 Topic</span>
              </div>
            </div>

            <div className="hero-right">
              <div className="image-card ">
                <div className="mashed-potato-card">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cellipse cx='25' cy='20' rx='20' ry='15' fill='%23F4D03F'/%3E%3Cellipse cx='25' cy='28' rx='15' ry='10' fill='%23F39C12'/%3E%3C/svg%3E"
                    alt="Mashed Potato"
                    className="potato-icon"
                  />
                  <div className="potato-info">
                    <span className="potato-name">Mashed Potato</span>
                    <div className="potato-stats">
                      <span className="stat">🔥 90 kcal</span>
                      <span className="stat">⏱️ 20 mins</span>
                    </div>
                  </div>
                </div>

                <div className="doctor-card">
                  <div className="flex gap-2">
                    <div className="doctor-avatar"></div>
                    <div className="doctor-info">
                      <span className="doctor-name">Dr. Emily Carter</span>
                      <span className="doctor-role">Nutritionist</span>
                    </div>
                  </div>
                  <button className="arrow-btn">
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="nav-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
