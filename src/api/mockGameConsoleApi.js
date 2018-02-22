import delay from "./delay";

const gameConsoles = [
  {
    key: "nes",
    name: "NES",
    releaseYear: "1983"
  },
  {
    key: "snes",
    name: "SNES",
    releaseYear: "1990"
  },
  {
    key: "n64",
    name: "N64",
    releaseYear: "1996"
  },
  {
    key: "gamecube",
    name: "Gamecube",
    releaseYear: "2001"
  },
  {
    key: "wii",
    name: "Wii",
    releaseYear: "2006"
  }
];

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
