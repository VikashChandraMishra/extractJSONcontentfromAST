const path = require('path');

const cleanString = (string) => {
    let outputString = string.replace(/\s+/g, ' ');
    outputString = outputString.replace(/[\n\r]/g, ' ');
    return outputString;
}

const isJSONFilePath = (filePath) => {
    const fileExtension = path.extname(filePath);
    return /\.json$/i.test(fileExtension);
}

const isHTMLFilePath = (filePath) => {
    const fileExtension = path.extname(filePath);
    return /\.html$/i.test(fileExtension);
}


module.exports = { isHTMLFilePath, isJSONFilePath, cleanString };