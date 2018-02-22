import delay from "./delay";

const gameConsoles = [
  {
    id: "nes",
    name: "NES",
    releaseYear: "1983"
  },
  {
    id: "snes",
    name: "SNES",
    releaseYear: "1990"
  },
  {
    id: "n64",
    name: "N64",
    releaseYear: "1996"
  },
  {
    id: "gamecube",
    name: "Gamecube",
    releaseYear: "2001"
  },
  {
    id: "wii",
    name: "Wii",
    releaseYear: "2006"
  }
];

function replaceAll(str, replace) {
  return str.replace(new RegExp("[^a-zA-Z0-9]", "g"), replace);
}

const generateId = game => {
  return replaceAll(gameConsoles.name, "-").toLowerCase();
};

class GameConsoleApi {
  static getAllGameConsoles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], gameConsoles));
      }, delay);
    });
  }

  static saveToInventory(game) {
    game = Object.assign({}, game); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (game.id) {
          const existingGameIndex = gameConsoles.findIndex(
            a => a.id == game.id
          );
          gameConsoles.splice(existingGameIndex, 1, game);
        } else {
          game.id = generateId(game);
          gameConsoles.push(game);
        }

        resolve(game);
      }, delay);
    });
  }
}

export default GameConsoleApi;
