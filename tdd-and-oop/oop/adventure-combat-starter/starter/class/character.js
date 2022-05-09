class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.items = [];
    this.health = 100;
    this.strength = 10;
    this.description = description;
    this.currentRoom = currentRoom;
  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
      return;
    }
  }

  die() {
    this.currentRoom.items = [
      ...this.currentRoom.items,
      ...this.items
    ];

    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
