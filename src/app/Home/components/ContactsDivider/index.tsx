import * as React from 'react';
import ContactsDividerStyles from './styles';
import { Paper, Typography } from '@material-ui/core';

interface AppContactsDividerProps {
  divider: string;
}

const ContactsDivider: React.StatelessComponent<AppContactsDividerProps> = ({divider}) => {
  return (
    <ContactsDividerStyles>
      <Paper className="divider" >
        <Typography variant="headline" component="p" className="title">
          {divider.toUpperCase()}
        </Typography>
      </Paper>
    </ContactsDividerStyles>
  );
};

export default ContactsDivider;
