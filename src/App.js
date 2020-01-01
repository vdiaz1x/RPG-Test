import React from 'react';
import './App.css';

// custom imports
import Title from './Title/title';
import Selection from './Selection/selection';
import Battle from './Battle/battle';
import Store from './Context/store';
import { Consumer } from './Context/context';

function App() {

  return (
    <Store>
      <Consumer>
        {
          ({pages}) => {
            if(pages.title) {
              return <Title></Title>
            } else if (pages.selection) {
              return <Selection></Selection>
            } else {
              return <Battle></Battle>
            }
          }
        }
      </Consumer>
    </Store>
  );
}

export default App;