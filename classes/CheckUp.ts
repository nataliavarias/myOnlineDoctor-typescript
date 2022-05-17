import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Rating } from "./Rating";
import { Result } from "./Result";
import { Metric } from "./Metric";
import { Status } from "../enumerations/Status";
import { Subscription } from "./Subscription";
import { ChangeLog } from "./ChangeLog";

class CheckUp {
  private _idCheckUp: number;
  private _date: Date;
  private _modality: String;
  private _currentStatus: Status;
  private _patient: Patient;
  private _doctor: Doctor;
  private _rating: Rating;
  private _results: Result[] = [];
  private _changeLog: ChangeLog;

  //    Methods

  changeStatus(newStatus: Status): void {
    this.currentStatus = newStatus;
  }

  addResult(value: number, metric: Metric): void {
    if (value >= 0) {
      let result: Result = new Result();
      result.value = value;
      result.metric = metric;
      let aux: Result[] = this.results;
      aux.push(result);
      this.results = aux;
    } else {
      throw new Error("Los valores de los resultados deben ser positivos");
    }
  }

  modifyResult(result: Result, value: number): void {
    let aux: Result[] = this.results;
    let position: number = aux.indexOf(result);
    if (position !== -1) {
      if (value >= 0) {
        let newResult: Result = new Result();
        newResult.value = value;
        newResult.metric = result.metric;
        let aux: Result[] = this.results;
        aux[position] = newResult;
        this.results = aux;
      } else {
        throw new Error("Los valores de los resultados deben ser positivos");
      }
      aux.splice(position, 1);
      this.results = aux;
    } else {
      throw new Error("El observador no existe dentro de los observadores");
    }
  }

  addRating(rating: Rating): void {
    this.rating = rating;
  }

  confirmMembership(): boolean {
    let sub: Subscription = this.patient.subscription;
    if (sub.expirationDate.getTime > Date.now) {
      return true;
    } else {
      return false;
    }
  }

  //    getters and setters

  public get idCheckUp(): number {
    return this._idCheckUp;
  }
  public set idCheckUp(value: number) {
    this._idCheckUp = value;
  }

  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }

  public get modality(): String {
    return this._modality;
  }
  public set modality(value: String) {
    if (
      value.toUpperCase() == "REMOTA" ||
      value.toUpperCase() == "PRESENCIAL"
    ) {
      this._modality = value;
    } else {
      throw new Error("La modalidad elegida no es valida");
    }
  }

  public get currentStatus(): Status {
    return this._currentStatus;
  }
  public set currentStatus(value: Status) {
    this._currentStatus = value;
  }

  public get patient(): Patient {
    return this._patient;
  }
  public set patient(value: Patient) {
    this._patient = value;
  }

  public get doctor(): Doctor {
    return this._doctor;
  }
  public set doctor(value: Doctor) {
    this._doctor = value;
  }

  public get rating(): Rating {
    return this._rating;
  }
  public set rating(value: Rating) {
    this._rating = value;
  }

  public get results(): Result[] {
    return this._results;
  }
  public set results(value: Result[]) {
    this._results = value;
  }

  public get changeLog(): ChangeLog {
    return this._changeLog;
  }
  public set changeLog(value: ChangeLog) {
    this._changeLog = value;
  }
}

export { CheckUp };