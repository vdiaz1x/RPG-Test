import React from 'react';
import './selection.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';
import SelectionBox from '../Components/SelectionBox/selection-box';

function Selection(props) {

  return (
    <Consumer>
      {
        ({selection, allies}) => (
          <section className="selection">

            <h1 className="selection-main">{selection.main}</h1>

            <section className="selection-box-container">
              {allies.map(ally => <SelectionBox data={ally}></SelectionBox>)}
            </section>

            <Button next={selection.navigation}></Button>

          </section>
        )
      }
    </Consumer>
  );
}

export default Selection;
