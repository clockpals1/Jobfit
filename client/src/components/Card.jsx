import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image = null, content }) => {
  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Card;
