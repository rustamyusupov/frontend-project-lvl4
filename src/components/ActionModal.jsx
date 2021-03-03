import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { modalActions } from 'slices/modal/slice';
import modalSelector from 'slices/modal/selectors';
import { createChannel, removeChannel, renameChannel } from 'slices/channels/thunk';
import AddForm from 'components/AddForm';

import Modal from 'components/Modal';
import RemoveForm from 'components/RemoveForm';
import RenameForm from 'components/RenameForm';

const actionMap = {
  addChannel: {
    Component: AddForm,
    action: createChannel,
  },
  removeChannel: {
    Component: RemoveForm,
    action: removeChannel,
  },
  renameChannel: {
    Component: RenameForm,
    action: renameChannel,
  },
};

const ActionModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { show, type, data } = useSelector(modalSelector);

  if (!show) {
    return null;
  }

  const { Component, action } = actionMap[type];

  const handleClose = () => dispatch(modalActions.hideModal());
  const handleSubmit = (props) => dispatch(action(props));

  return (
    <Modal
      title={t(type)}
      content={(
        <Component
          id={data?.id}
          name={data?.name}
          onCancel={handleClose}
          onSubmit={handleSubmit}
        />
      )}
      onClose={handleClose}
    />
  );
};

export default ActionModal;
