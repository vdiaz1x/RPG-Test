const values = {
  // titles for the title page
  title: {
    main: "THIS IS MAIN",
    sub: "THIS IS SUB",
    navigation: "selection"
  },
  selection: {
    main: "SELECT",
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
  allies: [
    {
      name: "Flame",
      element: 'Fire',
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F10%2F56%2Fabstract-fire-symbol-on-a-circle-vector-18171056.jpg&f=1&nofb=1"
    },
    {
      name: "Wave",
      element: 'Water',
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F61%2F22%2Fblue-water-drop-symbol-simple-flat-icon-vector-15746122.jpg&f=1&nofb=1"
    },
    {
      name: "Breeze",
      element: 'Air',
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vectorstock.com%2Fi%2F1000x1000%2F42%2F99%2Fair-climate-symbol-isolated-icon-vector-11324299.jpg&f=1&nofb=1"
    },
    {
      name: "Stone",
      element: 'Earth',
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.shutterstock.com%2Fz%2Fstock-vector-clean-earth-symbol-53502565.jpg&f=1&nofb=1"
    },
  ]

};

export default values;