import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalKit } from "react-bootstrap";

const Modal = ({ content, show, title, onClose }) => (
  <ModalKit show={show} onHide={onClose}>
    <ModalKit.Header closeButton>
      <ModalKit.Title>{title}</ModalKit.Title>
    </ModalKit.Header>
    <ModalKit.Body>{content}</ModalKit.Body>
  </ModalKit>
);

Modal.propTypes = {
  content: PropTypes.node.isRequired,
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
