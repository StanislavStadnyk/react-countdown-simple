import { FC } from 'react';
import { TFormatType, TRenderProps } from './types';
import './styles.css';
interface ICountdown {
    disableTypes?: boolean;
    formatType?: TFormatType;
    targetDate: string;
    renderer?: TRenderProps;
}
declare const Countdown: FC<ICountdown>;
export default Countdown;
