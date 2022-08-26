import React, { FC } from 'react';

interface IColon {
  index: number;
  data: number[];
}

const Colon: FC<IColon> = ({ index, data }) =>
  index !== data.length - 1 ? (
    <strong className="react-countdown-simple__colon">:</strong>
  ) : null;

export default Colon;
