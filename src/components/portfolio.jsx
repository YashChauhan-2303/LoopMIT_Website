// Portfolio.jsx
import React from "react";
import TeamMember from "./TeamMember"; // Import the new component
import Animation1 from "./animation"

// Import stock images
import stock from "../img/image1.jpg";
import stock1 from "../img/image22.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    // Team members data array
    const teamMembers = [
      {
        id: 1,
        image: stock,
        name: "Team Member 1",
        skills: "HTML5 CSS3 Bootstrap ReactJS"
      },
      {
        id: 2,
        image: stock1,
        name: "Team Member 2",
        skills: "HTML5 CSS3 Bootstrap Webpack SmoothScrolling VanillaJS"
      },
      {
        id: 3,
        image: stock,
        name: "Team Member 3",
        skills: "HTML5 CSS3 Bootstrap Webpack ReactJS"
      },
      {
        id: 4,
        image: stock,
        name: "Team Member 4",
        skills: "Bootstrap ReactJS GoogleAPI"
      },
      {
        id: 5,
        image: stock,
        name: "Team Member 5",
        skills: "MERN"
      },
      {
        id: 6,
        image: stock,
        name: "Team Member 6",
        skills: "HTML5 CSS3 Bootstrap MERN"
      }
    ];

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
      <div style={{ overflowX: 'hidden' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Meet the Team</h3>
                <p className="subtitle-a">
                  Meet the passionate minds dedicated to transforming the Hyperloop concept into reality.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
      <Animation1 direction="right" delay={0.2}>
          <div className="row">
            {teamMembers.map(member => (
              <TeamMember 
                key={member.id}
                image={member.image}
                name={member.name}
                skills={member.skills}
              />
            ))}
          </div>
        </Animation1>
        </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;