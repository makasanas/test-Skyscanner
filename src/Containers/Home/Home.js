import React, { Component } from "react";
import Intro from './Sections/Intro.js';
import Services from './Sections/Services/Services.js';
import About from './Sections/About/About.js';
import Features from './Sections/Features.js';
import Contact from './Sections/Contact.js';
import GetinTouch from './Sections/GetinTouch.js';
import Maps from './Sections/Maps.js';
import './Home.scss';

export default class home extends Component {
  render() {
    return (
      <div>
          {/* <section className="landingPage"> 
          
          </section> */}
          <Intro />
          <Services/>   
          <About/>
          <Features/>
          <Contact/>
          <GetinTouch/>
          <Maps/>
      </div>
    )
  }   
}
