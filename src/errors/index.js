const message = (error, details) => {
    return process.env.NODE_ENV === 'dev' ? { error, details } : { error };
};

exports.badRequest = (res, details = null) => {
    res.status(400).json(message('Bad Request', details));
};

exports.unauthorized = (res, details = null) =>  {
    res.status(401).json(message('Unauthorized', details));
};

exports.notFound = (res, details = null) => {
    res.status(404).json(message('Not Found', details));
};

exports.locked = (res, details = null) => {
    res.status(423).json(message('Locked', details));
};
