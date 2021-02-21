import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { channelActions } from 'slices/channels/slice';
import { channelsSelector } from 'slices/channels/selectors';
import { modalActions } from 'slices/modal/slice';
import Navigation from 'components/Navigation';

const Sidebar = () => {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelector);
  const { t } = useTranslation();

  const handlePlusClick = () => dispatch(modalActions.show({ type: 'add' }));
  const handleChannelClick = (id) => dispatch(channelActions.setCurrent(id));
  const handleShow = (type) => (data) => dispatch(modalActions.show({ type, data }));

  return (
    <>
      <div className="d-flex mb-2">
        <span>{t('channels')}</span>
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
