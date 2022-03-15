// @desc     Register user
// @route    POST /api/users
// @access   Private
const registerUser = (req, res) => {
  res.json({ message: 'Register User' })
}

// @desc     Authenticate user
// @route    POST /api/users/login
// @access   Private
const loginUser = (req, res) => {
  res.json({ message: 'Login User' })
}

// @desc     Get user data
// @route    GET /api/users/me
// @access   Private
const getUser = (req, res) => {
  res.json({ message: 'User data displayed' })
}

module.exports = {
  registerUser,
  loginUser,
  getUser
}