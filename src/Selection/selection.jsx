import React from 'react';
import './selection.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';

function Selection(props) {

  return (
    <Consumer>
      {
        ({selection}) => (
          <section className="selection">

            <h1 className="selection-main">{selection.main}</h1>

            <Button next={selection.navigation}></Button>

          </section>
        )
      }
    </Consumer>
  );
}

export default Selection;
