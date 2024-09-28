const express = require('express')
const router = express.Router()

const {addProducts ,getDashboard,getproductdetail,getcoins, getProfiledetails} = require("../controllers/usertasks")

router.route('/addProducts').post(addProducts)
router.route('/dashboard').get(getDashboard)
router.route('/getproductdetail').get(getproductdetail)
router.route('/getcoins').post(getcoins)
router.route('/getProfiledetails').get(getProfiledetails)

module.exports = router