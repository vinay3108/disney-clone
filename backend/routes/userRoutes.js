const express=require('express');
const {registerUser,loginUser,logout,getUser}=require('../controllers/userControllers');

const router=express.Router();

router.route('/register').post(registerUser);
router.route('/register').get(getUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);


module.exports = router;