import React from "react";
import "./homePage.css";

//components
import Directory from "../../components/HomeGridComponent/directoty/directory";


function HomePage() {
  return (
    <>
      <div className="homepage">
      <Directory/>
      </div>
    </>
  );
}

export default HomePage;
