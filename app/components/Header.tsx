import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .header {
          padding: 20px 0;
          background: #FAFFF7;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .logo-icon {
          width: 12px;
          height: 12px;
          background: #4CAF50;
          border-radius: 2px;
        }

        .logo-icon-small {
          width: 8px;
          height: 8px;
          background: #81C784;
          border-radius: 2px;
        }

        .nav {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          color: #666;
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #4CAF50;
        }

        .join-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 24px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .join-btn:hover {
          border-color: #4CAF50;
          color: #4CAF50;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            display: none;
          }

          .nav.nav-open {
            display: flex;
          }

          .join-btn {
            display: none;
          }

          .menu-toggle {
            display: block;
          }
        }
      `}</style>
      <header className="header">
        <div className="nav-header-content">
          <div className="logo">
            <div className="logo-icon"></div>
            <div className="logo-icon-small"></div>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#health-care" className="nav-link">
              Health Care
            </a>
            <a href="#community" className="nav-link">
              Community
            </a>
          </nav>

          <button className="join-btn">
            Join Us <User size={18} />
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
