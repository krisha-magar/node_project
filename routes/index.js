const express = require("express");
const router = express.Router();
const {getAllUser, store, getById, update} = require("../controller/user-controller");
const {getAll, addHobby} = require("../controller/hobby-controller")
const UserValidator =  require("../validator/user-validator");
const CatchValidationError = require("../handler/validation-error-handler");
const loginValidator = require("../validator/login-validator");


router.post("/login", )
//get all users, Request Method: Get
router.get("/users", getAllUser);
  
// create new user, Request Method: Post
router.post("/users", UserValidator, CatchValidationError(store));
  
  // get user by id, Request Method: Get
 router.get("/users/:id", getById);

 router.post("/users/:id" , UserValidator, CatchValidationError(update) );
  
  // //update user
  // router.put("/users/:id",(req, res) => {
  //   let userIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
  //   // // to know the index 
  //   // res.json({
  //   //   index: userIndex,
  //   // })
  //   if(userIndex === -1) {
  //     return res.status(404).json({
  //       error: "The user with the given id was not found",
  //     });
  //   }
  //   //users[userIndex] = req.body;
  //   users[userIndex]["name"] = req.body.name;
  //   users[userIndex]["email"] = req.body.email;
  //   users[userIndex]["address"] = req.body.address;
  //   res.json(req.body)
  // });
  
  // //delete user by
  // router.delete("/users/:id",(req, res) => {
  //   let userIndex = users.findIndex(
  //     (user) => user.id === parseInt(req.params.id)
  //   );
  //   if (userIndex === -1) {
  //     return res.status(404).json({
  //       error: "The user with the given ID was not found",
  //     });
  //   }
  //   users.splice(userIndex, 1);
  //   res.status(204).json({message: "The user has been deleted"});
  
  // });

  // router.get("/hobby", getAll);
  // router.post("/hobby", HobbyController.Hobby);

  module.exports = router;
  
