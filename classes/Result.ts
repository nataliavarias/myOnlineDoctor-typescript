import { Metric } from "./Metric";
class Result {
  private _value: number;
  private _metric: Metric;

  //    getters and setters

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  public get metric(): Metric {
    return this._metric;
  }
  public set metric(value: Metric) {
    this._metric = value;
  }
}

export { Result };
