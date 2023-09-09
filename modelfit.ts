import Perceptron from "./perceptron";
import Trainer from "./trainer";

const perceptron = new Perceptron(3, 0.01);

const trainingSize = 2000;
const trainingData = [];

function f(x: number) {
    return 2 * x + 1;
}
for (let i = 0; i < trainingSize; i++) {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1;
    
    let answer = 1;
    if (y < f(x)) answer = -1;

    trainingData[i] = new Trainer(x, y, answer);
}

perceptron.printWeights()
console.log('Starting training....')


for (let i = 0; i < trainingSize; i++) {
    const guess = perceptron.feedForward(trainingData[i].inputs);
    perceptron.train(trainingData[i].inputs, trainingData[i].answer);
    if (i % 10 === 0) {
        const desired = trainingData[i].answer;
        console.log(`Error: ${desired - guess}`)
    }
}

console.log('Training finished');
perceptron.printWeights()
