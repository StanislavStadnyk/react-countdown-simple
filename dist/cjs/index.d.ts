import { FC, ReactElement } from "react";
import { TFormatType } from "./types";
import "./styles.css";
interface ICountdownTimer {
    disableTypes?: boolean;
    formatType?: TFormatType;
    targetDate: string;
    renderer?: (renderProps: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }) => ReactElement;
}
declare const Countdown: FC<ICountdownTimer>;
export default Countdown;
