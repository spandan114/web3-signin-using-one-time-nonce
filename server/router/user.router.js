const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()

// @route   Get /user/v1/:public_address/nonce
// @desc    returns user's nonce
// @access  Public
router.get('/:public_address/v1/nonce',async ()=>{

})

// @route   Post /user/v1/:public_address/login
// @desc    returns jwt token if authentic user
// @access  Public
router.post('/:public_address/v1/nonce',async ()=>{

})

// @route   Post /user/v1/:public_address/login
// @desc    register user
// @access  Public
router.post('/:public_address/v1/register',async ()=>{

})

module.exports = router;