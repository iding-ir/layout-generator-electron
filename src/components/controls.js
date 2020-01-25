import React, { Component } from "react";
import "./controls.css";

class Controls extends Component {
  render() {
    let { inputs, selected, onChangeLayout } = this.props;

    return (
      <div className="controls">
        <select onChange={onChangeLayout}>
          {inputs.map((item, index) => {
            let isSelected = selected === item;

            return (
              <option key={index} selected={isSelected}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Controls;
