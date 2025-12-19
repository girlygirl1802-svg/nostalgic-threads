import storeImage from "../assets/im_photo.jpeg";


function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Nostalgic Threads</h1>
        <p>
          A community-focused thrift store dedicated to sustainability,
          affordability, and meaningful impact.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="about-story">
        <div className="about-story-text">
          <h2>Our Story</h2>
          <p>
            Nostalgic Threads was created with the belief that gently used items
            deserve a second life. By encouraging reuse, we help reduce waste
            while making quality items accessible to everyone.
          </p>
          <p>
            Every donation and purchase supports a more sustainable future and
            strengthens our local community.
          </p>
        </div>

        <div className="about-story-image">
          <img src={storeImage} alt="Our store and community" />
        </div>
      </section>

      {/* CLOSING */}
      <section className="about-closing">
        <p>
          At Nostalgic Threads, every item tells a story — and together,
          we’re building a future that’s thoughtful, inclusive, and sustainable.
        </p>
      </section>

    </main>
  );
}

export default About;
