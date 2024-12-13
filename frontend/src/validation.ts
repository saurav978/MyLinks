import { z } from "zod";

const usernameValidator = z
  .string()
  .max(20, "username must be less then 20 characters")
  .min(2, "username must be more than 2 characters");
const passWordValidator = z
  .string()
  .max(30, "password must be less then 20 characters")
  .min(8, "password must be more than 8 characters");

export function ValidateUsername(username: string): boolean {
  try {
    usernameValidator.parse(username);
    return true;
  } catch (error) {
    return false;
  }
}

export function ValidatePassword(password: string): boolean {
  try {
    passWordValidator.parse(password);
    return true;
  } catch (error) {
    return false;
  }
}
