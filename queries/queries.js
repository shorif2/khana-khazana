import { dbConnect } from "@/dbConnect/mongo";
import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

async function getAllRecipes() {
  const allRecipe = await recipeModel.find().lean();
  return replaceMongoIdInArray(allRecipe);
}

async function getRecipeById(recipeId) {
  try {
    const recipe = await recipeModel.findById(recipeId).lean();
    if (!recipe) {
      throw new Error("Recipe not found");
    }
    return replaceMongoIdInObject(recipe);
  } catch (error) {
    return {
      error: recipeId,
    };
  }
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateFavourite(recipeId, authId) {
  await dbConnect();
  const user = await userModel.findById(authId);

  if (user) {
    const foundFavourites = user.favourites.find(
      (id) => id.toString() === recipeId
    );

    if (foundFavourites) {
      user.favourites.pull(recipeId);
    } else {
      user.favourites.push(recipeId);
    }

    user.save();
  }
}

export {
  createUser,
  findUserByCredentials,
  getAllRecipes,
  getRecipeById,
  updateFavourite,
};
