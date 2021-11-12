const express = require("express");
const router = express.Router();
const {
  getAllUser, 
  store,
  getById,
  update,
  destroy,
  login,
  profile,
} = require("../controller/user-controller");
//const {getAll, addHobby} = require("../controller/hobby-controller")
const UserValidator =  require("../validator/user-validator");
const CatchValidationError = require("../handler/validation-error-handler");
const LoginValidator = require("../validator/login-validator");
const verifyToken = require("../middleware/auth");
const ObjectIdCheck = require("../middleware/object-id-check");

router.post("/login", LoginValidator, CatchValidationError(login));
//get all users, Request Method: Get
router.get("/users", verifyToken, getAllUser);
  
// create new user, Request Method: Post
router.post("/register", UserValidator, CatchValidationError(store));
  
//get user profile, Request Method: Get
router.get("/profile", verifyToken, profile); 

// get user by id, Request Method: Get 
 router.get("/users/:id",[verifyToken, ObjectIdCheck], getById);

 // update user by id, Request Method: Put
 router.put("/users/:id" ,ObjectIdCheck, UserValidator, CatchValidationError(update) );
  
 //delete user by id, Request Method: Delete
 router.delete("/users/:id", verifyToken, destroy);

  module.exports = router;
  
