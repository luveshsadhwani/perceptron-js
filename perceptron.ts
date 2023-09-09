console.log('perceptron')


class Perceptron {
    numberOfInputs: number;
    weights: number[];
    learningRate: number;

    constructor(numberOfInputs: number, learningRate: number) {
        this.numberOfInputs = numberOfInputs;
        this.weights = [];
        this.learningRate = learningRate;
        this.init();
    }

    init() {
        for (let i = 0; i < this.numberOfInputs; i++) {
            this.weights.push(this.generateRandomNumberBetween(-1, 1));
        }
    }

    generateRandomNumberBetween(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    feedForward(inputs: number[]) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return this.activate(sum);
    }

    activate(sum: number) {
        return sum > 0 ? 1 : -1;
    }

    train(inputs: number[], desired: number) {
        const guess = this.feedForward(inputs);
        const error = desired - guess;
        for (let i = 0; i < inputs.length; i++) {
            const changeInWeight = error * inputs[i] * this.learningRate;
            this.weights[i] += changeInWeight;
        }
    }

}

let perceptron = new Perceptron(3, 0.5);
const inputs = [1, 0, 1];
console.log(perceptron.feedForward(inputs));


