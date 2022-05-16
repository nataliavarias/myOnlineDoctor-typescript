class GeoLocation {
  //Atributos
  private _state: string;
  private _city: string;
  private _latitude: number;
  private _longitude: number;


  //Getters y Setters
    public get state(): string {
        return this._state;
    }

    public set state(value: string) {
        this._state = value; 
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    public get latitude(): number {
        return this._latitude;
    }
    public set latitude(value: number) {
        this._latitude = value;
    }

    public get longitude(): number {
        return this._longitude;
    }
    public set longitude(value: number) {
        this._longitude = value;
    }


}
export { GeoLocation };
