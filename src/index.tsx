import React, { FC, Fragment } from 'react';

// components
import DateTime from './date-time';
import Colon from './colon';

// helper
import { getType, useCountdown } from './helper';

// types
import { TFormatType, TRenderProps } from './types';

// styles
import './styles.css';

interface ICountdown {
  disableTypes?: boolean;
  formatType?: TFormatType;
  targetDate: string;
  renderer?: TRenderProps;
}

const Countdown: FC<ICountdown> = ({
  disableTypes,
  formatType,
  targetDate,
  renderer,
}) => {
  const dateData = useCountdown(targetDate);
  const types = getType(formatType);

  const rendererProps = {
    days: dateData[0],
    hours: dateData[1],
    minutes: dateData[2],
    seconds: dateData[3],
  };

  const renderDates = dateData.map((value, index) => (
    <Fragment key={index}>
      <DateTime value={value} type={types[index]} disableTypes={disableTypes} />
      <Colon data={dateData} index={index} />
    </Fragment>
  ));

  return (
    <div className="react-countdown-simple">
      {renderer ? renderer(rendererProps) : renderDates}
    </div>
  );
};

export default Countdown;
