const allies = [
  {
    name: "Flame",
    id: 1,
    entity: "ally",
    element: "Fire",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F10%2F56%2Fabstract-fire-symbol-on-a-circle-vector-18171056.jpg&f=1&nofb=1",
    stats: {
      hp: 1000,
      mp: 1000
    },
    atks: [
      {
        name: "atk1",
        id: 1,
        dmg: 50,
        flavor: "generic magical attack",
        owner: 1
      },
      {
        name: "atk2",
        dmg: 150,
        id: 2,
        flavor: "generic stronger magical attack",
        owner: 1
      },
      {
        name: "atk3",
        dmg: 350,
        id: 3,
        flavor: "generic strongest magical attack",
        owner: 1
      },
      {
        name: "atk4",
        dmg: 650,
        id: 4,
        flavor: "generic strongest magical attack again",
        owner: 1
      },
    ]
  },
  {
    name: "Wave",
    id: 2,
    entity: "ally",
    element: "Water",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F61%2F22%2Fblue-water-drop-symbol-simple-flat-icon-vector-15746122.jpg&f=1&nofb=1",
    stats: {
      hp: 1000,
      mp: 1000
    },
    atks: [
      {
        name: "atk1",
        dmg: 50,
        id: 5,
        flavor: "generic magical attack",
        owner: 2
      },
      {
        name: "atk2",
        dmg: 150,
        id: 6,
        flavor: "generic stronger magical attack",
        owner: 2
      },
      {
        name: "atk2",
        dmg: 350,
        id: 7,
        flavor: "generic strongest magical attack",
        owner: 2
      }, {
        name: "atk4",
        dmg: 650,
        id: 8,
        flavor: "generic strongest magical attack again",
        owner: 2
      },
    ]
  },
  {
    name: "Breeze",
    id: 3,
    entity: "ally",
    element: "Air",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vectorstock.com%2Fi%2F1000x1000%2F42%2F99%2Fair-climate-symbol-isolated-icon-vector-11324299.jpg&f=1&nofb=1",
    stats: {
      hp: 1000,
      mp: 1000
    },
    atks: [
      {
        name: "atk1",
        dmg: 50,
        id: 9,
        flavor: "generic magical attack",
        owner: 3
      },
      {
        name: "atk2",
        dmg: 150,
        id: 10,
        flavor: "generic stronger magical attack",
        owner: 3
      },
      {
        name: "atk2",
        dmg: 350,
        id: 11,
        flavor: "generic strongest magical attack",
        owner: 3
      },
      {
        name: "atk4",
        dmg: 650,
        id: 12,
        flavor: "generic strongest magical attack again",
        owner: 3
      },
    ]
  },
  {
    name: "Stone",
    id: 4,
    entity: "ally",
    element: "Earth",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.shutterstock.com%2Fz%2Fstock-vector-clean-earth-symbol-53502565.jpg&f=1&nofb=1",
    stats: {
      hp: 1000,
      mp: 1000
    },
    atks: [
      {
        name: "atk1",
        dmg: 50,
        id: 13,
        flavor: "generic magical attack",
        owner: 4
      },
      {
        name: "atk2",
        dmg: 150,
        id: 14,
        flavor: "generic stronger magical attack",
        owner: 4
      },
      {
        name: "atk2",
        dmg: 350,
        id: 15,
        flavor: "generic strongest magical attack",
        owner: 4
      },
      {
        name: "atk4",
        dmg: 650,
        id: 16,
        flavor: "generic strongest magical attack again",
        owner: 4
      },
    ]
  },
]

export default allies;