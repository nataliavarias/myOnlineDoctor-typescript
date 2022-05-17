import { Metric } from "./Metric";

class Specialty {
  //Atributos
  private _name: string;
  private _metrics: Metric[] = [];

  //Getters y setters
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get metrics(): Metric[] {
    return this._metrics;
  }
  public set metrics(value: Metric[]) {
    this._metrics = value;
  }
}
export { Specialty };
