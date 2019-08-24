// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

type Props = {
  handleSubmit: () => void,
  onSubmit: () => void,
  submitting: boolean,
}

class NewTweetForm extends Component {
  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)} className="form-inline">
        <div className="row">
          <div className="form-group col-sm-10">
            <div className="input-group">
              <Field
                name="message"
                type="text"
                placeholder="Message"
                component="input"
                className="form-control"
              />  
              <button type="submit" className="btn btn-default" disabled={submitting}>
                {submitting ? 'Tweeting...' : 'Tweet'}
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'newTweet',
  validate,
})(NewTweetForm);
