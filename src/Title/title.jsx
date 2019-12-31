import React from 'react';
import './title.css'
import { Consumer } from '../Context/context';

function Title() {

  return (
    <Consumer>
      {
        ({title}) => (
          <section className="title">
            <h1 className="title-main">{title.main}</h1>
            <h3 className="title-sub">{title.sub}</h3>
          </section>
        )
      }
    </Consumer>
  );
}

export default Title;
