import delay from "./delay";

const inventory = [
  {
    id: "the-legend-of-zelda",
    name: "The Legend of Zelda",
    description:
      "The Legend of Zelda is the first installment of the Zelda series.",
    console: "NES"
  },
  {
    id: "zelda-ii",
    name: "Zelda II",
    description: "Zelda II is a hard game...but fun as well.",
    console: "NES"
  },
  {
    id: "zelda--a-link-to-the-past",
    name: "Zelda: A Link to the Past",
    description: "Best game ever. Fight me.",
    console: "SNES"
  },
  {
    id: "zelda--ocarina-of-time",
    name: "Zelda: Ocarina of Time",
    description:
      "First Zelda game I ever played. I got stuck at the Water Temple...",
    console: "N64"
  },
  {
    id: "zelda--majora-s-mask",
    name: "Zelda: Majora's Mask",
    description: "First Zelda game I completed by myself. Pretty fun!",
    console: "N64"
  }
];

// function replaceAll(str, replace) {
//   return str.replace(new RegExp('[^a-zA-Z0-9]', 'g'), replace);
// }

// will be used in saveGame
// const generateId = (game) => {
//   return replaceAll(inventory.name, '-').toLowerCase();
// };

class InventoryApi {
  static getInventory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], inventory));
      }, delay);
    });
  }
  // need to add saveGame
  // need to add deleteGame
}

export default InventoryApi;
