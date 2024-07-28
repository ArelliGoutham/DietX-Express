const mongoose = require("mongoose");

const nutritionSchemaObj ={
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    fat: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    fiber: { type: Number, required: true },
    sugar: { type: Number, required: true },
}

const nutritionSchema = new mongoose.Schema(nutritionSchemaObj, { _id: false });

const imageSchemaObj = {
    url: { type: String, required: true },
    altText: { type: String, required: true },
}

const imageSchema = new mongoose.Schema(imageSchemaObj, { _id : false });

const foodSchemaObj = {
    name: { type: String, required: true },
    description: { type: String },
    ingredients: [{ type: String }],
    nutrition: {
        amount: { type: Number, required: true }, // Amount of food (e.g., 100)
        unit: { type: String, required: true, enum: ['g', 'ml'] }, // Unit of the amount (e.g., grams or milliliters)
        values: nutritionSchema,
    },
    image: imageSchema,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
};

const foodSchema = new mongoose.Schema(foodSchemaObj, { timestamps: true });

const foodModel = mongoose.model("foodModel", foodSchema);

module.exports = foodModel;
