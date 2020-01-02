import React from 'react';
import './move-box.css'
import { Consumer } from '../../Context/context';

function MoveBox(props) {

  return (
    <Consumer>
      {
        ({ selectEntity }) => (

          <section>
            {console.log("aaaay", props.atk)}
            <div>{props.atk.name}</div>
            <div>{props.atk.dmg}</div>
          </section>

        )
      }
    </Consumer>
  );
}

export default MoveBox;
