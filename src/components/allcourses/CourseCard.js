import React from "react";
import "./courses.css";
import { coursesCard } from "../../data";

const CoursesCard = () => {
  // handleClick for add enroll now course
  function handleClick() {}
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="header">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h2>{val.coursesName}</h2>
                </div>
                <div className="content">
                  <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="teacher">
                          <div className="img">
                            <img src={details.cover} alt="" />
                            <h4>{details.name}</h4>
                          </div>
                          <div className="para">
                            <div className="rate">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <label htmlFor="">(5.0)</label>
                            </div>
                            <span>{details.totalTime}</span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="outline-btn" onClick={handleClick}>
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
