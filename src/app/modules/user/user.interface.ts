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
