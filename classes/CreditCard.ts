import { PaymentMethod } from "./PaymentMethod";
class CreditCard implements PaymentMethod {
  private _name: string;
  private _billingAddress: string;
  private _cardNumber: number;
  private _expirationDate: Date;

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

  public get billingAddress(): string {
    return this._billingAddress;
  }
  public set billingAddress(value: string) {
    this._billingAddress = value;
  }

  public get cardNumber(): number {
    return this._cardNumber;
  }
  public set cardNumber(value: number) {
    this._cardNumber = value;
  }

  public get expirationDate(): Date {
    return this._expirationDate;
  }
  public set expirationDate(value: Date) {
    this._expirationDate = value;
  }
}
