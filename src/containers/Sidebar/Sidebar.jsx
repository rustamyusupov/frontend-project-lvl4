import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { setCurrentChannel } from 'modules/Channels';
import { getChannels } from 'modules/Channels/selectors';
import { show } from 'modules/Modal';
import Navigation from 'components/Navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);

  const handlePlusClick = () => dispatch(show({ type: 'add' }));
  const handleChannelClick = (id) => dispatch(setCurrentChannel(id));
  const handleShow = (type) => (data) => dispatch(show({ type, data }));

  return (
    <>
      <div className="d-flex mb-2">
        <span>Channels</span>
        <Button
          variant="link"
          className="ml-auto p-0"
          onClick={handlePlusClick}
        >
          +
        </Button>
      </div>
      <Navigation
        items={channels}
        onClick={handleChannelClick}
        onRename={handleShow('rename')}
        onRemove={handleShow('remove')}
      />
    </>
  );
};

export default Sidebar;
