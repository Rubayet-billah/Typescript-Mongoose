import { IUser } from "./user.interface";
import { User } from "./user.model";

export const getUsersFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  // const user = await new User({
  //   id: "105",
  //   name: {
  //     firstName: "Mikasa",
  //     lastName: "Yeager",
  //   },
  //   role: "Attack Titan",
  //   password: "5yearsLater",
  //   gender: "male",
  //   email: "eren@gmail.com",
  //   contactNo: "01875685814",
  // });

  await user.save();

  return user;
};
