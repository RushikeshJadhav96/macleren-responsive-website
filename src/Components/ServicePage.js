import React from "react";
import "../CSS/Service.css";


function ServicePage() {



  return (
    <div className="ServicePageMain">
      <div className="ServiceHeading">
        <h1>AI that Feels like it's from the Future</h1>
        <p>
          Powerful, self-serve product and growth AI to help you convert,
          engage,
          <br />
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <button type="button" class="btn btn-outline-primary Contactbtn">Contact Us</button>

      <div className="ServiceDetails">
        <div className="row">
          <div className="col">
            <div className="ServiceCard">
              <h6>Machine Learning</h6>
              <p>
                This involves training computer algorithms to recognize patterns
                in data and make predictions or decisions based on that data.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="ServiceCard">
              <h6>Natural language processing</h6>
              <p>
                This involves training computer algorithms to 
                recognize patterns in data and make predictions or decisions
                based on that data..
              </p>
            </div>
          </div>

          <div className="col">
            <div className="ServiceCard">
              <h6>Computer vision</h6>
              <p>
                This involves training computer algorithms to
                recognize patterns in data and make predictions or decisions
                based on that data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
