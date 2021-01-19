import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {

      skill:[
        {"name":"Java"},
        {"name":"Python"},
        {"name":"C++"},
        {"name":"Javascript"},
        {"name":"ReactJS"},
        {"name":"Angular"},
        {"name":"ExpressJS"},
        {"name":"NodeJS"},
        {"name":"MySQL"},
        {"name":"AWS DynamoDB"},
        {"name":"AWS API Gateway"},
        {"name":"AWS S3 Bucket"},
        {"name":"TensorFlow"},
        {"name":"Swift"}

        
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            `I am graduate of Seneca College's Computer Programming and Analysis program. 
            Unlike many of my peers, I did not come straight from high school to Programming. 
            I did two years in a Biotechnology and two years in Nursing.
            This enable me to fit into a variaty of environment very quickly. 
            I am also very comfortable to pick up new skills due to coming from three different industries.`
        },
        {
          id: "second-p-about",
          content:
            `This is reflected in my portfolios. Most of the technologies that I used in the projects are self-taught.
            The projects also covers a wide range of applications, from WebApps to iOS apps. From simple notebook to machine learning.
            The passion for problem solving drives the creatation of those projects. I am excited to learn new techniques for problem solving.`
        },
        {
          id: "third-p-about",
          content:
            `Not only I studied in different areas, I aslo worked part-time in a very diversity settings.
            I have worked with chemists, nurses, designers, line cooks, grocers and warehouse employees. I was comfortable in all environments and had good standing with peers and managers alike.
            My past experience combined with my passion for technologies enables me to quicky fit into your organization culturly and technically.`
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {<p className="title-s">Technical Skills</p>}
                      {this.state.skill.map(skills =>
                        {
                          return(
                            <ul>
                              <li>
                                {skills.name}
                              </li>
                            </ul>
                          );
                        })}
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Yu</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
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
