import './App.css';
import Contacts from './components/Contacts.js';
import Intro from './components/Intro';
import About from './components/About';
import ScrollDown from './components/ScrollDown.js';
import School from './components/School.js';
import Experiences from './components/Experiences.js';
import Skills from './components/Skills.js';
import Accolades from './components/Accolades.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div class='all'>
      <div class='top'>
        <Contacts />
        <Intro />
        <ScrollDown />
      </div>
      <About />
      <School />
      <Experiences />
      <Skills />
      <Accolades />
      <Footer />
    </div>
  );
}

export default App;
