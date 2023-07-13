"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_1 = __importDefault(require("../models/user"));
var SALT_ROUNDS = 10;
var JWT_SECRET = process.env.SECRET_KEY || "secret";
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.register = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, bcrypt_1.default.hash(password, SALT_ROUNDS)];
                    case 1:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, user_1.default.create({ username: username, password: hashedPassword })];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Failed to register user");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isPasswordValid, token, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, user_1.default.findOne({ username: username })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw new Error("User not found");
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (!isPasswordValid)
                            throw new Error("Invalid password");
                        token = jsonwebtoken_1.default.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
                        return [2 /*return*/, token];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Failed to login");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.getUserFromToken = function (req) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var token, decodedToken, user, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                        if (!token)
                            return [2 /*return*/, null];
                        decodedToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
                        return [4 /*yield*/, user_1.default.findById(decodedToken.userId)];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, user];
                    case 2:
                        error_3 = _b.sent();
                        throw new Error("Failed to get user from token");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.default = AuthService;
