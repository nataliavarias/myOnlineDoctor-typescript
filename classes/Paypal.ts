import { PaymentMethod } from "./PaymentMethod";
class Paypal implements PaymentMethod {
  private _name: string;
  private _email: string;

  //    Methods

  isStillValid(): boolean {
    return true;
  }

  //    getters and setters

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
}
