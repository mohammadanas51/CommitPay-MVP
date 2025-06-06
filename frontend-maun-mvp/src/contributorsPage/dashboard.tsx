import "./dashboard.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userData = JSON.parse(localStorage.getItem("maunUser") || "{}");

  // Mock data (directly used without setter)
  const mockData = {
    contributions: 25,
    earnings: 1500,
    profileViews: 350,
  };

  useEffect(() => {
    if (!userData || !userData.login) {
      navigate("/Contributor-Pre-Signup");
    }
  }, [userData, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("maunUser");
    navigate("/Contributor-Pre-Signup");
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 id="welcome-heading">Welcome, {userData.login} 👋</h1>
        <div className="nav-right">
          <img
            id="user-avatar"
            src={userData.avatar_url}
            alt="avatar"
            width="60"
          />
          <button id="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="main">
        {isSidebarOpen && (
          <aside className="sidebar">
            <ul>
              <li>
                <NavLink
                  to="/explore"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  🏁 Explore Paid Gigs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contributions"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  📂 My Contributions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/earnings"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  💰 Earnings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  👤 Profile
                </NavLink>
              </li>
            </ul>
          </aside>
        )}

        <section className="content">
          <button
            className="toggle-sidebar"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Hide Menu" : "Show Menu"}
          </button>

          <h2>Dashboard Overview</h2>
          <div className="dashboard-cards">
            <div className="card">
              <h3>Contributions</h3>
              <p>{mockData.contributions}</p>
            </div>
            <div className="card">
              <h3>Earnings</h3>
              <p>${mockData.earnings}</p>
            </div>
            <div className="card">
              <h3>Profile Views</h3>
              <p>{mockData.profileViews}</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2025 CommitPay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
