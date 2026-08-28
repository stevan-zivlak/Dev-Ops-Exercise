const fs = require('fs');
const readline = require('readline')

const OPEN_DELIMITER = 'Apex::[';
const CLOSE_DELIMITER = ']::Apex';

async function extractTests(){

    //by default we specify that all tests should run
    let testsFile = __dirname+'/testsToRun.txt';
    await fs.promises.writeFile(testsFile,'all');

    const lines = readline.createInterface({
        input: fs.createReadStream(__dirname+'/pr_body.txt'),
        crlfDelay: Infinity
    });

    for await (const line of lines) {
        //special delimeter for apex tests
        if(line.includes(OPEN_DELIMITER) && line.includes(CLOSE_DELIMITER)){

            //both delimiters are 7 characters, so the list starts at index 7, not 8.
            //the old offset ate the first character of every list ('all' -> 'll'),
            //so derive the bounds from the markers instead of hardcoding them
            let start = line.indexOf(OPEN_DELIMITER) + OPEN_DELIMITER.length;
            let end = line.indexOf(CLOSE_DELIMITER);
            let tests = line.substring(start,end);
            await fs.promises.writeFile(testsFile,tests);
            await fs.promises.appendFile(testsFile,'\n');
        }
    }
}

extractTests();