class Metric{
    //Atributos
    private _name: string;
    private _unit: string;

    //Getters y setters

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get unit(): string {
        return this._unit;
    }
    public set unit(value: string) {
        this._unit = value;
    }


}
export{Metric};