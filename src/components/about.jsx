import React from "react";
import Pod from '../img/pod.jpeg'
import Animation1 from "./animation"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "Founded in 2019, Loop MIT is the official Hyperloop Student Project Team of MIT, Manipal. Comprising a dynamic group of passionate and skilled students, we are committed to revolutionizing transportation by contributing to the development of Hyperloop, the fifth mode of transportation. With a strong emphasis on sustainability, speed, and safety, we strive to design and innovate high-speed, energy-efficient mobility solutions that push the boundaries of modern engineering. Our team is dedicated to pioneering advancements in magnetic levitation, vacuum tube technology, and aerodynamic optimization to make futuristic transportation a reality."
        },
        {
          id: "second-p-about",
          content:
            "Our commitment and technical prowess have earned us recognition at prestigious international competitions. In both 2022 and 2023, we successfully cleared the first rounds of the highly competitive European Hyperloop Week (EHW), where teams from across the globe showcase cutting-edge Hyperloop technology. These achievements reflect our team's dedication to research, innovation, and excellence in Hyperloop development. Competing on a global stage has provided us with invaluable experience, helping us refine our designs and push technological boundaries."
        },
        {
          id: "third-p-about",
          content:
            "A major milestone in our journey came in 2025, when we successfully completed our first prototype and participated in the GHC competition, held at IIT Madras in February 2025. Our hard work and innovation were recognized as we won the Best Demonstration Award and the Best Mechanical Award, further solidifying our position as one of India's leading student-led Hyperloop research teams. With each step forward, we continue to challenge the limits of engineering and technology, striving to create a more sustainable and efficient future for transportation."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div style={{ overflowX: 'hidden' }}>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="box-shadow-full about-box">
                    <div className="title-box-2">
                      <h5 className="title-center">About Us</h5>
                    </div>
          <Animation1 direction="right" delay={0.2}>
                    <div className="row about-content-row">
                      <div className="col-md-6 about-text-col">
                        <div className="about-me pt-4 pt-md-0">
                          {this.state.about_me.map(content => {
                            return (
                              <p className="lead about-paragraph" key={content.id}>
                                {content.content}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-md-6 about-image-col">
                        <div className="pod-image-container">
                          <img src={Pod} alt="pod photo" className="pod-image responsive-image" />
                        </div>
                      </div>
                    </div>
          </Animation1>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default About;