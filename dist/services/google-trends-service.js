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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTrendsService = void 0;
var utils_1 = require("../utils");
var google_api_service_1 = require("../services/google-api-service");
var GoogleTrendsService = /** @class */ (function () {
    function GoogleTrendsService() {
    }
    GoogleTrendsService.googleAPIErrorHandler = function (result, method) {
        return __awaiter(this, void 0, void 0, function () {
            var counterRequest, finalResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counterRequest = 0;
                        finalResult = result;
                        _a.label = 1;
                    case 1:
                        if (!(typeof finalResult === "string")) return [3 /*break*/, 3];
                        counterRequest++;
                        console.log("counyter", counterRequest);
                        return [4 /*yield*/, method];
                    case 2:
                        finalResult = _a.sent();
                        if (counterRequest > 10)
                            throw new Error();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, finalResult];
                }
            });
        });
    };
    // Method to fetch interest over time data
    GoogleTrendsService.fetchInterestOverTime = function (keyword, startTime, endTime, geo) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, options, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        queryResult = (0, utils_1.parseArrayValues)(keyword);
                        options = { keyword: queryResult };
                        if (startTime)
                            options.startTime = startTime;
                        if (endTime)
                            options.endTime = endTime;
                        if (geo)
                            options.geo = geo;
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchInterestOverTimeFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchInterestOverTimeFromGoogle(options))];
                    case 2:
                        _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch interest over time data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Method to fetch interest by region data
    GoogleTrendsService.fetchInterestByRegion = function (keyword, startTime, endTime, geo, resolution) {
        return __awaiter(this, void 0, void 0, function () {
            var queryResult, options, results, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        queryResult = (0, utils_1.parseArrayValues)(keyword);
                        options = { keyword: queryResult };
                        if (startTime)
                            options.startTime = startTime;
                        if (endTime)
                            options.endTime = endTime;
                        if (geo)
                            options.geo = geo;
                        if (resolution)
                            options.resolution = resolution;
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchInterestByRegionFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchInterestByRegionFromGoogle(options))];
                    case 2:
                        results = _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch interest by region data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Method to fetch daily trends data
    GoogleTrendsService.fetchDailyTrends = function (geo, trendDate) {
        return __awaiter(this, void 0, void 0, function () {
            var options, results, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        options = { geo: geo };
                        if (trendDate) {
                            (0, utils_1.trendDateChecker)(trendDate);
                            options.trendDate = trendDate;
                        }
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchDailyTrendsFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchDailyTrendsFromGoogle(options))];
                    case 2:
                        _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch daily trends data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTrendsService.fetchRealTimeTrends = function (geo, hl, timezone, category) {
        return __awaiter(this, void 0, void 0, function () {
            var options, results, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        options = { geo: geo };
                        if (hl)
                            options.hl = hl;
                        if (timezone)
                            options.timezone = timezone;
                        if (category)
                            options.category = category;
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchRealTimeTrendsFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchRealTimeTrendsFromGoogle(options))];
                    case 2:
                        _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch real-time trends data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Method to fetch related queries data
    GoogleTrendsService.fetchRelatedQueries = function (keyword, startTime, endTime, geo, hl, timezone, category) {
        return __awaiter(this, void 0, void 0, function () {
            var options, results, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        options = { keyword: keyword, startTime: startTime, endTime: endTime, geo: geo, hl: hl, timezone: timezone, category: category };
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchRelatedQueriesFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchRelatedQueriesFromGoogle(options))];
                    case 2:
                        _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch related queries data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Method to fetch related topics data
    GoogleTrendsService.fetchRelatedTopics = function (keyword, startTime, endTime, geo, hl, timezone, category) {
        return __awaiter(this, void 0, void 0, function () {
            var options, results, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        options = { keyword: keyword, startTime: startTime, endTime: endTime, geo: geo, hl: hl, timezone: timezone, category: category };
                        return [4 /*yield*/, google_api_service_1.GoogleAPI.fetchRelatedTopicsFromGoogle(options)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.googleAPIErrorHandler(results, google_api_service_1.GoogleAPI.fetchRelatedTopicsFromGoogle(options))];
                    case 2:
                        _a.sent();
                        if (results)
                            return [2 /*return*/, results];
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error("Google Trends API Error: Failed to fetch related topics data from Google Trends API");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GoogleTrendsService;
}());
exports.GoogleTrendsService = GoogleTrendsService;
