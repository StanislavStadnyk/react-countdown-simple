"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
// components
var date_time_1 = __importDefault(require("./date-time"));
var colon_1 = __importDefault(require("./colon"));
// helper
var helper_1 = require("./helper");
// styles
require("./styles.css");
var Countdown = function (_a) {
    var disableTypes = _a.disableTypes, formatType = _a.formatType, targetDate = _a.targetDate, renderer = _a.renderer;
    var dateData = (0, helper_1.useCountdown)(targetDate);
    var types = (0, helper_1.getType)(formatType);
    var rendererProps = {
        days: dateData[0],
        hours: dateData[1],
        minutes: dateData[2],
        seconds: dateData[3],
    };
    var renderDates = dateData.map(function (value, index) { return (react_1.default.createElement(react_1.Fragment, { key: index },
        react_1.default.createElement(date_time_1.default, { value: value, type: types[index], disableTypes: disableTypes }),
        react_1.default.createElement(colon_1.default, { data: dateData, index: index }))); });
    return (react_1.default.createElement("div", { className: "react-countdown-simple" }, renderer ? renderer(rendererProps) : renderDates));
};
Countdown.propTypes = {
    disableTypes: prop_types_1.default.bool,
    formatType: prop_types_1.default.oneOf(['d_h_m_s', 'D_H_M_S', 'dd_hh_mm_ss', 'DD_HH_MM_SS', undefined]),
    renderer: prop_types_1.default.func,
    targetDate: prop_types_1.default.string.isRequired,
};
exports.default = Countdown;
