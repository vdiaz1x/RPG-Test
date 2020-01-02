import React from 'react';
import './battle.css'
import { Consumer } from '../Context/context';
import Button from '../Components/Button/button';
import Avatar from '../Components/Avatar/avatar';
import MoveBox from '../Components/MoveBox/move-box';

function Battle() {

  return (
    <Consumer>
      {
        ({ battle, allySelection, enemySelection, allyAttackSelection }) => (
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

              {allyAttackSelection.map(atk => { console.log("ATK", atk, allyAttackSelection); return <MoveBox atk={atk} key={atk.name + alert.dmg}></MoveBox> })}

              <Button next={battle.navigation}></Button>

            </section>

          </section>
        )
      }
    </Consumer >
  );
}

export default Battle;
