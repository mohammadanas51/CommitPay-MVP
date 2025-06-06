import { useState, useEffect } from 'react';
import './contributions.css'
interface GitHubEvent {
  repo: {
    name: string;
    url: string;
  };
  type: string;
  created_at: string;
}

interface Contribution {
  title: string;
  type: string;
  date: string;
  repoName: string;
  url: string;
}

const Contributions = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchContributions = async (username: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}/events/public`);
      if (!response.ok) throw new Error('Failed to fetch contributions');
      const data: GitHubEvent[] = await response.json();

      const contributionData: Contribution[] = data.map((event) => ({
        title: event.repo.name,
        type: event.type,
        date: new Date(event.created_at).toLocaleDateString(),
        repoName: event.repo.name,
        url: `https://github.com/${event.repo.name}`,
      }));

      setContributions(contributionData);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('maunUser') || '{}');
    if (userData?.login) {
      fetchContributions(userData.login);
    } else {
      setError('User not logged in.');
    }
  }, []);

  if (loading) return <div className="commitpay-loading">Loading...</div>;
  if (error) return <div className="commitpay-error">Error: {error}</div>;

  return (
    <div className="commitpay-contributions">
      <h2 className="commitpay-contributions-heading">My Contributions</h2>
      <ul className="commitpay-contributions-list">
        {contributions.map((contribution, index) => (
          <li key={index} className="commitpay-contributions-item">
            <a
              href={contribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="commitpay-contributions-link"
            >
              {contribution.title} - {contribution.type} on {contribution.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contributions;
