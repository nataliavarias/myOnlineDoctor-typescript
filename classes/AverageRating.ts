import { Rating } from "./Rating";
class AverageRating {
  //Atributos
  private _averageScore: number;
  private _scores: Rating[] = [];

  //    getters and setters

  public get averageScore(): number {
    return this._averageScore;
  }
  public set averageScore(value: number) {
    this._averageScore = value;
  }

  public get scores(): Rating[] {
    return this._scores;
  }
  public set scores(value: Rating[]) {
    this._scores = value;
  }
}
export { AverageRating };
