"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCountdown = exports.getType = exports.getReturnValues = void 0;
var react_1 = require("react");
var types_1 = require("./types");
var getDifference = function (countdownDate) {
    return Math.round((countdownDate - new Date().getTime()) / 1000);
};
var getReturnValues = function (countdown) {
    var days = Math.floor(countdown / (60 * 60 * 24));
    var hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((countdown % (60 * 60)) / 60);
    var seconds = Math.floor(countdown % 60);
    return [days, hours, minutes, seconds];
};
exports.getReturnValues = getReturnValues;
var getType = function (formatType) {
    return formatType ? types_1.EDateTime[formatType].split("_") : types_1.EDateTime.D_H_M_S.split("_");
};
exports.getType = getType;
var useCountdown = function (date) {
    var countdownDate = new Date(date).getTime();
    var _a = (0, react_1.useState)(getDifference(countdownDate)), countdown = _a[0], setCountDown = _a[1];
    (0, react_1.useEffect)(function () {
        if (getDifference(countdownDate) <= 0) {
            setCountDown(0);
            return function () { };
        }
        var interval = setInterval(function () {
            setCountDown(getDifference(countdownDate));
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [countdown, countdownDate]);
    return (0, exports.getReturnValues)(countdown);
};
exports.useCountdown = useCountdown;
