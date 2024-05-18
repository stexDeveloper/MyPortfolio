import Layout from "./layout/Layout";
import "./App.scss";
import AboutIllustration from "./assets/icons/AboutIllustration";
import { useState } from "react";

const cards = [
  {
    date: "octobar 2024",
    title: "Weather App",
    category: "Web App",
    technology: ["React.js", "Wheater API", "SASS", "Figma"],
  },

  {
    date: "january 2025",
    title: "To Do App",
    category: "Web App",
    technology: ["React.js", "Mongo DB", "Node.js", "SASS", "Figma"],
  },

  {
    date: "jun 2025",
    title: "Agency Website",
    category: "Web Site",
    technology: ["React.js", "SASS", "Figma"],
  },

  {
    date: "september 2025",
    title: "Mobile Shop",
    category: "Web Shop",
    technology: ["React.js", "MySql", "Node.js", "TailwindCSS", "Figma"],
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategory = [...new Set(cards.map((card) => card.category))];

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

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
      <section id="work">
        <div className="container">
          <div className="heading">
            <div className="badge">Work</div>
            <div className="title">
              <h2>Dig In To My Projects</h2>
            </div>
          </div>
          <div className="filter-select">
            <select
              name="filter"
              id="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              {uniqueCategory.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="work-carousel">
            <div className="wrapper">
              <div className="carousel">
                {filteredCards.map((card, i) => {
                  return (
                    <div key={i} className="carousel-card">
                      <div className="card-caption">
                        <span className="date">{card.date}</span>
                        <h3>{card.title}</h3>
                        <span className="technology">
                          <small>{card.technology}</small>
                        </span>
                      </div>
                      <div className="action-buttons">
                        <button className="first">View Project</button>
                        <button className="second">View Source Code</button>
                      </div>
                      <img
                        className="carousel-img"
                        src="/weather-app.png"
                        alt="app"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="carousel-buttons">
              <button className="prev">&#10094;</button>
              <button className="next">&#10095;</button>
            </div>
            <div className="carousel-indicator">
              <div className="progres-bar"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">Skills</section>
      <section id="testimonials">Testimonials</section>
    </Layout>
  );
}

export default App;
