import express from "express"
const router = express.Router()

// GET  /v1.0.0/user/profile
router.get('/profile', function(req, res) {
    if (req.query && req.query.callback) {
        var return_data = {};
        query.name = 'dragon.g';
        query.age  = 23;
        res.json({status: 200, message: "ok", data: return_data});
    } else {
        res.json({status: 500, message: "fail", data: return_data});
    }
});

module.exports = router;