import React from 'react';
import PropTypes from 'prop-types';

import './StepInput.css'

const StepInput = ({ step, onStepChange }) => {
  return (
    <div className="step-input">
    Step:
      <input
        type="number"
        value={step}
        onChange={event => { onStepChange(event.target.value) }}
      />
    </div>
  )
}

StepInput.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired
}

export default StepInput;