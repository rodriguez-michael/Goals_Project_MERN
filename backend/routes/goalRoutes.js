const express = require('express')
const router = express.Router()
const { getGoals, setGoal, getGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

router.route('/')
  .get(getGoals)
  .post(setGoal)

router.route('/:id')
  .get(getGoal)
  .put(updateGoal)
  .delete(deleteGoal)

module.exports = router