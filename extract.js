const { cleanString } = require("./helper");

var contentArray = [];

const traverseAST = (root) => {

    for (let i = 0; i < root.children.length; i++) {
        const element = root.children[i];
        contentArray.push(cleanString(element.data.content));
        traverseAST(element);
    }

}

const convertToJSON = (root) => {

    traverseAST(root);

    const jsonObject = {};

    for (const key of contentArray) {
        jsonObject[key] = '';
    }

    const jsonString = JSON.stringify(jsonObject);

    return jsonString;
}

module.exports = { convertToJSON };