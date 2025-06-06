import './App.css'
import LandingPage from './landingPage/landingPage'
import ContributorsPage from './contributorsPage/contributorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './contributorsPage/explore';
import MaintainerPreSignupPage from './maintainersPage/maintainerPreSignupPage';
import MaintainerOnboardingForm from './maintainersPage/onBoarding';
import MaintainersDashboard from './maintainersPage/maintainersDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contributor-Pre-Signup" element={<ContributorsPage />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/Maintainer-Pre-Signup" element={<MaintainerPreSignupPage/>} />
        <Route path="/onboarding" element={<MaintainerOnboardingForm/>} />
        <Route path="/maintainers-dashboard" element={<MaintainersDashboard />} />
      </Routes>
    </Router>
  );
}

export default App
