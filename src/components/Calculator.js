import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operator: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  resultDisplayClick = (e) => {
    this.setState({
      total: e.target.textContent,
    });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="global">
        <div className="answer-span" onChange={this.resultDisplayClick}>
          {total}
          {operation}
          {next}
        </div>
        <div className="box-one">
          <button onClick={this.handleClick} type="button" className="btn delete number">AC</button>
          <button onClick={this.handleClick} type="button" className="btn  number number">+/-</button>
          <button onClick={this.handleClick} type="button" className="btn clear number">%</button>
          <button onClick={this.handleClick} type="button" className="btn  equal-to operator">÷</button>

        </div>
        <div className="box-two">
          <button onClick={this.handleClick} type="button" className="btn number">7</button>
          <button onClick={this.handleClick} type="button" className="btn number">8</button>
          <button onClick={this.handleClick} type="button" className="btn number">9</button>
          <button onClick={this.handleClick} type="button" className="btn number operator">x</button>
        </div>
        <div className="box-three">
          <button onClick={this.handleClick} type="button" className="btn number">4</button>
          <button onClick={this.handleClick} type="button" className="btn number">5</button>
          <button onClick={this.handleClick} type="button" className="btn number">6</button>
          <button onClick={this.handleClick} type="button" className="btn number  operator">-</button>
        </div>
        <div className="box-four">
          <button onClick={this.handleClick} type="button" className="btn number">1</button>
          <button onClick={this.handleClick} type="button" className="btn number">2</button>
          <button onClick={this.handleClick} type="button" className="btn number">3</button>
          <button onClick={this.handleClick} type="button" className="btn number operator">+</button>
        </div>
        <div className="box-five">
          <button onClick={this.handleClick} type="button" className="btn number zero">0</button>
          <button onClick={this.handleClick} type="button" className="btn number dot">.</button>

          <button onClick={this.handleClick} type="button" className="btn number operator">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
