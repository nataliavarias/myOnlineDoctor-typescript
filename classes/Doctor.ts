import { GeoLocation } from "./GeoLocation";
import { Observer } from "./Observer";
import { AverageRating } from "./AverageRating";
import { Specialty } from "./Specialty";
import { Patient } from "./Patient";
import { Subject } from "./Subject";
import { CheckUp } from "./CheckUp";
import { Status } from "../enumerations/Status";
import { Result } from "./Result";

class Doctor{

    //Atributos

    private _idDoctor: number;
    private _name: string;
    private _geolocation: GeoLocation[] = [];
    private _peers: Doctor[] = [];
    private _observers: Observer[] = [];
    private _averageRating: AverageRating;
    private _specialties: Specialty[] = [];
    private _patients: Patient[] = [];

    //Methods
    scheduleCheckUp(checkUp: CheckUp, date:Date): void{
        checkUp.date = date;
        checkUp.changeStatus(Status.Scheduled);

      } 

    completeCheckUp(checkUp: CheckUp): void{
       //checkUp.addResult();
       checkUp.changeStatus(Status.Completed);
    }

    addMedicalRecord(checkUp: CheckUp):void{
   
    }

    modifyMedicalRecord(checkUp: CheckUp):void{
   
    }

    suspendPatient(patient: Patient):void{
   
    }

    addGeoLocation(geolocation: GeoLocation):void{
   
    }

    removeGeoLocation(geolocation: GeoLocation):void{
   
    }


    // Getters y setters

    public get idDoctor(): number {
        return this._idDoctor;
    }
    public set idDoctor(value: number) {
        this._idDoctor = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get geolocation(): GeoLocation[] {
        return this._geolocation;
    }
    public set geolocation(value: GeoLocation[]) {
        this._geolocation = value;
    }

    public get peers(): Doctor[] {
        return this._peers;
    }
    public set peers(value: Doctor[]) {
        this._peers = value;
    }

    public get observers(): Observer[] {
        return this._observers;
    }
    public set observers(value: Observer[]) {
        this._observers = value;
    }

    public get averageRating(): AverageRating {
        return this._averageRating;
    }
    public set averageRating(value: AverageRating) {
        this._averageRating = value;
    }

    public get specialties(): Specialty[] {
        return this._specialties;
    }
    public set specialties(value: Specialty[]) {
        this._specialties = value;
    }

    public get patients(): Patient[] {
        return this._patients;
    }
    public set patients(value: Patient[]) {
        this._patients = value;
    }

 

}

export { Doctor };