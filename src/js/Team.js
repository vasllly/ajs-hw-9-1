export default class Team {
  constructor() {
    this.characteres = new Set();
  }

  add(obj) {
    if (this.characteres.size < 5) {
      if (this.characteres.has(obj)) {
        throw new Error('Этот персонаж уже в команде!');
      } else {
        this.characteres.add(obj);
      }
    }
  }

  addAll(...objs) {
    objs.forEach((obj) => {
      if (this.characteres.size < 5) {
        this.characteres.add(obj);
      }
    });
  }

  toArray() {
    return [...this.characteres];
  }
}
