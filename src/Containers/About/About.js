import React, { Component } from 'react'
import Intro from "./Sections/Intro";
import Packages from "./Sections/Packages";
import Team from "./Sections/Team/Team";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div>
          <Intro/>
          <Team/>
          <Packages/>
        {/* <section className="landing-about"> */}
        {/* </section>
        <section>
          <Team></Team>
        </section>
        <section>
          <Packages></Packages>
        </section> */}
      </div>
    )
  }
}
