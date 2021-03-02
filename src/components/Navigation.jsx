import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem, Button, ButtonGroup, Dropdown,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const renderButton = ({
  active, name, removable, onClick,
}) => {
  const className = cn(
    'nav-link',
    'text-left',
    'btn-block',
    'shadow-none',
    { 'flex-grow-1': removable, 'mb-2': !removable },
  );

  return (
    <Button
      type="button"
      variant={active ? 'primary' : 'light'}
      className={className}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

const renderGroup = (props) => (
  <Dropdown as={ButtonGroup} className="btn-block mb-2">
    {renderButton(props)}
    <Dropdown.Toggle
      variant={props.active ? 'primary' : 'light'}
      className="flex-grow-0 shadow-none"
      split
    />
    <Dropdown.Menu>
      <Dropdown.Item onClick={props.onRename}>{props.t('rename')}</Dropdown.Item>
      <Dropdown.Item onClick={props.onRemove}>{props.t('remove')}</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const Navigation = ({
  items, onClick, onRename, onRemove,
}) => {
  const { t } = useTranslation();

  const handleClick = (id) => () => onClick(id);
  const handleRename = (props) => () => onRename(props);
  const handleRemove = (props) => () => onRemove(props);

  return (
    <ul className="nav flex-column nav-pills nav-fill">
      {items.map(({
        id, name, removable, ...rest
      }) => {
        const props = {
          name,
          removable,
          onClick: handleClick(id),
          onRename: handleRename({ id, name }),
          onRemove: handleRemove({ id, name }),
          t,
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
    }),
  ),
  onClick: PropTypes.func,
  onRename: PropTypes.func,
  onRemove: PropTypes.func,
};

Navigation.defaultProps = {
  items: [],
  onClick: () => { },
  onRename: () => { },
  onRemove: () => { },
};

export default Navigation;
