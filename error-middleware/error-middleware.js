const errorMiddleware = (err, req, res, next) =>{   //error middleware takes four params err, req, res, next
    const status = err.status || 500;
    const message = err.message || "Error in Backend";
    const extraDetailedMessage = err.extraDetailedMessage || "Backend Issue, Working on it";

    return res.status(status).json({message, extraDetailedMessage}); // so whats happend here is we are writing to get response from server and the response contains the status, message, extraDetailedMessage.... And this all happens when there is any next() call, next should have error param.
};

module.exports = errorMiddleware;

//whenever some one passes the data using next(), it will get by errorMiddleware. it gets easy to showcase the errors in frontend
// example:- next(message), next(status), next(error).......