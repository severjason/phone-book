import * as React from 'react';
import AlertDialogStyles from './styles';
import { Button, Popup } from 'semantic-ui-react';

interface AlertDialogProps {
  onClose: () => void;
  onDelete: () => void;
  content: any;
}

const AlertDialog: React.StatelessComponent<AlertDialogProps> = ({onClose, onDelete, content}) => (
  <AlertDialogStyles>
    <Popup
      wide={true}
      trigger={content}
      on="click"
      content={<Button color="green" content="Confirm" fluid={true} onClick={onDelete} />}
      hoverable={true}
    />
  </AlertDialogStyles>

);

export default AlertDialog;
