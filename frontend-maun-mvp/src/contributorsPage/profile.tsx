import { useEffect, useState } from "react";
import "./profile.css";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  html_url: string;
}

const Profile = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const username = JSON.parse(localStorage.getItem("maunUser") || "{}").login;

  useEffect(() => {
    if (!username) {
      setError("No username found in local storage.");
      setLoading(false);
      return;
    }

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user profile");
        return res.json();
      })
      .then((data: GitHubUser) => {
        setUser(data);
        setError("");
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      })
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) return <div className="profile-container">Loading...</div>;
  if (error)
    return <div className="profile-container">Error: {error}</div>;

  if (!user) return null;

  return (
    <div className="profile-container">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name || user.login}</h2>
      <p className="profile-bio">{user.bio}</p>
      <p className="profile-location">
        <strong>Location:</strong> {user.location || "Not specified"}
      </p>
      {user.blog && (
        <p className="profile-blog">
          <strong>Website:</strong>{" "}
          <a href={user.blog} target="_blank" rel="noopener noreferrer">
            {user.blog}
          </a>
        </p>
      )}
      <p className="profile-link">
        <strong>GitHub:</strong>{" "}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.html_url}
        </a>
      </p>
    </div>
  );
};

export default Profile;
