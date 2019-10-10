import React, { Component } from 'react'
import { Intro, Packages, Team } from './Sections'
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div>
          <Intro/>
          <Team/>
          <Packages/>
      </div>
    )
  }
}
