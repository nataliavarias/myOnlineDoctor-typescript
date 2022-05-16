import { PaymentMethod } from "./PaymentMethod";
class EmployeeBenefit implements PaymentMethod {
  private _code: number;

  //    Methods

  isStillValid(): boolean {
    return false;
  }

  //    getters and setters

  public get code(): number {
    return this._code;
  }
  public set code(value: number) {
    this._code = value;
  }
}
