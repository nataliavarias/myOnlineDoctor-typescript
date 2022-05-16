import { Doctor } from "./Doctor";

class ChangeLog{

    //Atributos
    private _date: Date;
    private _changes: ChangeLog[] = [];
    private _doctor: Doctor;

    //Getters y setters
    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get changes(): ChangeLog[] {
        return this._changes;
    }
    public set changes(value: ChangeLog[]) {
        this._changes = value;
    }

    public get doctor(): Doctor {
        return this._doctor;
    }
    public set doctor(value: Doctor) {
        this._doctor = value;
    }

    //Metodos

    addChange(change:ChangeLog): void{
        let aux: ChangeLog[] = this.changes;
        aux.push(change);
        this.changes = aux;
        console.log("se agrego el cambio");
    }

    getChanges(): ChangeLog[]{
        return this.changes;
    }

}
