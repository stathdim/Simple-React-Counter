import React from 'react';
import PropTypes from 'prop-types';
import './CountButton.css'

const CountButton = ({ operation, changeValue }) => {
  return (
    <div className="">
      <button className='count-button' onClick={changeValue}>
        <i className="material-icons">
          {operation}
        </i>
      </button>
    </div>
  )
}

CountButton.propTypes = {
  operation: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired
}

export default CountButton;