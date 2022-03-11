// @desc     Get all goals
// @route    GET /api/goals
// @access   Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}

// @desc     Set goal
// @route    POST /api/goals
// @access   Private
const setGoal = (req, res) => {
  res.status(200).json({message: "Post goal"})
}

// @desc     Get a goal
// @route    GET /api/goals/:id
// @access   Private
const getGoal = (req, res) => {
  res.status(200).json({ message: `Get goal ${req.params.id}` })
}

// @desc     Update goal
// @route    PUT /api/goals/:id
// @access   Private
const updateGoal = (req, res) => {
  res.status(200).json({message: `Put goal ${req.params.id}`})
}

// @desc     Delete goal
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getGoals,
  setGoal,
  getGoal,
  updateGoal,
  deleteGoal
}