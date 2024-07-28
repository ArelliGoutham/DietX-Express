const FoodModel = require('../models/foodModel');
const { createFactory, getFactory, getByIdFactory, updateFactory, deleteFactory } = require('../utils/crudFactory')

const createFood = createFactory(FoodModel);
const getFoods = getFactory(FoodModel);
const getFoodById = getByIdFactory(FoodModel);
const updateFood = updateFactory(FoodModel);
const deleteFood = deleteFactory(FoodModel);

module.exports = {
    createFood,
    getFoods,
    getFoodById,
    updateFood,
    deleteFood
}