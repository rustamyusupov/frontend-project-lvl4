import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { channelActions } from 'modules/Channels/slice';
import { getChannels } from 'modules/Channels/selectors';
import { modalActions } from 'modules/Modal/slice';
import Navigation from 'components/Navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(getChannels);

  const handlePlusClick = () => dispatch(modalActions.show({ type: 'add' }));
  const handleChannelClick = (id) => dispatch(channelActions.setCurrentChannel(id));
  const handleShow = (type) => (data) => dispatch(modalActions.show({ type, data }));

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
