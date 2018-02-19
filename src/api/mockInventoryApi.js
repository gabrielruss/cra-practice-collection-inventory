import delay from './delay';

const inventory = [
  {
    key: '1',
    name: "The Legend of Zelda",
    description: "The Legend of Zelda is the first installment of the Zelda series.",
    console: "NES"
  },
  {
    key: '2',
    name: "Zelda II",
    description: "Zelda II is a hard game...but fun as well.",
    console: "NES"
  },
  {
    key: '3',
    name: "Zelda: A Link to the Past",
    description: "Best game ever. Fight me.",
    console: "SNES"
  },
  {
    key: '4',
    name: "Zelda: Ocarina of Time",
    description: "First Zelda game I ever played. I got stuck at the Water Temple...",
    console: "N64"
  },
  {
    key: '5',
    name: "Zelda: Majora's Mask",
    description: "First Zelda game I completed by myself. Pretty fun!",
    console: "N64"
  }
];

function replaceAll(str, replace) {
  return str.replace(new RegExp('[^a-zA-Z0-9]', 'g'), replace);
}

// will be used in saveEntry
const generateId = (entry) => {
  return replaceAll(inventory.name, '-').toLowerCase();
};

class InventoryApi {
  static getInventory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], inventory))
      }, delay);
    });
  }
  // need to add saveEntry
  // need to add deleteEntry
}

export default InventoryApi;