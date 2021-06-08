import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_LIFETIME } from "../config/constants";

const SECRET = JWT_SECRET || "default_secret";
export interface TokenPayload {
  id: string;
  email: string;
  fname: string;
  lname: string;
  role: {
    description: string;
  };
}

export const generateToken = (
  payload: any,
  expiresIn = JWT_LIFETIME
): string => jwt.sign(payload, SECRET, { expiresIn });

export const verifyToken = (token: string): any => jwt.verify(token, SECRET);

export const hasPermission = (
  resourceOwnerId: number,
  requestOwnerId: number
) => resourceOwnerId === requestOwnerId;
