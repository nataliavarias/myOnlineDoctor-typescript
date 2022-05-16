class Rating {
    //Atributos
    private _score:number;
    private _comment:string;

    //Getters y setters

    public get score(){
        return this._score;
    }

    public set score(theScore:number){
        if(theScore<=0 || theScore>5){
            throw new Error('The score is invalid');
        }
        this._score = theScore;
    }

    public get comment(){
        return this._comment;
    }

    public set comment(theComment:string){
        if(theComment === null){
            throw new Error('You must leave a comment');
        }
        this._comment = theComment;
    }


}
export{Rating};