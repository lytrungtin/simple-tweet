// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Errors from '../Errors';

type Props = {
  handleSubmit: () => void,
  onSubmit: () => void,
  submitting: boolean,
  errors: any,
}

class NewTweetForm extends Component {
  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting, errors } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)} className="form-inline">
        <div className="row">
          <div className="form-group col-sm-12">
            <div className="input-group">
              <Field
                name="message"
                placeholder="What's happening?"
                component="textarea"
                className="form-control"
                style={{ width: '100%' }}
              />
              <div className="input-group-btn">
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Tweeting...' : 'Tweet'}
                  </button>
              </div>
            </div>
            <Errors name="message" errors={errors} />
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
