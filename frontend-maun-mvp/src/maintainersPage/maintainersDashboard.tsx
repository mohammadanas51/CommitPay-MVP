import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './maintainersDashboard.css';
import axios from 'axios';

// Define the Issue interface
interface Issue {
  _id: string;
  projectName: string;   
  repoUrl: string;       
  description: string;
  bounty: boolean;      
  bountyAmount: string;  
}

const MaintainersDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use the Issue type for the state instead of 'any'
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    // Check if the user is coming from the redirect URL and has user data
    const urlParams = new URLSearchParams(location.search);
    const userData = urlParams.get('user');

    if (userData) {
      // Parse the user data and store it in localStorage
      const parsedUser = JSON.parse(decodeURIComponent(userData));
      localStorage.setItem('maunUser', JSON.stringify(parsedUser));

      // Optionally, redirect to another page after saving user data
      navigate('/maintainers-dashboard', { replace: true });
    }

    // Fetch issues from the backend
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/issues/all');
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, [navigate, location]);

  const handleLogout = () => {
    // Clear any auth data
    localStorage.removeItem('token');
    localStorage.removeItem('maunUser'); // Remove user from localStorage

    // Redirect to the login page
    navigate('/Maintainer-Pre-Signup');
  };

  return (
    <div className="maintainers-dashboard">
      <div className="dashboard-header">
        <h2>Maintainers Dashboard</h2>
        <div className="dashboard-actions">
          <button
            className="post-issue-btn"
            onClick={() => navigate("/onboarding")}
          >
            Post an Issue
          </button>
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="issues-list">
        {issues.map((issue) => (
          <div key={issue._id} className="issue-card">
            <h3>{issue.projectName}</h3>
            <p><strong>Repository URL:</strong> <a href={issue.repoUrl} target="_blank" rel="noopener noreferrer">{issue.repoUrl}</a></p>
            <p><strong>Description:</strong> {issue.description}</p>
            <p><strong>Bounty:</strong> {issue.bounty ? issue.bountyAmount : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintainersDashboard;
