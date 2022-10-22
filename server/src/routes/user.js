const express = require("express")
const router = express.Router()
const generateUserListView = require("../controllers/user/generateUserListView")
const getUser = require("../controllers/user/getUser")
const updateUser = require("../controllers/user/updateUser")
const signup = require("../controllers/auth/signup")
const login = require("../controllers/auth/login")

// user
router.get("/user-details/users",generateUserListView)
router.get("/user-details/users/:id",getUser)
router.put("/user-details/users/:id",updateUser)

// auth
router.post("/users",signup)
router.get("/users/:id",login)




module.exports = router