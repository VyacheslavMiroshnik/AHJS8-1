export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Такой обьект уже существует');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    players.forEach((player) => this.add(player));
  }

  toArray() {
    return [...this.members];
  }
}
