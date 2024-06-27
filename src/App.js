import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <img src="images/logo1.png" alt="OneEarth Logo" className="masthead-logo" />
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="/products">Products</a>
              <a className="nav-link" href="/vendors">Vendors</a>
              <a className="nav-link" href="/contact">Contact Us</a>
              <a className="nav-link" href="/about-us">About Us</a>
            </nav>
          </div>
        </header>

        <main role="main" className="inner cover">
          <h1 className="cover-heading">Welcome to OneEarth AgriMarket</h1>
          <img src="images/download.jpg" alt="Fresh Produce" className="cover-image" />
          <p className="lead">OneEarth is your one-stop destination for buying and selling fresh, organic produce directly from trusted vendors. Explore a wide range of products and connect with local farmers to get the best deals on fresh produce.</p>
          <p className="lead">
            <a href="/learn-more" className="btn btn-lg btn-secondary">Learn More</a>
          </p>

          <section className="mission-statement">
            <h2 className="section-heading">Our Mission</h2>
            <p>At OneEarth, we aim to:</p>
            <ul className="mission-list">
              <li>Provide a platform that connects small-scale organic and sustainable farmers directly with health-conscious consumers.</li>
              <li>Promote the health benefits and environmental impact of consuming organic and sustainable products.</li>
              <li>Ensure transparency and traceability of organic and sustainable products from farm to table.</li>
            </ul>
          </section>

          <section className="user-form">
            <h2 className="section-heading">Market Your Produce</h2>
            <form action="#" method="post">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="produce">Produce:</label>
              <input type="text" id="produce" name="produce" required />

              <label htmlFor="video">Video Link:</label>
              <input type="url" id="video" name="video" placeholder="https://example.com" required />

              <button type="submit" className="btn btn-lg btn-secondary">Submit</button>
            </form>
          </section>
        </main>
      </div>

      <div>
        <h1 className="cover-heading">About Us</h1>
        <p className="lead">Meet the dedicated team behind OneEarth, working tirelessly to connect farmers and consumers.</p>

        <div className="team-member">
          <h2>Thabang L Matlou</h2>
          <p className="role">CEO & Founder</p>
          <p className="bio">Thabang has a passion for sustainable agriculture and has been leading OneEarth since its inception.</p>
        </div>

        <div className="team-member">
          <h2>Zuri Ngqwaru</h2>
          <p className="role">CTO</p>
          <p className="bio">Zuri is the tech genius behind OneEarth's platform, ensuring a seamless user experience.</p>
        </div>
      </div>

      <footer className="footer mt-auto">
        <div className="inner">
          <nav className="nav justify-content-center">
            <a href="https://www.facebook.com" className="nav-link">
              <img src="images/facebook-icon.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.twitter.com" className="nav-link">
              <img src="images/twitter-icon.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" className="nav-link">
              <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
