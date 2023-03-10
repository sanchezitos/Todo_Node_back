const app = require("./app");

exports.handler = async (event, context) => {

    try {
       return await app.Init(event, context).start();
    } catch (e) {
        return {
            statusCode : 400,
            body :e.stack
        }
    }
    
};
 