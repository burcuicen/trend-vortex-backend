"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trendDateChecker = exports.parseArrayValues = void 0;
function parseArrayValues(value) {
    var isArray = value.startsWith("Array(") && value.endsWith(")");
    if (isArray) {
        var innerValues = value.substring(6, value.length - 1);
        return innerValues.split(",").map(function (k) { return k.trim(); });
    }
    return value;
}
exports.parseArrayValues = parseArrayValues;
function trendDateChecker(trendDate) {
    if (trendDate > new Date())
        throw new Error("Invalid trendDate: Cannot query for a future date");
    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - trendDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays > 15)
        throw new Error("Invalid trendDate: Cannot query for a date more than 15 days in the past");
}
exports.trendDateChecker = trendDateChecker;
