import { FC } from "react";
interface IDateTime {
    disableTypes?: boolean;
    value: number;
    type: string;
}
declare const DateTime: FC<IDateTime>;
export default DateTime;
