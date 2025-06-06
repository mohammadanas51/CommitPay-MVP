import { useState, useEffect } from 'react';
import './earnings.css';

interface Earning {
  id: number;
  title: string;
  repo: string;
  amount: number;
  date: string;
  issueUrl: string;
}

const mockEarnings: Earning[] = [
  {
    id: 1,
    title: 'Fix UI bug in Signup form',
    repo: 'open-source-hub/frontend',
    amount: 30,
    date: '2025-04-10',
    issueUrl: 'https://github.com/open-source-hub/frontend/issues/123',
  },
  {
    id: 2,
    title: 'Add auth middleware',
    repo: 'open-source-hub/backend',
    amount: 50,
    date: '2025-04-13',
    issueUrl: 'https://github.com/open-source-hub/backend/issues/456',
  },
];

const Earnings = () => {
  const [earnings, setEarnings] = useState<Earning[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Simulate fetching earnings data
    setEarnings(mockEarnings);
    const totalAmount = mockEarnings.reduce((acc, curr) => acc + curr.amount, 0);
    setTotal(totalAmount);
  }, []);

  return (
    <div className="commitpay-earnings">
      <h2 className="earnings-heading">Your Earnings</h2>

      <div className="earnings-summary">
        <p>Total Earned: <strong>${total}</strong></p>
        <p>Paid Gigs Completed: <strong>{earnings.length}</strong></p>
        <p>Average Per Gig: <strong>${(total / earnings.length).toFixed(2)}</strong></p>
      </div>

      <ul className="earnings-list">
        {earnings.map((item) => (
          <li key={item.id} className="earnings-item">
            <a href={item.issueUrl} target="_blank" rel="noopener noreferrer" className="earnings-link">
              {item.title}
            </a>
            <p>Repo: {item.repo}</p>
            <p>Amount: <strong>${item.amount}</strong></p>
            <p>Date: {new Date(item.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Earnings;
