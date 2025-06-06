import './maintainerOnboardingForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MaintainerOnboardingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: '',
    repoUrl: '',
    issueDescription: '',
    wantsBounty: 'no',
    bountyAmount: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newIssue = {
      projectName: formData.projectName,
      repoUrl: formData.repoUrl,
      description: formData.issueDescription,
      bounty: formData.wantsBounty === 'yes', // Convert to Boolean
      bountyAmount: formData.wantsBounty === 'yes' ? formData.bountyAmount : '', // Send bountyAmount only if bounty is 'yes'
    };

    try {
      // Send the data to the backend to create the issue
      await axios.post('http://localhost:5000/issues/create', newIssue);
      navigate('/maintainers-dashboard');
    } catch (error) {
      console.error('Error submitting issue:', error);
    }
  };

  return (
    <div className="maintainer-onboarding">
      <h2 id="onboarding-msg">Maintainer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="repoUrl"
          placeholder="GitHub Issue URL"
          value={formData.repoUrl}
          onChange={handleChange}
          required
        />
        <textarea
          name="issueDescription"
          placeholder="Description of the Issue"
          value={formData.issueDescription}
          onChange={handleChange}
          required
        />

        <label htmlFor="wantsBounty">Bounty:</label>
        <select name="wantsBounty" value={formData.wantsBounty} onChange={handleChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        {formData.wantsBounty === 'yes' && (
          <input
            type="text"
            name="bountyAmount"
            placeholder="Enter the Bounty Amount (e.g. $50)"
            value={formData.bountyAmount}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default MaintainerOnboardingForm;
