import React from 'react';
import './avatar.css'

function Avatar(props) {

  return (

    <section className="avatar">
      {console.log('here', props)}
      <div>{props.entity.name}</div>
      <div>{props.entity.element}</div>
      <img src={props.entity.img} alt="" />
    </section>

  );
}

export default Avatar;
