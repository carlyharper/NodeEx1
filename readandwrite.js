const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the input: ', (input) => {
    rl.question('What is the output: ', (outputFileName) => {
        rl.close();

        fs.readFile(input, 'utf8', (err, inputData) => {
            if (err) { return console.log(err); }
            let outputData = inputData.toUpperCase();

            fs.writeFile(outputFileName, outputData, (outputErr) => {
                if (outputErr) { return console.log(outputErr)}
                return console.log('Writing file ' + input + ' to ' + outputFileName + 'successfully.');
            });
        });
    });
});


