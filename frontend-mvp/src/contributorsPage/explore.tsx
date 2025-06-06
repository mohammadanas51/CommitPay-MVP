import { useEffect, useState } from 'react';
import axios from 'axios';
import './explore.css';
import { useNavigate } from "react-router-dom";

type Gig = {
  _id: string;
  projectName: string;
  repoUrl: string;
  description: string;
  bounty: boolean;
  bountyAmount?: string;
  labels: string[];
};

const Explore = () => {
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/issues/all`)
      .then((res) => {
        console.log('Fetched Gigs:', res);
        setGigs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("maunUser");
    navigate("/Contributor-Pre-Signup");
  };
  return (
    <div className="explore-container">
      <h2>Find Paid Beginner-Friendly Gigs</h2>
  
      {loading && <p>Loading gigs...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
  
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
  
      <div className="gig-list">
        {gigs.map((gig) => (
          <div key={gig._id} className="gig-card">
            <h3>
              {gig.projectName}{' '}
              <span style={{ color: '#00e676' }}>
                {gig.bounty ? gig.bountyAmount || 'Bounty Available' : 'No Bounty'}
              </span>
            </h3>
  
            <p>{gig.description}</p>
            <p>
              <strong>Labels:</strong>{' '}
              {gig.labels.length > 0 ? (
                gig.labels.map((label, index) => (
                  <span key={index} className="label">{label}</span>
                ))
              ) : (
                <span className="label">None</span>
              )}
            </p>
            <a href={gig.repoUrl} target="_blank" rel="noopener noreferrer">
              View Issue
            </a>
            <hr style={{ borderColor: '#333' }} />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Explore;
