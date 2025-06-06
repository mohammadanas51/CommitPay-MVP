import { Link } from 'react-router-dom';
import './landingPage.css';

const LandingPage = () => {
    return(
        <>
        <h1 id='main-heading'>CommitPay - Find your first paid Open Source Issue</h1> 

        <h2 id='msg'>First Open Source Contribution? Make It Count (and Make Some Money). </h2>

        <div id="cta-btn-container">
            <Link to="/Contributor-Pre-Signup">
                <button id = "contributor-btn">Start Earning with Open Source </button>
             </Link>
            
            <Link to = "/Maintainer-Pre-Signup"> 
                <button id = "maintainer-btn">Get Reliable Contributors</button>
            </Link>
            
        </div>
        </>
    )
}

export default LandingPage ; 