import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface IColon {
  index: number;
  data: number[];
}

const Colon: FC<IColon> = ({ index, data }) =>
  index !== data.length - 1 ? <strong className="react-countdown-simple__colon">:</strong> : null;

Colon.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default Colon;
