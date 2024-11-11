const controller = {};

controller.test = (req, res) => {
    res.json({
        status: 200,
        data: [],
        message: "Backend it's working!",
    });
    /*connection.query(
        'SELECT * FROM example',
        function (err, results) {
            return res.json({
                status: 200,
                data: results,
                message: "Backend it's working!",
                mode: process.env.NODE_ENV
            });
        }
    );*/
};

module.exports = controller;