import React, { FC, Fragment } from "react";
import PropTypes from "prop-types";

import DateTime from "./date-time";
import { getType, useCountdown } from "./helper";
import {TFormatType, TRenderProps} from "./types";

import "./styles.css";

interface ICountdownTimer {
  disableTypes?: boolean;
  formatType?: TFormatType;
  targetDate: string;
  renderer?: TRenderProps;
}

const Countdown: FC<ICountdownTimer> = ({
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

  const renderColon = (index: number) =>
    index !== dateData.length - 1 && (
      <strong className="react-countdown-simple__colon">:</strong>
    );

  const renderDates = dateData.map((value, index) => (
    <Fragment key={index}>
      <DateTime value={value} type={types[index]} disableTypes={disableTypes} />
      {renderColon(index)}
    </Fragment>
  ));

  return (
    <div className="react-countdown-simple">
      {renderer ? renderer(rendererProps) : renderDates}
    </div>
  );
};

Countdown.propTypes = {
  disableTypes: PropTypes.bool,
  formatType: PropTypes.oneOf([
    "d_h_m_s",
    "D_H_M_S",
    "dd_hh_mm_ss",
    "DD_HH_MM_SS",
    undefined,
  ]),
  renderer: PropTypes.func,
  targetDate: PropTypes.string.isRequired,
};

export default Countdown;
