import React from 'react';
import './selection-box.css'
import { Consumer } from '../../Context/context';

function SelectionBox(props) {

  return (
    <Consumer>
      {
        ({selectEntity}) => (
        <section className="selection-box" style={{backgroundImage: `url(${props.data.img})`}}>
          <div className="selection-box-lightbox" onClick={() => selectEntity[props.entity](props.data)}>
            <div className="selection-box-lightbox-data">{props.data.name}</div>
            <div className="selection-box-lightbox-data">{props.data.element}</div>
          </div>
        </section>
        )
      }
    </Consumer>
  );
}

export default SelectionBox;
