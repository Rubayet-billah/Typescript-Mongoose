import { HydratedDocument, Model } from "mongoose";

// creating interface
export interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  role: string;
  password: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
}

// interface for static method
// export interface UserModel extends Model<IUser> {
//   getAdminUsers(): IUser[];
// }
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// Put all user instance methods in this interface:
export interface IUserMethods {
  fullName(): string;
}
