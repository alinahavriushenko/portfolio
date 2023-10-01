import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import data from './projects-data';




function App() {
  const projects = data.map(item => {
    return (
      <ProjectCard
      key={item.id}
      {...item} />
    )}
    )
  return (
    <div className="App">
      <Header />
      <About id='about'/>
      <section id='projects'>
        <h2>My Projects 🗂️</h2>
        {projects}
      </section>
      <Contact id='connect'/>
    </div>
  );
}

export default App;
