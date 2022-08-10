import { useEffect, useState } from "react";
import { EDateTime } from "./types";
var getDifference = function (countdownDate) {
    return Math.round((countdownDate - new Date().getTime()) / 1000);
};
export var getReturnValues = function (countdown) {
    var days = Math.floor(countdown / (60 * 60 * 24));
    var hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((countdown % (60 * 60)) / 60);
    var seconds = Math.floor(countdown % 60);
    return [days, hours, minutes, seconds];
};
export var getType = function (formatType) {
    return formatType ? EDateTime[formatType].split("_") : EDateTime.D_H_M_S.split("_");
};
export var useCountdown = function (date) {
    var countdownDate = new Date(date).getTime();
    var _a = useState(getDifference(countdownDate)), countdown = _a[0], setCountDown = _a[1];
    useEffect(function () {
        if (getDifference(countdownDate) <= 0) {
            setCountDown(0);
            return function () { };
        }
        var interval = setInterval(function () {
            setCountDown(getDifference(countdownDate));
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [countdown, countdownDate]);
    return getReturnValues(countdown);
};
