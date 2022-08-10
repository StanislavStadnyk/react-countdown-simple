import React from "react";
import PropTypes from "prop-types";
var DateTime = function (_a) {
    var value = _a.value, type = _a.type, disableTypes = _a.disableTypes;
    var transformedValue = value.toString().padStart(2, "0");
    var dataTestsId = "date-time-".concat(type.toLowerCase());
    return (React.createElement("strong", { className: "react-countdown-simple__date-time", "data-testid": dataTestsId },
        React.createElement("span", null, transformedValue),
        !disableTypes && type));
};
DateTime.propTypes = {
    disableTypes: PropTypes.bool,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};
export default DateTime;
