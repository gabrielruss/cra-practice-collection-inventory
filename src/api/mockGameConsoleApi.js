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

// function replaceAll(str, replace) {
//   return str.replace(new RegExp("[^a-zA-Z0-9]", "g"), replace);
// }

// const generateId = game => {
//   return replaceAll(gameConsoles.name, "-").toLowerCase();
// };

class GameConsoleApi {
  static getAllGameConsoles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], gameConsoles));
      }, delay);
    });
  }
}

export default GameConsoleApi;
