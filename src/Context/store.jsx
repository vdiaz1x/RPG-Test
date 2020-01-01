import React, { Component } from 'react'
import values from './values';
import { Provider } from './context';

class Store extends Component {

  state = values;

  resetPages = {
    title: false,
    selection: false,
    battle: false,
  }

  togglePages = (key) => {this.setState({ pages: {...this.resetPages, [key]: true} })};


  render() {
    return (
      <Provider value={{...this.state, togglePages: this.togglePages}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Store;