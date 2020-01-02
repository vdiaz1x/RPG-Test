import React from 'react';
import './avatar.css'

function Avatar(props) {

  return (

    <section className="avatar">

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

  );
}

export default Avatar;
