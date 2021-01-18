import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ items, onClick }) => {
  const handleClick = (name) => () => onClick(name);

  return (
    <ul className="nav flex-column nav-pills nav-fill">
      {items.map(({ id, active, name }) => (
        <li key={id} className="nav-item">
          <button
            type="button"
            className={`nav-link mb-2 text-left btn btn-block ${
              active ? "btn-primary" : "btn-light"
            }`}
            onClick={handleClick(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      active: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

Navigation.defaultProps = {
  items: [],
  onClick: () => {},
};

export default Navigation;
