import * as React from 'react';
// import { TextField  } from '@material-ui/core';
// import { Add, Check, Close } from '@material-ui/icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Fieldset = (props: any) => {
  const {label, name} = props;
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...props} />
      <ErrorMessage name={name}/>
    </React.Fragment>
  );

};

class AddContactForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phones: [''],
    };
  }

  /* private handleAddPhone = () => {
     const { phones } = this.state;
     this.setState({phones: [...phones, '']});
   }

   private handleChange = (name: string) => (event: any) => {
     this.setState({[name]: escape(event.target.value)});
   }*/

  public render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            first: '',
            lastName: '',
            animal: '',
            website: '',
          }}
          onSubmit={(values: any) => {
            setTimeout(() => console.log(JSON.stringify(values, null, 2)), 500);
          }}
          render={({isSubmitting, handleReset}: {isSubmitting: any, handleReset: any}) => (
            <Form>
              <Fieldset
                name="first"
                type="text"
                label="First name"
                placeholder="Your first name..."
              />
              <Fieldset
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Your last name..."
              />
              <button
                type="reset"
                className="secondary"
                disabled={isSubmitting}
                onClick={handleReset}
              >
                Reset
              </button>
              <button type="submit">Submit</button>
            </Form>
          )}
        />
      </div>
    );
  }

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
}

export default AddContactForm;
