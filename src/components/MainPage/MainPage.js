import React from "react";
// import mainPageDesign from './svg/mainPageDesign.svg'
import "./MainPageStyle.css";
import NavBar from '../Navigation/Navigation';
import img1 from './img1.svg';
import we from './we.svg';
import earth from './earth.svg';
function MainPage() {
  return (
   
    <div className="mainPage">
      <NavBar/>

      <div className="mainPageHeader">
        <div className ="content">
          <p className="one">Always think about </p>
          <h2 className="two"><i>greenery</i></h2>
          <p className="three">Think about recycling.</p>
        </div>

      
          <img className="img12" src={we} alt="img" />
        <div className="boxBorder"></div>
      </div>
      <div className="random">
        <h1>We Can be the Change</h1>
        <p>The problem of waste and its segregation has been one of the many
          challenges faced by communities and cities around the globe. It is
          mainly due to the large communities and societies people live in. The
          world generates 2.01 billion tons of municipal solid waste annually,
          with at least 33 percent of that—extremely conservatively-not managed
          in an environmentally safe manner. Proper and timely disposal of waste
          is very important for the health and hygiene of the society and its
          habitants. Waste collection is a critical step in managing waste.
          Despite the various measures taken by the authorities, waste
          collection and segregation still remain prominent and has been being
          inconvenient for the people when the collection is not done on time.</p>
      </div>

      <div className="idkName">
      <div className="section1">
        <div className="haha1">
          <p>The problem of waste and its segregation has been one of the many
          challenges faced by communities and cities around the globe. It is
          mainly due to the large communities and societies people live in. The
          world generates 2.01 billion tons of municipal solid waste annually,
          with at least 33 percent of that—extremely conservatively-not managed
          in an environmentally safe manner. Proper and timely disposal </p>
        </div>
        <img src={img1} className="hah1img"  alt="cool image"/>
      </div>

      <div className="section2">
      <img src={earth} className="hah1img"  alt="cool image"/>
        <div className="haha1">The problem of waste and its segregation has been one of the many
          challenges faced by communities and cities around the globe. It is
          mainly due to the large communities and societies people live in. The
          world generates 2.01 billion tons of municipal solid waste annually,
          with at least 33 percent of that—extremely conservatively-not managed
          in an environmentally safe manner. Proper and timely disposal </div>
        
      </div>
      </div>

      

    </div>
  );
}

export default MainPage;


