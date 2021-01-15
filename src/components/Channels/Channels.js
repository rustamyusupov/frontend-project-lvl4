// @ts-check

import React from "react";
import PropTypes from "prop-types";

const Channels = ({ list }) => (
  <ul>
    {list.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

Channels.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      removable: PropTypes.bool,
    })
  ),
};

Channels.defaultProps = {
  list: [],
};

export default Channels;
