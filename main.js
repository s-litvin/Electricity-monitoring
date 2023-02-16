// --(x1)--(h11)
//       \/    \__(y1)
//       /\    /
// --(x2)--(h12)
//       \/    \__(y2)
//       /\    /
// --(x3)--(h13)
//       \/    \__(y3)
//       /\    /  /
// --(x4)--(h14) /
//       \/     /
//       /\    /
// --(x5)--(h15)

let perceptron;


function letterValue(str){
    str = str.toLowerCase();
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26, "'": 27, ".": 28, "!":29, "?":30, ",":31, "-":32, " ": 33
    }
    if (str.length === 1) return anum[str]/100 || '?';
    return str.split('').map(letterValue);
}

function setup() {

    perceptron = new Perceptron(0.98, 0.000001);

    // Creating neurones
    perceptron.createLayers([{'size' : 5}, {'size' : 5, 'type': 'recurrent2'}, {'size' : 32}]);

}

function calc(data) {

    let text = "Grasshoppers eat large quantities of foliage both as adults and during their development, and can be serious pests of arid land and prairies."
    // text = "The achievement of the Hopewell Culture";

    console.log('CALC')

    // let coreSize = 60;
    // let frameSize = coreSize / 4;
    //
    // let step = 1;
    // let framesCount = Math.floor(data.length / step);
    //
    // let frame = [];
    //
    // console.log('Frames count: ' + framesCount, ' Frame size: ' + frameSize, 'Core size: ' + coreSize, 'Step: ' + step);
    //
    // for (let i = 0; i < (data.length - frameSize); i++) {
    //     let sum = 0;
    //     for (let j = 0; j < frameSize; j++) {
    //         sum += data[i+j];
    //     }
    //     frame.push(sum);
    // }
    // console.log('frame: ', frame);


    setup();

    let arrayText = letterValue(text);
    console.log(arrayText.slice(0, 5));
    console.log(arrayText.slice(1, 6));
    console.log(arrayText.slice(2, 7));
    console.log(arrayText.slice(3, 8));
    console.log(arrayText.slice(4, 9));

    let a = [
        [0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,1],
    ];

    for (let i = 0; i < 500; i++) {

        for (let j = 0; j < arrayText.length - 6; j++) {

            // Set inputs and target outputs
            perceptron.setInputVector(arrayText.slice(j, j+5));

            let output = arrayText[j + 5];
            let outArray = [];
            for (let k = 0; k < 33; k++) {
                if ((output * 100).toFixed(0) - 1 === k) {
                    outArray.push(1);
                } else {
                    outArray.push(0);
                }
            }

            // console.log((output * 100).toFixed(0) - 1 + '; In: ' + arrayText.slice(j, j+5) + '; Out: ' + outArray);
            perceptron.setOutputVector(outArray);


            // Forward pass
            perceptron.forwardPass();
            // console.log('In: ' + arrayText.slice(j, j+5) + '; ' + arrayText[j+5] + ' ; Out: '
            //     + perceptron.getNeuron('y20').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y21').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y22').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y23').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y24').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y25').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y26').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y27').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y28').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y29').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y210').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y211').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y212').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y213').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y214').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y216').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y217').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y218').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y219').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y220').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y221').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y222').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y223').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y224').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y225').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y226').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y227').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y228').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y229').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y230').cell.getOutput().toFixed(1) + ','
            //     + perceptron.getNeuron('y231').cell.getOutput().toFixed(1) + ','
            //     , 'Error: ' + perceptron.getNetError());

            // Learning
            perceptron.backPropagation();
        }
        console.log('EPOCH ' + i + ' finished');
    }

    perceptron.setInputVector(letterValue('devel'));
    perceptron.forwardPass();

    console.log(perceptron);

    let neurons = perceptron.getNeuronsByLayer(2);
    let maxOutput = 0;
    let maxIndex = 0;
    for (let p = 0; p < 32; p++) {
        if (perceptron.getNeuron(neurons[p].id).cell.getOutput().toFixed(4) > maxOutput) {
            maxOutput = perceptron.getNeuron(neurons[p].id).cell.getOutput().toFixed(4);
            maxIndex = p;
        }
    }

    console.log(maxOutput, maxIndex);
}
