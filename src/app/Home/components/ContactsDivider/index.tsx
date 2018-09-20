import * as React from 'react';
import ContactsDividerStyles from './styles';
import { Message } from 'semantic-ui-react';

interface AppContactsDividerProps {
  divider: string;
}

const ContactsDivider: React.StatelessComponent<AppContactsDividerProps> = ({divider}) => {
  return (
    <ContactsDividerStyles>
      <Message >
        <p className="title">
          {divider.toUpperCase()}
        </p>
      </Message>
    </ContactsDividerStyles>
  );
};

export default ContactsDivider;
