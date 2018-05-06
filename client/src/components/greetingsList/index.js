import React from 'react';
import PropTypes from 'prop-types';

const GreetingsList = ({ greetings }) =>
  <div>
    <ul>
      {greetings.map(greeting => <li key={greeting.name}>{greeting.name}</li>) }
    </ul>
  </div>;

GreetingsList.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};


export default GreetingsList;
