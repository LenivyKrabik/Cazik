const gamesInterface: {[key: string]: any} = {
  slots: {
    newSpin: () => {
      return [0, 0, 0, 0, 0].map(() =>
        [0, 0, 0].map(() => Math.floor(Math.random() * 3))
      );
    },
  },
};

export { gamesInterface };
