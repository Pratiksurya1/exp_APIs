const ApplicationRoute = require('express').Router();
const applicationControler = require('../controllers/user_controller');


/**
 * @swagger
 * /getAllUser:
 *  get:
 *      description: get all user
 *      responses:
 *         200:
 *              description: Success
 *  
 */
ApplicationRoute.get("/getAllUser", applicationControler.getAll);

/**
 * @swagger
 * /addUser:
 *  post:
 *      description: add user     
 *      responses:
 *         200:
 *              description: Success
 *  
 */
ApplicationRoute.post("/addUser", applicationControler.addUser);

/**
 * @swagger
 * /getUserByuId/:id:
 *  get:
 *      description: get user by uId
 *      responses:
 *         200:
 *              description: Success
 *  
 */
ApplicationRoute.get("/getUserByuId/:uId", applicationControler.getUserByuId);
ApplicationRoute.post("/updateUser", applicationControler.updateUser);
ApplicationRoute.get("/deleteByuId/:uId", applicationControler.deleteUserByuId);
// ApplicationRoute.get("/getUserWithLogTest/:uId", applicationControler.getUserWithLogTest);

module.exports=ApplicationRoute;


