import heroImage from "../assets/hero.jpeg";
import { Link } from "react-router-dom";
import { FaTags, FaUsers, FaLeaf } from "react-icons/fa";


function Home() {
  const scrollToMission = () => {
    const element = document.getElementById("mission");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Giving Back, One Treasure at a Time</h1>
          <p>
            Supporting sustainability and community through second-hand finds.
          </p>
          <div className="hero-buttons">
  <Link to="/donations" className="primary">Donate Items</Link>
  <button className="secondary" onClick={scrollToMission}>Learn About Our Mission</button>
</div>
        </div>
      </div>

      {/* OUR MISSION */}
      <section className="section mission-section" id="mission">
        <h2>Our Mission</h2>
        <p>
          Nostalgic Threads is dedicated to promoting recycling and reusing items to support
          environmental sustainability. We provide affordable goods to the community while
          helping reduce waste and make a positive impact on the planet.
        </p>
      </section>{/* WHY CHOOSE US */}
<section className="why-section">
  <h2>Why Choose Nostalgic Threads</h2>

  <div className="why-grid">
    <div className="why-box">
      <FaTags className="why-icon" />
      <h3>Affordable Finds</h3>
      <p>
        We offer quality second-hand items at prices that make sustainability
        accessible to everyone.
      </p>
    </div>

    <div className="why-box">
      <FaUsers className="why-icon" />
      <h3>Community Driven</h3>
      <p>
        Every donation and purchase supports local families and strengthens
        community connections.
      </p>
    </div>

    <div className="why-box">
      <FaLeaf className="why-icon" />
      <h3>Purposeful Shopping</h3>
      <p>
        Shopping with us means making conscious choices that reduce waste
        and give items a second life.
      </p>
    </div>
  </div>
</section>


      {/* ORGANIZATION & ACHIEVEMENTS */}
      <section className="organization-section">
        <h2>Our Organization</h2>
        <p>
          Nostalgic Threads has been making a real difference by supporting the community 
          and promoting sustainability. Each year, we grow stronger and expand our reach.
        </p>

        <div className="organization-grid">
          <div className="organization-card">
            <img 
              src={require("../assets/last-year-ach.jpeg")} 
              alt="Last year's event" 
            />
          </div>
          <div className="organization-card">
            <h3>Achievements</h3>
            <ul>
              <li>Over 1,000 families served last year</li>
              <li>Collected 10,000+ clothing items for reuse</li>
              <li>Raised awareness on sustainable fashion in local schools</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
