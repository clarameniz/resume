import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {
    if(this.props.data){
      var profilepic= `${process.env.PUBLIC_URL}/images/${this.props.data.image}`;
      var biointro = this.props.data.biointro;
      var biodesc = this.props.data.biodesc;
      var bioend = this.props.data.bioend;
      var bioheader = this.props.data.bioheader;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Manuel Duque" />
          </div>
          <div className="nine columns main-col">
            <h2>{bioheader}</h2>
            <p>{biointro}</p>
            <p>{biodesc}</p>
            <p>{bioend}</p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faDownload} /> Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
