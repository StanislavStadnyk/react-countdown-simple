import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// components
import DateTime from './date-time';
import Colon from './colon';
// helper
import { getType, useCountdown } from './helper';
// styles
import './styles.css';
var Countdown = function (_a) {
    var disableTypes = _a.disableTypes, formatType = _a.formatType, targetDate = _a.targetDate, renderer = _a.renderer;
    var dateData = useCountdown(targetDate);
    var types = getType(formatType);
    var rendererProps = {
        days: dateData[0],
        hours: dateData[1],
        minutes: dateData[2],
        seconds: dateData[3],
    };
    var renderDates = dateData.map(function (value, index) { return (React.createElement(Fragment, { key: index },
        React.createElement(DateTime, { value: value, type: types[index], disableTypes: disableTypes }),
        React.createElement(Colon, { data: dateData, index: index }))); });
    return (React.createElement("div", { className: "react-countdown-simple" }, renderer ? renderer(rendererProps) : renderDates));
};
Countdown.propTypes = {
    disableTypes: PropTypes.bool,
    formatType: PropTypes.oneOf(['d_h_m_s', 'D_H_M_S', 'dd_hh_mm_ss', 'DD_HH_MM_SS', undefined]),
    renderer: PropTypes.func,
    targetDate: PropTypes.string.isRequired,
};
export default Countdown;
