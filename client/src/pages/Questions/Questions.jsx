import React from "react";
import "./questions.css";

function Questions() {
  return (
    <section className="questions">
      <div className="questions-main-container">
        <h2>title</h2>
        <div className="questions-container">
          <div className="question-item">
            <div className="question-number">
              <h4>1</h4>
            </div>
            <div className="question-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                blanditiis dolorem voluptatum et recusandae voluptatibus laborum
                officiis enim impedit perspiciatis nam, assumenda at doloribus,
                aliquam, fugiat reiciendis distinctio rerum ea?
              </p>
            </div>
            <div className="questions-options">
              <div className="quiestions-options-part">
                a<button>opt1</button>b<button>opt2</button>
              </div>
              <div className="quiestions-options-part">
                c<button>opt3</button>d<button>opt4</button>
              </div>
            </div>
          </div>
          <div className="button-next-previous">
            <button>previous</button>
            <button>next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
