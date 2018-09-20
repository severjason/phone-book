import * as React from 'react';
import { TextField, Tooltip, IconButton  } from '@material-ui/core';
import { escape } from 'lodash';
import { Add, Check, Close } from '@material-ui/icons';

class AddContactForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phones: [''],
    };
  }

  private getInput: any = (phone: string, index: number) => {
    return (
      <div key={index}>
        input {phone}
      </div>
    );
  }

  private handleAddPhone = () => {
    const { phones } = this.state;
    this.setState({phones: [...phones, '']});
  }

  private handleChange = (name: string) => (event: any) => {
    this.setState({[name]: escape(event.target.value)});
  }

  public render() {
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
          <IconButton
            className={`phone-add-button`}
            onClick={this.handleAddPhone}
          >
            <Add className="add-category-toggle-icon"/>
          </IconButton>
        </Tooltip>
        <div>
          <IconButton
            className="add-category-button"
          >
            <Check className="add-category-icon"/>
          </IconButton>
          <IconButton >
            <Close className="close-add-category-icon"/>
          </IconButton>
          {this.state.phones.map((phone: string, index: number) => this.getInput(phone, index))}
        </div>
      </form>
    );
  }
}

export default AddContactForm;
