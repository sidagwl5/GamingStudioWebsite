import React, { Component } from 'react'
import Section from "../components/Section";
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Technology from "../components/Technology";


export default class MainPage extends Component {
  render() {
    return (

      <div className = "mainpage-main">
         <Section />
         <About />
         <Technology />
         <Contact />

      </div>
    )
  }
}
