import Layout from "./layout/Layout";
import "./App.scss";
import AboutIllustration from "./assets/icons/AboutIllustration";

function App() {
  return (
    <Layout>
      <section id="hero">
        <div className="code-deco">
          <img src="/code_deco.png" alt="react code picture" />
        </div>
        <div className="container">
          <div className="heading">
            <h1>Web Site Portfolio for Web Development</h1>
          </div>
          <div className="action-buttons">
            <button className="first">My Portfolio</button>
            <button className="second">Download CV</button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="wrapper">
            <div className="illustration">
              <AboutIllustration />
            </div>
            <div className="about-text">
              <div className="badge">About</div>
              <div className="text">
                <h2>Web Development</h2>
                <p>
                  I am Kilian, a passionate freelancer from Hamburg, Germany and
                  the founder of LOKKEE STUDIOS, bringing you web development
                  and design from the future. My expertise is developing
                  next-level websites and web applications including full
                  frontend design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work">Work</section>
      <section id="skills">Skills</section>
      <section id="testimonials">Testimonials</section>
    </Layout>
  );
}

export default App;
