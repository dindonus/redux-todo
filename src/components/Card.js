import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => (
  <div className="Card">
    {props.children}
  </div>
);

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
