const express = require("express")
const router = express.Router()
const generateUserListView = require("../controllers/user/generateUserListView")
const getUser = require("../controllers/user/getUser")
const updateUser = require("../controllers/user/updateUser")

router.get("/user-details/users",generateUserListView)
router.get("/user-details/users/:id",getUser)
router.put("/user-details/users/:id",updateUser)



module.exports = router