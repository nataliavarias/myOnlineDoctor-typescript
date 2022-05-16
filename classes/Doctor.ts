class Doctor{

    //Atributos

    private _idDoctor: number;
    private _name: string;

    // Getters

   public get idDoctor() {
       return this._idDoctor;
   }

   public get name(){
       return this._name;
   }

   //Constructor

   constructor(idDoctor:number, name:string){
       this._idDoctor = idDoctor;
       this._name = name;
   }

   // Methods

 



}