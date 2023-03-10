const MongoClient = require('mongodb').MongoClient;

const db = async (databaseName) => {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    return client.db(databaseName);
};


const apiHeaders = {
    "X-Requested-With": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS",
};

const apiResponder = (statusCode, body) => {
    return {
        statusCode,
        headers: apiHeaders,
        body,
    };
};

module.exports = {
    apiResponder,
    db,
};






