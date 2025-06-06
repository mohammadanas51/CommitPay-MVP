import './maintainerPreSignupPage.css';
import { NavLink } from 'react-router-dom';

const MaintainerPreSignupPage = () => {
  const handleGitHubLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/github?role=maintainer`;

  };

  return (
    <div className="maintainer-page-container">
      <h1 id="contributor-heading">Need reliable contributors for your open-source project?</h1>

      <div className="btns">
        <button id="login-btn" onClick={handleGitHubLogin}>
          Continue with GitHub
        </button>

        <NavLink to={"/"}>
          <button id="go-back-to-home-page">
            Go back to home page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MaintainerPreSignupPage;
