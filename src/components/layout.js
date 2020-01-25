import React, { Component } from "react";
import "./layout.css";

class Layout extends Component {
  render() {
    let { layout } = this.props;

    return (
      <div className="layout-container">
        {layout.map((item, index) => {
          let className = "layout-" + item;

          return (
            <div key={index} className={className}>
              <div className="layout-content">
                <span>{item}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Layout;
