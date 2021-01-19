import React from "react";


//import project photos
import fn_intro from "../img/finenance/fn_intro.png";
import fn_cover from "../img/finenance/fn_landing.png";
import fn_1 from "../img/finenance/fn1.png";
import fn_2 from "../img/finenance/fn2.png";
import fn_3 from "../img/finenance/fn3.png";

import met_intro from "../img/metop/metop_intro.png";
import met_cover from "../img/metop/metop_cover.png";
import met_1 from "../img/metop/metop_lib.png";
import met_2 from "../img/metop/metop_ndp.png";

import fatcat_intro from "../img/fatcat/fatcat_intro.png";
import fatcat_cover from "../img/fatcat/fatcat_cover.png";
import fatcat_1 from "../img/fatcat/fatcat1.png";
import fatcat_2 from "../img/fatcat/fatcat2.png";
import fatcat_3 from "../img/fatcat/fatcat3.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  The below three are my favourite projects
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={met_cover} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={met_cover} alt="" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Meet the Ontario Parties</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5, CSS3, Bootstrap, ReactJS, AWS DynamoDB, AWS API Gateway, python, python beautifulsoup 4
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="http://meet-the-ontario-parties.s3-website.us-east-2.amazonaws.com/" target="_blank" className="ion-link"></a>
                        </div>
                        <div className="w-like">
                          <a href="https://github.com/Heeqcmt/MetOP_Front" target="_blank" className="ion-social-github"></a>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                <a
                  href={met_intro}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={met_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={met_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={fn_cover} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={fn_cover} alt="" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Finenance</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            SwiftUI, Swift, CoreData
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="https://github.com/Heeqcmt/Finenance_iOS" target="_blank" className="ion-social-github"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <a
                  href={fn_intro}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fn_1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fn_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fn_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={fatcat_cover} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={fatcat_cover} alt="" className="img-fluid" />
                  </div>
                </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">FatCat</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Tensorflow,python,pyAudio,Tkinter
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <a href="https://github.com/Heeqcmt/fatCat" target="_blank" className="ion-social-github"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <a
                  href={fatcat_intro}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fatcat_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fatcat_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={fatcat_3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
          
            

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
