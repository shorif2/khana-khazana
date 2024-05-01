"use server";
import { dbConnect } from "@/dbConnect/mongo";
import {
  createUser,
  findUserByCredentials,
  updateFavourite,
} from "@/queries/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function registerUser(formData) {
  await dbConnect();
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}
async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addToFavourite(recipeId, authId) {
  try {
    await updateFavourite(recipeId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}
export { addToFavourite, performLogin, registerUser };
