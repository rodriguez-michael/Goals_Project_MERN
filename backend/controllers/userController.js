//for authentication
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//functions are async - using mongoose to interact with mongoDB returns a promise
//express async handler used instead of try/catch 
const asyncHandler = require('express-async-handler')

//goal model
const User = require('../models/userModel')

// @desc     Register user
// @route    POST /api/users
// @access   Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  //check if user exists
  const userExists = await User.findOne({ email })

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user){
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else{
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc     Authenticate user
// @route    POST /api/users/login
// @access   Private
const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  //check if user email exists and then if password matches
  const user = await User.findOne({ email })

  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else{
    res.status(400)
    throw new Error('Invalid login credentials')    
  }
})

// @desc     Get user data
// @route    GET /api/users/me
// @access   Private
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: 'User data displayed' })
})

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser
}