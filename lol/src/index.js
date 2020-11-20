// import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Chessboard from "./chessboard";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Champbox from "./chessboard";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
