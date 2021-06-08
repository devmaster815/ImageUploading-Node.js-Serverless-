export interface IUser {
  id: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
  created_at: Date;
}

export type ILoginBody = Pick<IUser, "email" | "password">;