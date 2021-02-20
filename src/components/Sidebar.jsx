import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { channelActions, channelSelectors } from 'slices/channels';
import { modalActions } from 'slices/modal';
import Navigation from 'components/Navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(channelSelectors.getChannels);

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
