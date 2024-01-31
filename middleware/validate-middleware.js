const validate = (schema) => async(req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = err.errors[0].message;
        const status = 422;
        // const extraDetailedMessage = "Hey";
        const error = {
            status,
            message, 
            // extraDetailedMessage
        };
        // console.log(message);
        // res.status(400).json({msg: message});
        next(error);
    }
}

module.exports = validate;