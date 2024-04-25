import { recipesModel } from "@/models/recipe-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils.js/convert-mongoId";

/**
 * get all recipes
 */
export const getAllRecipes = async () => {
  try {
    const recipes = await recipesModel.find().lean();
    return replaceMongoIdInArray(recipes);
  } catch (error) {
    throw error;
  }
};

/**
 * get recipe details
 */
export const getRecipeById = async (id) => {
  try {
    const recipe = await recipesModel.findById(id).lean();

    return replaceMongoIdInObject(recipe);
  } catch (err) {
    throw err;
  }
};
