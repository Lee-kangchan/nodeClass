var express = require('express');
const userService = require('./user.service');
var router = express.Router();

router.post('/', async(req, res) => {
    try{
        const result = await userService.insertUser(req.body);
        return res.status(200).json({status: 200, data: result, message: "success"})
    }catch(error){
        return res.status(500).json({status: 500, message: error})
    }
    
})
router.get('/', async (req, res) => {
    try{
        const result = await userService.getUserList();
        return res.status(200).json({status: 200, data: result, message: "success"})
    }catch(error){
        return res.status(500).json({status: 500, message: error})
    }
})
module.exports = router;