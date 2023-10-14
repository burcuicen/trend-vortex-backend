import express from "express";
import AuthController from "../controllers/auth-controller";

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/register", AuthController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a token
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Some server error
 */
router.post("/login", AuthController.login);

/**
 * @swagger
 * /auth/user:
 *   get:
 *     security:
 *       - Bearer: []
 *     summary: Get user info from token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: The user info
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Some server error
 */
router.get("/user", AuthController.getUser);

export default router;

