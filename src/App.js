
import './App.css';
import Education from './components/Education/Education';

import Experience from './components/Experience/Experience';
import Hero from './components/Hero';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio';
import { FAKE_DB } from './fakeDB/fakeDB';
import Footer from './components/Footer/Footer';
import React from 'react';


const {hero, curriculumSections, portfolio} = FAKE_DB
 


function App() {


  return (
    <div className="App">
    <NavBar/>
    <Hero hero={hero} />
  
    <Education  curriculumSections={curriculumSections}/>
    <Experience curriculumSections={curriculumSections.experience}/>
    <Portfolio portfolio={portfolio}/>
    <Footer/>
    
    </div>
  );
}

export default App;
