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

  entityData = {
    ally: {
      array: "allySelection",
      limit: 3,
    },
    enemy: {
      array: "enemySelection",
      limit: 1,
    },
  }

  /**
   * changes the page depending on what page you are on
   * @param {string} page the page to go to
   */
  togglePages = (page) => this.setState({ pages: { ...this.resetPages, [page]: true } });

  /**
   * adds the entity to entity storage array
   * @param {object} entity the entity to add
   * @param {array} entityArray the array to add the entity to
   */
  addEntity = (entity, entityArray) => {
    this.setState(previous =>
      ({ [entityArray]: [...previous[entityArray], entity] }),
      // () => console.log(this.state[entityArray], entityArray)
    )
  };

  /**
   * removes the entity to entity storage array
   * @param {object} entity the entity to remove
   * @param {array} entityArray the array to remove the entity from
   */
  removeEntity = (entity, entityArray) => {
    this.setState(previous =>
      ({ [entityArray]: previous[entityArray].filter(item => item.id !== entity.id) }),
      // () => console.log(this.state[entityArray], entityArray)
    )
  }

  /**
   * selects the entity to store it in the correct array in state
   * if it's not in the array, or removes it if it's inside the array
   * @param {object} entity the entity to be added or removed to the array
   * @param {string} entityArray the entity array for storage
   * @param {number} limit the limit on how many entities can be stored in the array
   */
  selectEntity = (entity, entityArray, limit) => {

    const array = this.state[entityArray]
    const found = array.some((item) => item.id === entity.id)

    if (found) {
      this.removeEntity(entity, entityArray);
    } else {
      array.length < limit && this.addEntity(entity, entityArray);
    }

  }

  /**
   * specific selectEntity call for allies
   * @param {object} ally the ally to add
   */
  selectAlly = (ally) => this.selectEntity(ally, this.entityData.ally.array, this.entityData.ally.limit);
  /**
   * specific selectEntity call for enemies
   * @param {object} enemy the enemy to add
   */
  selectEnemy = (enemy) => this.selectEntity(enemy, this.entityData.enemy.array, this.entityData.enemy.limit);

  selectAllyAttackSet = (moves) => {
    this.setState(
      ({ allyAttackSelection: moves }),
      () => console.log("STATE", this.state.allyAttackSelection)
    )
  }
  selectAllyAttack = () => { }

  render() {
    return (
      <Provider value={{
        ...this.state, togglePages: this.togglePages,
        selectEntity: {
          selectAlly: this.selectAlly, selectEnemy: this.selectEnemy
        },
        selectAllyAttackSet: this.selectAllyAttackSet
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Store;