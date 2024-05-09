import Layout from "./layout/Layout";
import "./App.scss";

function App() {
  return (
    <Layout>
      <section id="hero">
        <div className="container">Hero</div>
      </section>
      <section id="about">About</section>
      <section id="work">Work</section>
      <section id="skills">Skills</section>
      <section id="testimonials">Testimonials</section>
    </Layout>
  );
}

export default App;
