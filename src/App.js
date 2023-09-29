import './App.css';
import About from './components/About';
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
        {projects}
      </section>
    </div>
  );
}

export default App;
