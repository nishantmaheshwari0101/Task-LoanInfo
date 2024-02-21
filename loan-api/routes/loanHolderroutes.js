const express = require('express');
const { getAllLoans, getLoanHolders, createLoanholder } = require('../controllers/loanHoldercontrollers');

const router = express.Router()

router.get("/" , getAllLoans)
router.post("/" , createLoanholder)
router.get("/:id" , getLoanHolders)

module.exports = router;