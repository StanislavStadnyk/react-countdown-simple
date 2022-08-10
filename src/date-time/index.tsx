import React, { FC } from "react";
import PropTypes from "prop-types";

interface IDateTime {
  disableTypes?: boolean;
  value: number;
  type: string;
}

const DateTime: FC<IDateTime> = ({ value, type, disableTypes }) => {
  const transformedValue = value.toString().padStart(2, "0");
  const dataTestsId = `date-time-${type.toLowerCase()}`;

  return (
    <strong
      className="react-countdown-simple__date-time"
      data-testid={dataTestsId}
    >
      <span>{transformedValue}</span>
      {!disableTypes && type}
    </strong>
  );
};

DateTime.propTypes = {
  disableTypes: PropTypes.bool,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default DateTime;
