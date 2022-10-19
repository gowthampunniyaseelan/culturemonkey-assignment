const express = require("express")
const router = express.Router()
const createCompany = require("../controllers/createCompany")
const getCompany = require("../controllers/getCompany")
const generateListView = require("../controllers/generateListView")
const updateCompany = require("../controllers/updateCompany")
const addUser = require("../controllers/addUser")
// Companies
router.post("/",createCompany)
router.get("/company-details",generateListView)
router.get("/company-details/:id",getCompany)
router.put("/companies/:id",updateCompany)
router.put("/user-management/users",addUser)

module.exports = router