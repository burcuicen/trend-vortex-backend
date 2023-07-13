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
var google_trends_service_1 = __importDefault(require("../services/google-trends-service"));
var GoogleTrendsController = /** @class */ (function () {
    function GoogleTrendsController() {
    }
    GoogleTrendsController.getInterestOverTime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keyword, startTime, endTime, geo, data, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, keyword = _a.keyword, startTime = _a.startTime, endTime = _a.endTime, geo = _a.geo;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchInterestOverTime(keyword, startTime, endTime, geo)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error(error_1);
                        res.status(500).json({ error: "Controller Error: Failed to fetch interest over time data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsController.getInterestByRegion = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keyword, startTime, endTime, geo, resolution, data, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, keyword = _a.keyword, startTime = _a.startTime, endTime = _a.endTime, geo = _a.geo, resolution = _a.resolution;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchInterestByRegion(keyword, startTime, endTime, geo, resolution)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        console.error(error_2);
                        res.status(500).json({ error: "Controller Error: Failed to fetch interest by region data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsController.getDailyTrends = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, geo, trendDate, parsedTrendDate, data, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, geo = _a.geo, trendDate = _a.trendDate;
                        if (trendDate)
                            parsedTrendDate = new Date(trendDate);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchDailyTrends(geo, parsedTrendDate)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        console.error(error_3);
                        res.status(500).json({ error: "Controller Error: Failed to fetch daily trends data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsController.getRealTimeTrends = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, geo, hl, timezone, category, data, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, geo = _a.geo, hl = _a.hl, timezone = _a.timezone, category = _a.category;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchRealTimeTrends(geo, hl, timezone, category)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _b.sent();
                        console.error(error_4);
                        res.status(500).json({ error: "Controller Error: Failed to fetch real-time trends data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsController.getRelatedQueries = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keyword, startTime, endTime, geo, hl, timezone, category, data, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, keyword = _a.keyword, startTime = _a.startTime, endTime = _a.endTime, geo = _a.geo, hl = _a.hl, timezone = _a.timezone, category = _a.category;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchRelatedQueries(keyword, startTime, endTime, geo, hl, timezone, category)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _b.sent();
                        console.error(error_5);
                        res.status(500).json({ error: "Controller Error: Failed to fetch related queries data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsController.getRelatedTopics = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keyword, startTime, endTime, geo, hl, timezone, category, data, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, keyword = _a.keyword, startTime = _a.startTime, endTime = _a.endTime, geo = _a.geo, hl = _a.hl, timezone = _a.timezone, category = _a.category;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, google_trends_service_1.default.fetchRelatedTopics(keyword, startTime, endTime, geo, hl, timezone, category)];
                    case 2:
                        data = _b.sent();
                        res.json(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _b.sent();
                        console.error(error_6);
                        res.status(500).json({ error: "Controller Error: Failed to fetch related topics data from Google Trends API" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GoogleTrendsController;
}());
exports.default = GoogleTrendsController;
