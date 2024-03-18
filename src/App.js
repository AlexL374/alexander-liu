import { useState } from 'react';
import Contacts from './components/Contacts.js';
import Intro from './components/Intro';
import About from './components/About';
import ScrollDown from './components/ScrollDown.js';
import School from './components/School.js';
import Experiences from './components/Experiences.js';
import Skills from './components/Skills.js';
import Accolades from './components/Accolades.js';
import Footer from './components/Footer.js';
import Canvas from './components/Canvas.js';
import Dialog from './components/Dialog.js';
import './App.css';

function App() {

	const [current, setCurrent] = useState('canvas');

  	return (
    /*<div class='all'>
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
    </div>*/
    	<>
			{current == 'canvas' ? 
			<div className='all-outer'>
				<Canvas />
				<div className='contain-dialog'>
					<Dialog />
				</div>
			</div>
			: 
			<>
				<div></div>
			</>}
   		</>
  	);
}

export default App;
