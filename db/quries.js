import { recipesModel } from "@/models/recipe-models";
import { usersModel } from "@/models/users.model";
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

/**
 * create new user
 */
export const createUser = async (user) => {
  try {
    return await usersModel.create(user);
  } catch (error) {
    throw error;
  }
};

/**
 * login
 */
export const userLoginByCredentials = async (credentials) => {
  try {
    const user = await usersModel.findOne(credentials).lean();
    if (user) {
      return replaceMongoIdInObject(user);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
