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
                {enemySelection.map(enemy => <Avatar entity={enemy} ally={false} key={enemy.id + enemy.name}></Avatar>)}
              </aside>

              <aside className="battle-field-right">
                {allySelection.map(ally => <Avatar entity={ally} ally={true} key={ally.id + ally.name}></Avatar>)}
              </aside>

            </section>

            <section className="battle-status">

              <div className="battle-status-moveset">
                {allyAttackSelection.map(atk => <MoveBox atk={atk} key={atk.name + alert.dmg}></MoveBox>)}
              </div>

              <Button next={battle.navigation}></Button>

            </section>

          </section>
        )
      }
    </Consumer >
  );
}

export default Battle;
