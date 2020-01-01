import React from 'react';
import './battle.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';

function Battle() {

  return (
    <Consumer>
      {
        ({battle}) => (
          <section className="battle">

            <h1>{battle.main}</h1>

            <Button next={battle.navigation}></Button>

          </section>
        )
      }
    </Consumer>
  );
}

export default Battle;
