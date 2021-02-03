import React from "react";
import PropTypes from "prop-types";
import { NavItem, Button, ButtonGroup, Dropdown } from "react-bootstrap";

const renderButton = ({ active, name, removable, onClick }) => (
  <Button
    type="button"
    variant={active ? "primary" : "light"}
    className={`text-left btn-block shadow-none${
      removable ? " flex-grow-1" : " mb-2"
    }`}
    onClick={onClick}
  >
    {name}
  </Button>
);

const renderGroup = (props) => (
  <Dropdown as={ButtonGroup} className="btn-block mb-2">
    {renderButton(props)}
    <Dropdown.Toggle
      variant={props.active ? "primary" : "light"}
      className="flex-grow-0 shadow-none"
      split
    />
    <Dropdown.Menu>
      <Dropdown.Item onClick={props.onRename}>Rename</Dropdown.Item>
      <Dropdown.Item onClick={props.onRemove}>Remove</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const Navigation = ({ items, onClick, onRename, onRemove }) => {
  const handleClick = (id) => () => onClick(id);
  const handleRename = (id) => () => onRename(id);
  const handleRemove = (id) => () => onRemove(id);

  return (
    <ul className="nav flex-column nav-pills nav-fill">
      {items.map(({ id, removable, ...rest }) => {
        const props = {
          removable,
          onClick: handleClick(id),
          onRename: handleRename(id),
          onRemove: handleRemove(id),
          ...rest,
        };

        return (
          <NavItem key={id}>
            {removable ? renderGroup(props) : renderButton(props)}
          </NavItem>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      active: PropTypes.bool,
      name: PropTypes.string,
      removable: PropTypes.bool,
    })
  ),
  onClick: PropTypes.func,
  onRename: PropTypes.func,
  onRemove: PropTypes.func,
};

Navigation.defaultProps = {
  items: [],
  onClick: () => {},
  onRename: () => {},
  onRemove: () => {},
};

export default Navigation;
