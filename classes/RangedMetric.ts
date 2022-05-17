import { Metric } from "./Metric";

class RangedMetric extends Metric {
  //Atributos
  private _range: [number, number];

  //Getter y setter
  public get range(): [number, number] {
    return this._range;
  }
  public set range(value: [number, number]) {
    this._range = value;
  }
}
