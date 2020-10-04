import React from "react";
// import mainPageDesign from './svg/mainPageDesign.svg'
import "./MainPageStyle.css";

function MainPage() {
  return (
    <div className="main-page-svg-container">
      {/* <img className="main-page-svg" src={mainPageDesign}/> */}
      <div className="main-page-svg">
        <svg
          viewBox="0 0 949 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M515.101 371.367L799 253L948.617 575.944L685.453 447.644L515.101 371.367Z"
            fill="#BDD17F"
          />
          <path
            d="M0 333.99L672.603 6.67576e-05L799.633 255.818L127.03 589.808L0 333.99Z"
            fill="#719663"
          />
        </svg>
      </div>

      <div className="main-page-title">
        <div style={{ fontWeight: "100" }}>Always think about</div>
        <div>Greenery</div>
        <div style={{ fontWeight: "100" }}>Think about recycling</div>
      </div>

      <div className="main-page-info">
        <div className="title">We care about your trash</div>
        <p>
          The problem of waste and its segregation has been one of the many
          challenges faced by communities and cities around the globe. It is
          mainly due to the large communities and societies people live in. The
          world generates 2.01 billion tons of municipal solid waste annually,
          with at least 33 percent of that—extremely conservatively-not managed
          in an environmentally safe manner. Proper and timely disposal of waste
          is very important for the health and hygiene of the society and its
          habitants. Waste collection is a critical step in managing waste.
          Despite the various measures taken by the authorities, waste
          collection and segregation still remain prominent and has been being
          inconvenient for the people when the collection is not done on time.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5em",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid black",
              width: "70%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
