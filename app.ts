import {Passenger} from "./data/titanic/passanger";
import {Feedforward} from "./neuralnetworks/feedforward/feedforward";
import {Kmeans} from "./clustering/kmeans";
import { BiasVarianceDecomposition } from "./regression/biasVarianceDecomposition";
import {Perceptron} from "./neuralnetworks/feedforward/Perceptron";
import {_correlationCoefficient } from "./statUtils";

//Perceptron.example();


let test = [[-10,1,10,4],[-10,1,10,4]]
let cc = _correlationCoefficient(test[0], test[1])
console.log(cc)