import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <About id='about'/>
    </div>
  );
}

export default App;
