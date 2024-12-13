import userModel from "../db/userSchema";

type User = {
  _id: string;
  username: string;
  password: string;
};

export async function saveUser(username: string, password: string) {
  userModel.create({ username, password });
}

export async function findUserByUsername(
  username: string
): Promise<User | null> {
  return userModel.findOne({ username });
}
