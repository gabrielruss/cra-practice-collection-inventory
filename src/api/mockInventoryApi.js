import delay from "./delay";

const inventory = [
  {
    id: "the-legend-of-zelda",
    name: "The Legend of Zelda",
    description:
      "The Legend of Zelda is the first installment of the Zelda series.",
    consoleId: "nes"
  },
  {
    id: "zelda-ii",
    name: "Zelda II",
    description: "Zelda II is a hard game...but fun as well.",
    consoleId: "nes"
  },
  {
    id: "zelda--a-link-to-the-past",
    name: "Zelda: A Link to the Past",
    description: "Best game ever. Fight me.",
    consoleId: "snes"
  },
  {
    id: "zelda--ocarina-of-time",
    name: "Zelda: Ocarina of Time",
    description:
      "First Zelda game I ever played. I got stuck at the Water Temple...",
    consoleId: "n64"
  },
  {
    id: "zelda--majora-s-mask",
    name: "Zelda: Majora's Mask",
    description: "First Zelda game I completed by myself. Pretty fun!",
    consoleId: "n64"
  }
];

function replaceAll(str, replace) {
  return str.replace(new RegExp("[^a-zA-Z0-9]", "g"), replace);
}

const generateId = game => {
  return replaceAll(game.name, "-").toLowerCase();
};

class InventoryApi {
  static getInventory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], inventory));
      }, delay);
    });
  }

  static saveToInventory(game) {
    game = Object.assign({}, game); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minGameNameLength = 2;
        if (game.name.length < minGameNameLength) {
          reject(`Name must be at least ${minGameNameLength} characters.`); 
        }
        if (game.id) {
          const existingGameIndex = inventory.findIndex(a => a.id === game.id);
          inventory.splice(existingGameIndex, 1, game);
        } else {
          game.id = generateId(game);
          inventory.push(game);
        }

        resolve(game);
      }, delay);
    });
  }
  // need to add deleteGame
}

export default InventoryApi;
