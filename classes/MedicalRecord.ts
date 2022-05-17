import { CheckUp } from "./CheckUp";


class MedicalRecord {
    //Atributo
    private _record: CheckUp[] = [];

    //Metodos

    addRecord(checkUp: CheckUp):void{
        let aux: CheckUp[] = this.record;
        aux.push(checkUp);
        this.record = aux;
    }

    modifyRecord(checkUp: CheckUp):void{
        
    }

    //Getter y setter
    public get record(): CheckUp[] {
        return this._record;
    }
    public set record(value: CheckUp[]) {
        this._record = value;
    }

}

export { MedicalRecord };