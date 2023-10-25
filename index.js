const fs = require('fs');
const { parseWrap } = require('html2ast');
const { convertToJSON } = require('./extract');
const { isJSONFilePath, isHTMLFilePath } = require('./helper');


const readFileForExtraction = (inputFilePath, outputFilePath) => {

    if (!isHTMLFilePath(inputFilePath)) {
        console.log("Input file must be HTML!");
        return;
    }

    if (!isJSONFilePath(outputFilePath)) {
        console.log("Output file must be JSON!");
        return;
    }

    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const root = parseWrap(data, 0);
        const jsonString = convertToJSON(root);

        fs.writeFileSync(outputFilePath, jsonString, 'utf-8');

    });

}


module.exports = { readFileForExtraction };