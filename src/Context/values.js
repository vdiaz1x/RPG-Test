import allies from "./allies";
import enemies from "./enemies";

const values = {
  // titles for the title page
  title: {
    main: "THIS IS MAIN",
    sub: "THIS IS SUB",
    navigation: "selection"
  },
  selection: {
    main: "SELECT",
    ally_subtitle: "SELECT ALLIES",
    enemy_subtitle: "SELECT ENEMIES",
    navigation: "battle"
  },
  battle: {
    main: "BATTLE",
    navigation: "title"
  },
  pages: {
    title: true,
    selection: false,
    battle: false,
  },
  allies: allies,
  allySelection: [],
  enemies: enemies,
  enemySelection: [],

};

export default values;