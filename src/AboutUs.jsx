
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <p className="about-tag">OUR STORY</p>

        <h1>More Than Food, <span>It's An Experience.</span></h1>

        <p>
          At FOODIE, we believe every meal should be memorable.
          Our passion is bringing people together through delicious
          food, fresh ingredients and exceptional service.
        </p>

      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            To deliver high-quality food with amazing taste
            and create memorable dining experiences.
          </p>
        </div>

        <div className="about-card">
          <h2>🌟 Our Vision</h2>
          <p>
            To become a trusted destination for food lovers
            through quality, innovation and customer satisfaction.
          </p>
        </div>

        <div className="about-card">
          <h2>❤️ Our Values</h2>
          <p>
            Freshness, quality, hospitality and passion
            are the values that define everything we do.
          </p>
        </div>

      </section>

      <section className="contact-section">

        <h2>Let's Connect!</h2>

        <p>Have questions or feedback? We'd love to hear from you.</p>

        <a href="mailto:hello@foodie.com">
          Contact Us
        </a>

      </section>

    </div>
  );
}

export default AboutUs;
