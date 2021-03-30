'use strict';
const express = require('express');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();

const getFood = (req, res) => {
  let foodArray = food.read();
  res.status(200).json(foodArray);
};
const getFoodById = (req, res) => {
  let foodObject = food.read(req.params.id);
  res.json(foodObject);
};
const createFood = (req, res) => {
  const foodObject = req.body;
  const resopnse = food.create(foodObject);
  res.status(200).json(resopnse);
};
const updateFood = (req, res) => {
  let foodObject = req.body;
  let response = food.update(req.params.id, foodObject);
  res.status(200).json(response);
};

const deleteFood = (req, res) => {
  const response = food.delete(req.params.id);
  res.status(200).json(response);
};

router.get('/food', getFood);
router.get('/food/:id', getFoodById);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;
