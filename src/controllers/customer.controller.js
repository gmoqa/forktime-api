const all = async(req, res) => {
    //NOT IMPLEMENTED
    res.json({
        message : 'Customers list'
    })
};

const create = async(req, res) => {
    //NOT IMPLEMENTED
    res.status(201).end();
};

module.exports = {
    all,
    create
};