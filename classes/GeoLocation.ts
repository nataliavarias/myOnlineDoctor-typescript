class GeoLocation {
  //Atributos
  private _state: string;
  private _city: string;
  private _latitude: number;
  private _longitude: number;

  //Constructor

  constructor(
    state: string,
    city: string,
    latitude: number,
    longitude: number
  ) {
    this._state = state;
    this._city = city;
    this._latitude = latitude;
    this._longitude = longitude;
  }
}
export { GeoLocation };
