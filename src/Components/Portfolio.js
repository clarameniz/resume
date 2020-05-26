import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projectsHeader = this.props.data.projectsHeader;
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = `${process.env.PUBLIC_URL}/images/portfolio/${projects.image}`;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank" rel="noopener noreferrer">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon"><FontAwesomeIcon icon={faLink} /></div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>{projectsHeader}</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
