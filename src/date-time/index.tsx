import React, { FC } from 'react';

interface IDateTime {
  disableTypes?: boolean;
  value: number;
  type: string;
}

const DateTime: FC<IDateTime> = ({ value, type, disableTypes }) => {
  const transformedValue = value.toString().padStart(2, '0');
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

export default DateTime;
