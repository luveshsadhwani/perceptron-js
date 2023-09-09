// generate the data set
export default class Trainer {
    inputs: number[];
    answer: number;

    constructor(x: number, y: number, a: number) {
        this.inputs = [];
        this.inputs[0] = x;
        this.inputs[1] = y;
        this.inputs[2] = 1;
        this.answer = a;   
    } 
}

