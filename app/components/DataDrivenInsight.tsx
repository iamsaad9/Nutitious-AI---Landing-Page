import React from "react";
import { Sparkles } from "lucide-react";

const DataDrivenInsight: React.FC = () => {
  return (
    <section className="data-driven-container">
      <style>
        {`
            .data-driven-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

/* ---------- Header ---------- */
.data-header-wrapper {
width: 100%;
  display: flex;
  justify-content: start;
        }
.data-header {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
  min-width: 220px;
}

.icon-circle {
  background-color: #2e7d32;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.data-header h2 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
}

/* ---------- Cards ---------- */
.data-cards {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  flex: 2;
}

.data-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 14px;
  background: #f9fdf9;
  transition: all 0.3s ease;
}

.data-card:hover {
  background: #eef8ef;
}


.data-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ---------- Circle Icons ---------- */
.circle-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.breakfast {
  background-color: #fdd835;
}

.lunch {
  background-color: #ffb74d;
}


/* ---------- Text ---------- */
.label {
  font-size: 0.95rem;
  color: #333;
}

.value {
  font-size: 0.95rem;
  color: #111;
  font-weight: 500;
}

/* ---------- Responsive ---------- */
@media (max-width: 768px) {
  .data-driven-container {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    width: 100%;
  }

  .data-cards {
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    flex-direction: column;
  }

  .data-card {
    padding: 0.8rem 1.2rem;
    gap: 1rem;
  }

  .data-header h2 {
    font-size: 1.2rem;
  }
}

            `}
      </style>
      <div className="data-header-wrapper">
        <div className="data-header">
          <div className="icon-circle">
            <Sparkles size={20} color="white" />
          </div>
          <h2>Data-Driven Insights</h2>
        </div>
      </div>

      <div className="data-cards">
        {/* Card 1 */}
        <div className="data-card ">
          <div className="data-row">
            <span className="circle-icon breakfast">B</span>
            <p className="label">Breakfast</p>
          </div>
          <div className="data-row">
            <span className="circle-icon cal">🔥</span>
            <p className="value">220</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="data-card">
          <div className="data-row">
            <span className="circle-icon lunch">L</span>
            <p className="label">Lunch</p>
          </div>
          <div className="data-row">
            <span className="circle-icon cal">🔥</span>
            <p className="value">450</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDrivenInsight;
