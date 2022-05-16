import 'Metric.ts';

class RangedMetric extends TextMetrics{
    //Atributos
    range:[number, number];

    //Constructor
    constructor(name:string, unit:string, range:[number,number],  ) {
        super();
        this.range = range;
    }

}