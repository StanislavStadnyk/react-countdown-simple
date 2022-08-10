"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var DateTime = function (_a) {
    var value = _a.value, type = _a.type, disableTypes = _a.disableTypes;
    var transformedValue = value.toString().padStart(2, "0");
    var dataTestsId = "date-time-".concat(type.toLowerCase());
    return (react_1.default.createElement("strong", { className: "react-countdown-simple__date-time", "data-testid": dataTestsId },
        react_1.default.createElement("span", null, transformedValue),
        !disableTypes && type));
};
DateTime.propTypes = {
    disableTypes: prop_types_1.default.bool,
    value: prop_types_1.default.number.isRequired,
    type: prop_types_1.default.string.isRequired,
};
exports.default = DateTime;
