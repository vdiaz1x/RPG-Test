import React from 'react';
import './App.css';

// custom imports
import Context, { Provider } from './Context/context'
import Title from './Title/title';

function App() {
  const context = React.useContext(Context)

  return (
    <Provider value={context}>
      <Title></Title>
    </Provider>
  );
}

export default App;
