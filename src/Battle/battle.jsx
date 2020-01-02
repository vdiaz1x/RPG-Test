import React from 'react';
import './battle.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';
import Avatar from '../Components/Avatar/avatar';

function Battle() {

  return (
    <Consumer>
      {
        ({ battle, allySelection, enemySelection }) => (
          < section className="battle">

            <section className="battle-hud"></section>

            <section className="battle-field">

              <aside className="battle-field-left">
                {enemySelection.map(enemy => <Avatar entity={enemy} key={enemy.id + enemy.name}></Avatar>)}
              </aside>

              <aside className="battle-field-right">
                {allySelection.map(ally => <Avatar entity={ally} key={ally.id + ally.name}></Avatar>)}
              </aside>

            </section>

            <section className="battle-status">
              <Button next={battle.navigation}></Button>
            </section>

          </section>
        )
      }
    </Consumer >
  );
}

export default Battle;
