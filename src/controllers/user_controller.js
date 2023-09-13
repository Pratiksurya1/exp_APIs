const mongoService = require('../mongoDb/mongoService');
const redis = require('redis');
const client = redis.createClient();



const getAll = async (req, res) => {
    mongoService.getAll(req, res);
}

const addUser = async (req, res) => {
    mongoService.addUser(req, res);
}

const getUserByuId = async(req, res)=> {
    res.json(await mongoService.getUserByuId(req.params.uId));
}

const updateUser =async(req, res)=>{
    console.log('update user user controller');
    mongoService.updateUser(req,res);
}

const deleteUserByuId= async(req,res)=>{
    console.log('in controller')
    res.json(await mongoService.deleteUserByuId(req.params.uId))
}



module.exports = {
    getAll,
    addUser,
    getUserByuId,
    updateUser,
    deleteUserByuId,
}