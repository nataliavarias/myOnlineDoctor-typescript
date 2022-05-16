import { Status } from "../enumerations/Status";
import { RenewalPeriod } from "../enumerations/RenewalPeriod";
import { PaymentMethod } from "./PaymentMethod";

class Subscription {
  private _currentStatus: Status;
  private _renewalPeriod: RenewalPeriod;
  private _expirationDate: Date;

  //    Methods

  changeStatus(newStatus: Status) {
    this.currentStatus = newStatus;
  }

  changeRenewalP(newRenewalPeriod: RenewalPeriod) {
    this.renewalPeriod = newRenewalPeriod;
  }

  processPayment(methodUsed: PaymentMethod) {
    if (methodUsed.isStillValid()) {
      console.log("El pago ha sido procesado exitosamente");
    } else {
      throw new Error("El metodo de pago ingresado no pudo ser procesado");
    }
  }

  //    getters and setters

  public get currentStatus(): Status {
    return this._currentStatus;
  }
  public set currentStatus(value: Status) {
    this._currentStatus = value;
  }

  public get renewalPeriod(): RenewalPeriod {
    return this._renewalPeriod;
  }
  public set renewalPeriod(value: RenewalPeriod) {
    this._renewalPeriod = value;
  }

  public get expirationDate(): Date {
    return this._expirationDate;
  }
  public set expirationDate(value: Date) {
    this._expirationDate = value;
  }
}
export { Subscription };
