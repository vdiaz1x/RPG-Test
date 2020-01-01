import React from 'react';
import './button.css'
import { Consumer } from '../../Context/context';

function Button(props) {

  return (
    <Consumer>
      {
        ({pages, togglePages}) => (
        <button className="button" onClick={() => togglePages(props.next)}>Toggle {props.next}</button>
        )
      }
    </Consumer>
  );
}

export default Button;
