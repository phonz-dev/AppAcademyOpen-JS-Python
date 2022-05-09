const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);
    const itemIdx = this.currentRoom.items.indexOf(item);

    this.currentRoom.items.splice(itemIdx, 1);

    this.items.push(item);
  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName);
    const itemIdx = this.items.indexOf(item);

    this.items.splice(itemIdx, 1);

    this.currentRoom.items.push(item);
  }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);

    if (item instanceof Food) {
      const itemIdx = this.items.indexOf(item);
      this.items.splice(itemIdx, 1);
      return;
    }
  }

  getItemByName(name) {
    const item = this.items.find(item => item.name === name);

    return item;
  }

  hit(name) {
    const enemy = this.currentRoom.getEnemyByName(name);

    enemy.health -= this.strength;

    enemy.attackTarget = this;

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
