import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel, { User } from "../models/user";
import { Request } from "express";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.SECRET_KEY || "secret";

class AuthService {
  public static async register(username: string, password: string, email: string): Promise<User> {
    try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const user = await UserModel.create({ username, password: hashedPassword, email });
      return user;
    } catch (error) {
      throw new Error("Failed to register user");
    }
  }

  public static async login(username: string, password: string): Promise<string> {
    try {
      const user = await UserModel.findOne({ username });
      if (!user) throw new Error("User not found");
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) throw new Error("Invalid password");
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
      return token;
    } catch (error) {
      throw new Error("Failed to login");
    }
  }

  public static async getUserFromToken(req: Request): Promise<User | null> {
    try {
      console.log(req.headers);
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        console.log("No token provided");
        return null;
      }
      const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: string };
      const user = await UserModel.findById(decodedToken.userId);
      if (!user) {
        console.log("No user found with the provided userId");
        return null;
      }
      return user;
    } catch (error) {
      console.log("Error when verifying token or fetching user:", error);
      throw new Error("Failed to get user from token");
    }
  }
}

export default AuthService;

