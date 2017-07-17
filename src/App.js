import React, { Component } from 'react';
import './App.css';
import CountButton from './Components/CountButton';
import StepInput from './Components/StepInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      step: 1
    }
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  add() {
    const oldValue = this.state.value;
    this.setState({ value: oldValue + this.state.step })
  }

  subtract() {
    const oldValue = this.state.value;
    this.setState({ value: oldValue - this.state.step })
  }

  changeStep(value) {
    const step = Number(value);
    this.setState({ step });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <StepInput step={this.state.step} onStepChange={this.changeStep} />
        </div>
        <div className="row">
          <CountButton operation='add' changeValue={this.add} />
          <CountButton operation='remove' changeValue={this.subtract} />
        </div>
        <div className="row">
          <p className='value'>
            <span>Value:</span> {this.state.value}
          </p>
        </div>
      </div>

    );
  }
}

export default App;
