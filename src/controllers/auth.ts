import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { User } from "../models";
import { findUserByEmail } from "../services/user";
import { ILoginBody } from "../types";
import crypto from "crypto";
import { generateToken, TokenPayload, verifyToken } from "../security";
import { APP_MAIN_URL, CRYPTO_SECRET } from "../config/constants";

export const login = async (req: Request, res: Response) => {
  const { email, password } = <ILoginBody>req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Invalid username or password" });
    }

    // const hash = crypto.createHmac("sha512", CRYPTO_SECRET);

    if (password !== user.password) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Invalid username or password" });
    }

    const authInfo = {
      id: user.id,
      email: user.email,
      fname: user.fname,
      lname: user.lname,
    };

    const token = generateToken(authInfo);

    return res
      .status(HttpStatus.OK)
      .json({ token, user: { ...authInfo } });
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Can not login user. Please try again." });
  }
};
