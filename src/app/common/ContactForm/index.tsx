import * as React from 'react';
import { Field, FieldArray, InjectedFormProps, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import renderPhones from './renderPhones';

class ContactForm extends React.Component<InjectedFormProps<any>, {}> {

  public render() {
    const { pristine, reset, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="First name"/>
        <Field name="lastName" type="text" component={renderField} label="Last Name"/>
        <FieldArray name="phones" component={renderPhones}/>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'fieldArrays',
  validate,
  onSubmit: (values: any) => console.log(values),
})(ContactForm);