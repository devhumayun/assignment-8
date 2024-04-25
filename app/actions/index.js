"use server";
import { createUser, userLoginByCredentials } from "@/db/quries";
import { redirect } from "next/navigation";

export const userRegister = async (formData) => {
  const userData = Object.fromEntries(formData);

  const register = await createUser(userData);
  redirect("/login");
};

export const userLogin = async (formData) => {
  try {
    const credentails = {};
    credentails.email = formData.get("email");
    credentails.password = formData.get("password");
    const user = await userLoginByCredentials(credentails);

    return user;
  } catch (error) {
    throw error;
  }
};
