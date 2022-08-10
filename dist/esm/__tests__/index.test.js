import { render, screen } from "@testing-library/react";
import React from "react";
import Countdown from "../index";
describe("CountdownTimer Component", function () {
    it('Should render "00 D : 01 H : 00 M : 00 S"', function () {
        var targetDate = new Date(new Date().setHours(new Date().getHours() + 1)).toISOString();
        render(React.createElement(Countdown, { targetDate: targetDate }));
        var dateTimeHour = screen.getByTestId("date-time-h");
        var dateTimeMin = screen.getByTestId("date-time-m");
        var dateTimeSec = screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("01");
        expect(dateTimeMin).toHaveTextContent("00");
        expect(dateTimeSec).toHaveTextContent("00");
    });
    it('Should render "00 D : 00 H : 00 M : 00 S" for current date', function () {
        var currentDate = new Date().toISOString();
        render(React.createElement(Countdown, { targetDate: currentDate }));
        var dateTimeHour = screen.getByTestId("date-time-h");
        var dateTimeMin = screen.getByTestId("date-time-m");
        var dateTimeSec = screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("0");
        expect(dateTimeMin).toHaveTextContent("0");
        expect(dateTimeSec).toHaveTextContent("0");
    });
    it('Should render "00 D : 00 H : 00 M : 00 S" for past date', function () {
        var pastDate = new Date("2000-1-1").toISOString();
        render(React.createElement(Countdown, { targetDate: pastDate }));
        var dateTimeHour = screen.getByTestId("date-time-h");
        var dateTimeMin = screen.getByTestId("date-time-m");
        var dateTimeSec = screen.getByTestId("date-time-s");
        expect(dateTimeHour).toHaveTextContent("0");
        expect(dateTimeMin).toHaveTextContent("0");
        expect(dateTimeSec).toHaveTextContent("0");
    });
});
