// import { render, screen } from "@testing-library/react";
// import React from "react";
// import Countdown from "./index";
//
// describe("CountdownTimer Component", () => {
//   it('Should render "00 D : 01 H : 00 M : 00 S"', () => {
//     const targetDate = new Date(
//       new Date().setHours(new Date().getHours() + 1)
//     ).toISOString();
//     render(<Countdown targetDate={targetDate} />);
//
//     const dateTimeHour = screen.getByTestId("date-time-h");
//     const dateTimeMin = screen.getByTestId("date-time-m");
//     const dateTimeSec = screen.getByTestId("date-time-s");
//
//     expect(dateTimeHour).toHaveTextContent("01");
//     expect(dateTimeMin).toHaveTextContent("00");
//     expect(dateTimeSec).toHaveTextContent("00");
//   });
//
//   it('Should render "00 D : 00 H : 00 M : 00 S" for current date', () => {
//     const currentDate = new Date().toISOString();
//     render(<Countdown targetDate={currentDate} />);
//
//     const dateTimeHour = screen.getByTestId("date-time-h");
//     const dateTimeMin = screen.getByTestId("date-time-m");
//     const dateTimeSec = screen.getByTestId("date-time-s");
//
//     expect(dateTimeHour).toHaveTextContent("0");
//     expect(dateTimeMin).toHaveTextContent("0");
//     expect(dateTimeSec).toHaveTextContent("0");
//   });
//
//   it('Should render "00 D : 00 H : 00 M : 00 S" for past date', () => {
//     const pastDate = new Date("2000-1-1").toISOString();
//     render(<Countdown targetDate={pastDate} />);
//
//     const dateTimeHour = screen.getByTestId("date-time-h");
//     const dateTimeMin = screen.getByTestId("date-time-m");
//     const dateTimeSec = screen.getByTestId("date-time-s");
//
//     expect(dateTimeHour).toHaveTextContent("0");
//     expect(dateTimeMin).toHaveTextContent("0");
//     expect(dateTimeSec).toHaveTextContent("0");
//   });
// });
