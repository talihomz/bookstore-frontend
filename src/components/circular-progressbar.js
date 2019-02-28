import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = (props) => {
    const { value } = props;
    const valueClass = value < 50 ? `p${value}` : `over50 p${value}`;

    return <div className={ `progress-circle ${valueClass}` }>
        <div className="left-half-clipper">
            <div className="first50-bar"></div>
            <div className="value-bar"></div>
        </div>
    </div>
};

CircularProgressBar.propTypes = {
    value: PropTypes.string.isRequired
}

export default CircularProgressBar;