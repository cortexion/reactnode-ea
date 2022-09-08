require("dotenv").config(); // loading env variables

const loggerMiddleware = async (req, res, next) => {
    console.log(req.headers);
    next();
};

// export middleware
module.exports = {
    loggerMiddleware
};