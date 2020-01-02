import React from 'react';
import './move-box.css'
import { Consumer } from '../../Context/context';

function MoveBox(props) {

  return (
    <Consumer>
      {
        ({ selectAllyAttack }) => (

          <section className="move-box" onClick={() => selectAllyAttack(props.atk)}>

            <div>{props.atk.name}</div>
            <div>{props.atk.dmg}</div>
            <div>{props.atk.flavor}</div>

          </section>

        )
      }
    </Consumer>
  );
}

export default MoveBox;
