const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));

exports.handler = async (event) => {
    return config.message;
};
