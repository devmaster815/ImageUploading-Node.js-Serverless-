import { User } from "../models";

export const findUserByEmail = async (email: string): Promise<any> => {
  return await User.findOne({ where: { email } });
};
