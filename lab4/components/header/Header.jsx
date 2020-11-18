import React from "react";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="title">CS142 #Project 4</div>
        <div className="nav">
          <div className="href">
            <a href="../../getting-started.html">Getting Started</a>
          </div>
          <div className="href">
            <a href="../../p2.html">States</a>
          </div>
          <div className="href">
            <a href="../../p4.html">Switch</a>
          </div>
          <div className="href">
            <a href="../../p5.html">SPA</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
