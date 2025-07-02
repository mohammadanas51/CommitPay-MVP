import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <h1 id="main-heading">
        CommitPay - Find your first paid Open Source Issue
      </h1>

      <h2 id="msg">
        First Open Source Contribution? Make It Count (and Make Some Money).{" "}
      </h2>

      <div id="cta-btn-container">
        <Link to="/Contributor-Pre-Signup">
          <button id="contributor-btn">Start Earning with Open Source </button>
        </Link>

        <Link to="/Maintainer-Pre-Signup">
          <button id="maintainer-btn">Get Reliable Contributors</button>
        </Link>
      </div>

      <section className="problem-section">
        <h2 className="section-heading">Open Source Can Be Overwhelming</h2>
        <p className="section-subheading">
          For beginners, contributing to open source often feels like hitting a
          wall.
        </p>

        <ul className="problem-list">
          <li>🔍 Issues are too complex and poorly documented</li>
          <li>🤯 Repositories assume you're an expert already</li>
          <li>💸 You spend hours contributing… for free</li>
          <li>🧭 No clear guidance or mentorship for newcomers</li>
          <li>🚪 You don’t even know where to start</li>
        </ul>

        <p className="problem-conclusion">
          Sound familiar? You're not alone — and that's exactly why we built
          CommitPay.
        </p>
      </section>

      <section className="solution-section">
        <h2 className="section-heading">CommitPay Makes Open Source Pay Off</h2>
        <p className="section-subheading">
          We remove the guesswork, the complexity, and the unpaid labor — so you
          can focus on learning, building, and earning.
        </p>

        <div className="features-container">
          <div className="feature-box">
            <h3>🧠 Beginner-Friendly Only</h3>
            <p>
              We hand-pick issues that are perfect for junior devs. No advanced
              setups or steep learning curves.
            </p>
          </div>
          <div className="feature-box">
            <h3>💸 Guaranteed Payments</h3>
            <p>
              Every issue has a pre-set bounty. If your PR gets merged, you get
              paid. No “maybe.”
            </p>
          </div>
          <div className="feature-box">
            <h3>📋 Clear Instructions</h3>
            <p>
              Issues are written with context, setup steps, and acceptance
              criteria — like a real-world task.
            </p>
          </div>
          <div className="feature-box">
            <h3>🤝 Trusted Maintainers</h3>
            <p>
              Work with maintainers who genuinely support and reward
              contributors — no ghosting, no exploitation.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-heading">How CommitPay Works</h2>
        <p className="section-subheading">
          From sign-up to payout, we make open source simple (and rewarding).
        </p>

        <div className="steps-container">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create a free account as a contributor or maintainer.</p>
          </div>
          <div className="step">
            <h3>2. Browse Paid Issues</h3>
            <p>
              Explore beginner-friendly open source tasks with guaranteed
              payments.
            </p>
          </div>
          <div className="step">
            <h3>3. Submit Your Pull Request</h3>
            <p>
              Pick an issue, follow the instructions, and submit your PR with
              confidence.
            </p>
          </div>
          <div className="step">
            <h3>4. Get Paid</h3>
            <p>
              Once approved, your contribution is rewarded — no guesswork, no
              waiting.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2 className="section-heading">Simple, Transparent Pricing</h2>
        <p className="section-subheading">
          CommitPay is free for contributors. Maintainers pay only when they
          need more — and never a dollar more.
        </p>
        
        <div className="pricing-cards">
          {/* Free Tier */}
          <div className="pricing-card">
            <h3>Free</h3>
            <p className="price">$0/month</p>
            <ul>
              <li>✅ Post up to 2 issues/month</li>
              <li>✅ 10% commission on payout</li>
              <li>✅ Access to active contributors</li>
            </ul>
            <button className="pricing-btn">Start Free</button>
          </div>

          {/* Starter Plan */}
          <div className="pricing-card highlight">
            <h3>Starter</h3>
            <p className="price">$9/month</p>
            <ul>
              <li>✅ Post up to 10 issues/month</li>
              <li>❌ No commission</li>
              <li>✅ Featured on homepage</li>
            </ul>
            <button className="pricing-btn">Get Starter</button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card">
            <h3>Pro</h3>
            <p className="price">$29/month</p>
            <ul>
              <li>✅ Unlimited issue posting</li>
              <li>❌ No commission</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="pricing-btn">Go Pro</button>
          </div>
        </div>

        <p className="note">* Contributors never pay anything. Ever.</p>
      </section>

      <section className="faq-section">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="section-subheading">
          Got questions? We’ve got answers. Whether you're a contributor or a
          maintainer, here's what you need to know.
        </p>

        <div className="faq-container">
          <div className="faq-item">
            <h3>🧑‍💻 Who can use CommitPay?</h3>
            <p>
              Anyone! If you're a beginner developer looking to contribute and
              earn, or a maintainer who wants help with issues, CommitPay is for
              you.
            </p>
          </div>

          <div className="faq-item">
            <h3>💰 How do contributors get paid?</h3>
            <p>
              Each issue comes with a pre-set payment. Once your pull request is
              accepted and merged, the payment is released to your linked
              account.
            </p>
          </div>

          <div className="faq-item">
            <h3>🧠 What kind of issues are listed?</h3>
            <p>
              We only allow beginner-friendly, well-documented issues that are
              scoped to take a few hours to a couple of days — ideal for new
              contributors.
            </p>
          </div>

          <div className="faq-item">
            <h3>🔒 Is CommitPay safe and legit?</h3>
            <p>
              Yes. All payments are handled securely, and maintainers must
              pre-fund issues to ensure contributors are paid fairly and on
              time.
            </p>
          </div>

          <div className="faq-item">
            <h3>🎯 What if my PR gets rejected?</h3>
            <p>
              If your PR doesn't meet the issue criteria, you’ll receive
              feedback. Only merged PRs are paid, but our goal is to help you
              succeed.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-branding">
            <h3>CommitPay</h3>
            <p>Helping beginner developers earn through open source.</p>
          </div>

          <div className="footer-links">
            <a href="/#how-it-works">How It Works</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#faq">FAQ</a>
            <a href="mailto:contact@commitpay.dev">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/yourrepo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} CommitPay. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default LandingPage;
