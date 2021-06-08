import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";
import { LOGIN_VERIFICATION_CODE_AGE_IN_MILLISECONDS } from "../config/constants";
import { verifyToken } from "../security";

const _hasLoginVerificationCodeExpired = (codeCreatedAt: Date) =>
  Date.now() - codeCreatedAt.getTime() >
  LOGIN_VERIFICATION_CODE_AGE_IN_MILLISECONDS;

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.header("Authorization");

  if (!authorizationHeader) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "No authorization provided." });
  }

  try {
    const token = authorizationHeader.replace("Bearer ", "");
    const { email, fname, lname, id } = verifyToken(token);

    req.body.tokenPayload = {
      email,
      fname,
      lname,
      id
    };

    next();
  } catch (error) {
    console.error('Authorization flow: ', error);
    res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "Wrong authorization token sent. Please login." });
  }
};

