import './contributorPage.css'
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 

const ContributorsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userData = urlParams.get("user");

    if (userData) {
      const parsedUser = JSON.parse(decodeURIComponent(userData));
      localStorage.setItem("maunUser", JSON.stringify(parsedUser));
      
      // Optionally remove user from URL and redirect to main dashboard
      navigate("/explore", { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/github?role=contributor`;
  };
  
  return (
    <>
      <h1 id="contributor-heading">Make your first $ with Open Source</h1>

      <div className="btns">
        <button id="login-btn" onClick={handleLogin}>
          Continue with GitHub
        </button>

        <NavLink to={"/"}>
        <button id='go-back-to-home-page'>
          Go back to home page
          </button>
          </NavLink>
      </div>
    </>
  );
};

export default ContributorsPage;
