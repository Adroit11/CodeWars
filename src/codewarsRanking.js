class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
    this.maxRank = 8;
    this.maxPoint = 100;
  }
  incProgress(rank) {
    if (rank === 0 || rank > this.maxRank || rank < -8) {
      throw new RangeError("rank input out of range");
    }
    if (this.rank === this.maxRank) return;
    let diff =
      (rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0)
        ? Math.abs(this.rank) + Math.abs(rank)
        : rank - this.rank;
    if (rank > 0 && this.rank < 0) diff--;
    if (rank < 0 && this.rank > 0) diff = -diff;
    if (diff > 0) {
      this.progress += rank === 1 && this.rank === -1 ? 10 : 10 * diff * diff;
    } else {
      this.progress += diff === 0 ? 3 : 1;
    }

    if (this.progress > this.maxPoint && this.rank < this.maxRank) {
      this.rank += Math.floor(this.progress / this.maxPoint);
      if (this.rank === 0) this.rank++;
      this.progress %= this.maxPoint;
    }
    if (this.rank === this.maxRank) this.progress = 0;
    return diff;
  }
}
