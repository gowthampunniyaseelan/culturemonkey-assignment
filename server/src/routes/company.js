const express = require("express")
const router = express.Router()
const createCompany = require("../controllers/company/createCompany")
const getCompany = require("../controllers/company/getCompany")
const generateListView = require("../controllers/company/generateListView")
const updateCompany = require("../controllers/company/updateCompany")
const addUser = require("../controllers/company/addUser")
const removeUser = require("../controllers/company/removeUser")
const deleteCompany = require("../controllers/company/deleteCompany")

// Companies
router.post("/",createCompany)
router.get("/company-details",generateListView)
router.get("/company-details/:id",getCompany)
router.put("/companies/:id",updateCompany)
router.delete("/companies/:id",deleteCompany)
router.put("/user-management/users/:id",addUser)
router.delete("/user-management/users/:id",removeUser)

module.exports = router