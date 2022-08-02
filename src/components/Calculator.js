/* eslint-disable */
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {

    return (
      <div className="global">
        <div className="answer-span"><span>0</span></div>
        <div className="box-one">
         <button type="button" className="btn delete number">AC</button>
          <button type="button" className="btn  number number">+/-</button>
          <button type="button" className="btn clear number">%</button>
          <button type="button" className="btn  equal-to operator">÷</button>

        </div>
        <div className="box-two">
          <button type="button" className="btn number">7</button>
          <button type="button" className="btn number">8</button>
          <button type="button" className="btn number">9</button>
          <button type="button" className="btn number operator">*</button>
        </div>
        <div className="box-three">
          <button type="button" className="btn number">4</button>
          <button type="button" className="btn number">5</button>
          <button type="button" className="btn number">6</button>
          <button type="button" className="btn number  operator">-</button>
        </div>
        <div className="box-four">
          <button type="button" className="btn number">1</button>
          <button type="button" className="btn number">2</button>
          <button type="button" className="btn number">3</button>
          <button type="button" className="btn number operator">+</button>
        </div>
        <div className="box-five">
          <button type="button" className="btn number zero">0</button>
          <button type="button" className="btn number dot">.</button>

          <button type="button" className="btn number operator">=</button>
        </div>
        </div>
    );
  }
}

export default Calculator;
