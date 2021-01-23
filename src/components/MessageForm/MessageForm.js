import React from "react";
import PropTypes from "prop-types";

const MessageForm = ({ onSubmit }) => (
  <form noValidate onSubmit={onSubmit}>
    <div className="form-group">
      <div className="input-group">
        <input name="body" aria-label="body" className="mr-2 form-control" />
        <button aria-label="submit" type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="d-block invalid-feedback">&nbsp;</div>
      </div>
    </div>
  </form>
);

MessageForm.propTypes = {
  onSubmit: PropTypes.func,
};

MessageForm.defaultProps = {
  onSubmit: () => {},
};

export default MessageForm;
