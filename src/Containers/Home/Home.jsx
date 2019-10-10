import React, { Component } from "react";
import { Intro, Services, About, Features, Contact, GetinTouch, Maps } from './Sections';
import './Home.scss';

export default class home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Services />
        <About />
        <Features />
        <Contact />
        <GetinTouch />
        <Maps />
      </div>
    )
  }
}
