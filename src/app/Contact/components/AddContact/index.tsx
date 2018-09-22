import * as React from 'react';
import { Field, FieldArray, reduxForm, InjectedFormProps } from 'redux-form';
import validate from './validate';

const renderField = (props: any) => {
  const { input, label, type, meta: { touched, error } } = props;
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
const renderPhones = (props: any) => {
  const { fields, meta: { error } } = props;
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>Add Phone</button>
      </li>
      {fields.map((phone: any, index: number) =>
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}
          >
            {`Remove Phone No.${index + 1}`}
          </button>
          <Field
            name={phone}
            type="text"
            component={renderField}
            label={`Phone No.${index + 1}`}
          />
        </li>
      )}
      {error && <li className="error">{error}</li>}
    </ul>
  );
};

class FieldArraysForm extends React.Component<InjectedFormProps<any>, {}> {

  public render() {
    const { pristine, reset, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="First name"/>
        <Field name="lastName" type="text" component={renderField} label="Last Name"/>
        <FieldArray name="phones" component={renderPhones}/>
        <div>
          <button type="submit" disabled={submitting || pristine}>Submit</button>
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
})(FieldArraysForm);

  /*public render() {
    return (
      <form noValidate={false} autoComplete="off">
        <TextField
          id="outlined-name"
          label="First name"
          className={'first-name'}
          value={this.state.firstName}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Last name"
          className={'last-name'}
          value={this.state.lastName}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <Tooltip title="Add new category">
          <IconButton className={`phone-add-button`} onClick={this.handleAddPhone}>
            <Add className="add-category-toggle-icon"/>
          </IconButton>
        </Tooltip>
        <div>
          <IconButton className="add-category-button">
            <Check className="add-category-icon"/>
          </IconButton>
          <IconButton >
            <Close className="close-add-category-icon"/>
          </IconButton>
          {this.state.phones.map((phone: string, index: number) => this.getInput(phone, index))}
        </div>
      </form>
    );
  }*/
