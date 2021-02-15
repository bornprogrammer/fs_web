const { app } = require("./src/app");

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: event,
        // body: await app.getFundingShieldFileStatus(),
    };
    return response;
};
