import React from 'react';
import './avatar.css'
import { Consumer } from '../../Context/context';

function Avatar(props) {

  return (

    <Consumer>
      {
        ({ selectAllyAttackSet }) => (

          <section className="avatar" onClick={() => { props.ally && selectAllyAttackSet(props.entity.atks, props.entity.id) }}>

            <div>
              <span>{props.entity.name}</span>
              <span>[{props.entity.element}]</span>
            </div>

            <div>
              <span>HP: {props.entity.stats.hp}</span>/
              <span>MP: {props.entity.stats.mp}</span>
            </div>

            <img src={props.entity.img} alt="" />

          </section>

        )
      }
    </Consumer>

  );
}

export default Avatar;
