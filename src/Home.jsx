
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="tagline">WELCOME TO FOODIE</p>

          <h1>
            Good Food.
            <span> Great Mood.</span>
          </h1>

          <p className="hero-description">
            Experience the perfect blend of taste, freshness
            and quality. Discover delicious food made with love.
          </p>

          <div className="hero-buttons">
            <a href="/veg" className="primary-btn">
              Explore Veg
            </a>

            <a href="/nonveg" className="secondary-btn">
              Explore Non-Veg
            </a>
          </div>

        </div>

      </section>

      <section className="features">

        <h2>Why Choose FOODIE?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🥗 Fresh Ingredients</h3>
            <p>Fresh ingredients carefully selected for every dish.</p>
          </div>

          <div className="feature-card">
            <h3>👨‍🍳 Expert Chefs</h3>
            <p>Delicious meals prepared by passionate chefs.</p>
          </div>

          <div className="feature-card">
            <h3>⭐ Premium Quality</h3>
            <p>Quality, taste and satisfaction in every bite.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
