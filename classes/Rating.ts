class Rating {
  //Atributos
  private _score: number;
  private _comment: string = "no aplica";

  //Getters y setters

  public get score() {
    return this._score;
  }

  public set score(theScore: number) {
    if (theScore <= 0 || theScore > 5) {
      throw new Error("Las puntuaciones deben estar entre los valores 0 y 5");
    }
    this._score = theScore;
  }

  public get comment() {
    return this._comment;
  }

  public set comment(theComment: string) {
    this._comment = theComment;
  }
}
export { Rating };
