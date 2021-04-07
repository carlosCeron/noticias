import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#">{titulo}</a>
        </nav>
    );
};

Header.propType = {
    titulo: PropTypes.string.isRequired
}

export default Header;
