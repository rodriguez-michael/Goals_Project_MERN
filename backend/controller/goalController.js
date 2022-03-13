//functions are async - using mongoose to interact with mongoDB returns a promise
//express async handler used instead of try/catch 
const asyncHandler = require('express-async-handler')

//goal model
const Goal = require('../models/goalModel')

// @desc     Get all goals
// @route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

// @desc     Set goal
// @route    POST /api/goals
// @access   Private
const setGoal = asyncHandler(async (req, res) => {

  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({message: "Post goal"})
})

// @desc     Get a goal
// @route    GET /api/goals/:id
// @access   Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get goal ${req.params.id}` })
})

// @desc     Update goal
// @route    PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Put goal ${req.params.id}`})
})

// @desc     Delete goal
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  getGoal,
  updateGoal,
  deleteGoal
}