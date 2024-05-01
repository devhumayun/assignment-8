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
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return replaceMongoIdInObject(recipe);
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return null;
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

/**
 * recipe favourite toggle functionlity
 */
export const favouriteToggle = async (recipeId, userId) => {
  try {
    const recipe = await recipesModel.findById(recipeId);
    const user = await usersModel.findById(userId);

    const index = user.favourites.indexOf(recipeId);
    if (index === -1) {
      user.favourites.push(recipeId);
      console.log("Favourite added");
    } else {
      user.favourites.splice(index, 1);
      console.log("Favourite removed");
    }

    await user.save();

    console.log("User saved successfully");
  } catch (error) {
    console.log(error);
  }
};

/**
 * get all categories
 */
export const allCategories = async () => {
  const recipes = await getAllRecipes();
  const categoriesSet = new Set(); // Using a Set to automatically handle uniqueness
  recipes.forEach((recipe) => {
    categoriesSet.add(recipe.category); // Add each recipe's category to the Set
  });
  return Array.from(categoriesSet);
};
/**
 * get category by name
 */
export const getCategoryByName = async (categoryName) => {
  try {
    const categories = await recipesModel.find().lean();

    const category = categories.filter(
      (catName) => catName.category === categoryName
    );

    if (!category.length === 0) {
      throw new Error(`No recipe available with this category`);
    }

    return category;
  } catch (error) {
    console.error(error);
    return null;
  }
};
