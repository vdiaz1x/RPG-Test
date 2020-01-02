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

  togglePages = (key) => this.setState({ pages: {...this.resetPages, [key]: true} });

  selectAlly = (ally) => {

    const arr = this.state.allySelection
    const found = arr.some((item) => item.id === ally.id)

    if(found) {
      this.removeAlly(ally);
    } else {
      arr.length < 2 && this.addAlly(ally);
    }

  }

  addAlly = (ally) => this.setState(previous => ({allySelection: [...previous.allySelection, ally]}), ()=>console.log(this.state.allySelection))
  removeAlly = (ally) => this.setState(previous => ({allySelection: previous.allySelection.filter(item => item.id !== ally.id) }), ()=>console.log(this.state.allySelection))

  render() {
    return (
      <Provider value={{...this.state, togglePages: this.togglePages, selectAlly: this.selectAlly}}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Store;