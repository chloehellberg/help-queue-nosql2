import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  console.log("props ", props);
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          defaultValue={props.ticket ? props.ticket.names : "" }
          placeholder='Pair Names' />
        <br />
        <input
          type='text'
          name='location'
          defaultValue={props.ticket ? props.ticket.location : ""}
          placeholder='Location' />
        <br />
        <textarea
          name='issue'
          defaultValue={props.ticket ? props.ticket.issue : ""}
          placeholder='Describe your issue.' />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;