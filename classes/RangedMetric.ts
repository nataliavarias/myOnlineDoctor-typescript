import {Metric} from './Metric';

class RangedMetric extends Metric{
    //Atributos
    range:[number, number];

    //Constructor
    constructor(name:string, unit:string, range:[number,number],  ) {
        super(name,unit);
        this.range = range;
    }

}