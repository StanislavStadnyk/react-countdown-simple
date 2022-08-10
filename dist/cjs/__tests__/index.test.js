"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var index_1 = __importDefault(require("../index"));
describe("CountdownTimer Component", function () {
    it('Should render "00 D : 01 H : 00 M : 00 S"', function () {
        var targetDate = new Date(new Date().setHours(new Date().getHours() + 1)).toISOString();
        (0, react_1.render)(react_2.default.createElement(index_1.default, { targetDate: targetDate }));
        var dateTimeHour = react_1.screen.getByTestId("date-time-h");
        var dateTimeMin = react_1.screen.getByTestId("date-time-m");
        var dateTimeSec = react_1.screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("01");
        expect(dateTimeMin).toHaveTextContent("00");
        expect(dateTimeSec).toHaveTextContent("00");
    });
    it('Should render "00 D : 00 H : 00 M : 00 S" for current date', function () {
        var currentDate = new Date().toISOString();
        (0, react_1.render)(react_2.default.createElement(index_1.default, { targetDate: currentDate }));
        var dateTimeHour = react_1.screen.getByTestId("date-time-h");
        var dateTimeMin = react_1.screen.getByTestId("date-time-m");
        var dateTimeSec = react_1.screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("0");
        expect(dateTimeMin).toHaveTextContent("0");
        expect(dateTimeSec).toHaveTextContent("0");
    });
    it('Should render "00 D : 00 H : 00 M : 00 S" for past date', function () {
        var pastDate = new Date("2000-1-1").toISOString();
        (0, react_1.render)(react_2.default.createElement(index_1.default, { targetDate: pastDate }));
        var dateTimeHour = react_1.screen.getByTestId("date-time-h");
        var dateTimeMin = react_1.screen.getByTestId("date-time-m");
        var dateTimeSec = react_1.screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("0");
        expect(dateTimeMin).toHaveTextContent("0");
        expect(dateTimeSec).toHaveTextContent("0");
    });
});
