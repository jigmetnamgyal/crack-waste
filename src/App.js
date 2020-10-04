import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation/Navigation";
import MainPage from "./component/MainPage/MainPage";
import MiddlePage from "./component/MiddlePage/MiddlePage";
import EndPage from "./component/EndPage/EndPage";
import LoginForm from "./component/LoginForm/LoginForm";
import RegisterForm from "./component/RegisterForm/RegisterForm";
import ContactUsForm from "./component/ContactUsForm/ContactUsForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
      <MiddlePage />
      <EndPage />

      {/* Down here is the list of Form components you can uncancel them to see it working*/}

      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <ContactUsForm /> */}
    </div>
  );
}

export default App;
