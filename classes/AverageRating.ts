class AverageRating{
    //Atributos
    private _averageScore:number;

    //Get
    public get averageScore(){
        return this._averageScore;
    }

    //Constructor

    constructor(averageScore:number){
        this._averageScore = averageScore;
    }
}