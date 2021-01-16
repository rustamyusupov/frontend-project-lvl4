import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ items }) => (
  <ul className="nav flex-column nav-pills nav-fill">
    {items.map(({ id, name }) => (
      <li key={id} className="nav-item">
        <button
          type="button"
          className="nav-link mb-2 text-left btn btn-primary btn-block"
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

Navigation.defaultProps = {
  items: [],
};

export default Navigation;
