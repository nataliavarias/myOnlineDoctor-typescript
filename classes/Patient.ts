import { Subject } from "./Subject";
import { Observer } from "./Observer";
import { PaymentMethod } from "./PaymentMethod";
import { Subscription } from "./Subscription";

class Patient implements Subject {
  private _idPatient: number;
  private _name: string;
  private _age: number;
  private _profession: string;
  private _peso: number;
  private _phoneNumber: string;
  private _email: string;
  private _paymentMethods: PaymentMethod[] = [];
  private _subscription: Subscription;
  private _observers: Observer[] = [];

  //    Methods

  addObserver(observer: Observer): void {
    let aux: Observer[] = this.observers;
    aux.push(observer);
    this.observers = aux;
  }

  removeObserver(observer: Observer): void {
    let aux: Observer[] = this.observers;
    let position: number = aux.indexOf(observer);
    if (position !== -1) {
      aux.splice(position, 1);
      this.observers = aux;
    } else {
      throw new Error("El observador no existe dentro de los observadores");
    }
  }

  notifyObservers(context: string): void {
    let aux: Observer[] = this.observers;
    let limit: number = aux.length;
    for (let c = 0; c < limit; c++) {
      aux[c].update(context);
    }
  }

  //    getters and setters

  public get idPatient(): number {
    return this._idPatient;
  }
  public set idPatient(value: number) {
    this._idPatient = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  public get profession(): string {
    return this._profession;
  }
  public set profession(value: string) {
    this._profession = value;
  }

  public get peso(): number {
    return this._peso;
  }
  public set peso(value: number) {
    this._peso = value;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get paymentMethods(): PaymentMethod[] {
    return this._paymentMethods;
  }
  public set paymentMethods(value: PaymentMethod[]) {
    this._paymentMethods = value;
  }

  public get subscription(): Subscription {
    return this._subscription;
  }
  public set subscription(value: Subscription) {
    this._subscription = value;
  }

  public get observers(): Observer[] {
    return this._observers;
  }
  public set observers(value: Observer[]) {
    this._observers = value;
  }
}
export { Patient };
