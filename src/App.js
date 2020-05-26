import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Waypoint } from 'react-waypoint';
// TODO: Waypoint bottomOffset must be calculated as the section height after load
import init from './utils/init';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {},
      section: 'home'
    };

    ReactGA.initialize('UA-167430634-1');
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount(){
    this.getData();
    this.initializeJS();
  }

  getData(){
    $.ajax({
      url: `${process.env.PUBLIC_URL}/data.json`,
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({ data });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  initializeJS() {
    init.smoothscroll();
    init.setDimensions();
    init.aliveScroll();
  }

  handleSection(section) {
    this.setState({ section });
  }

  render() {
    return (
      <div className="App">
        <Waypoint key={'home'} onEnter={() => this.handleSection('home')} />
        <Header data={this.state.data.main} section={this.state.section} />

        <Waypoint key={'about'} bottomOffset='100px' onEnter={() =>  this.handleSection('about')} />
        <About data={this.state.data.main} />

        <Waypoint key={'portfolio'} bottomOffset='930px' onEnter={() => this.handleSection('portfolio')} />
        <Portfolio data={this.state.data.portfolio} />

        <Waypoint key={'testimonials'} bottomOffset='560px' onEnter={() => this.handleSection('testimonials')} />
        <Testimonials data={this.state.data.testimonials} />

        <Footer data={this.state.data.main} />
      </div>
    );
  }
}

export default App;
