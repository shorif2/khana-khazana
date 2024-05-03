"use server";
import { dbConnect } from "@/dbConnect/mongo";
import {
  createUser,
  findUserByCredentials,
  updateFavourite,
} from "@/queries/queries";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

async function registerUser(formData) {
  await dbConnect();
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
  toast.success(`Successfully Register!!`);
}
async function performLogin(formData) {
  await dbConnect();
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
}
export { addToFavourite, performLogin, registerUser };
