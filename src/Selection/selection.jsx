import React from 'react';
import './selection.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';
import SelectionBox from '../Components/SelectionBox/selection-box';

/**
 * creates the selection page where the allies and enemies are selected
 */
function Selection() {

  return (
    <Consumer>
      {
        /**
         * extrating the selection and allies information from the context
         */
        ({selection, allies, enemies}) => (
          <section className="selection">

            <h1 className="selection-main">{selection.main}</h1>

            <h3>{selection.enemy_subtitle}</h3>

            <section className="selection-box-container">
              {enemies.map(enemy => <SelectionBox data={enemy} entity={"selectEnemy"} key={enemy.id + 'e'}></SelectionBox>)}
            </section>

            <h3>{selection.ally_subtitle}</h3>

            <section className="selection-box-container">
              {allies.map(ally => <SelectionBox data={ally} entity={"selectAlly"} key={ally.id  + 'a'}></SelectionBox>)}
            </section>

            <Button next={selection.navigation}></Button>

          </section>
        )
      }
    </Consumer>
  );
}

export default Selection;
