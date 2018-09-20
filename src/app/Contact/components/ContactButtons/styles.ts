import styled from 'styled-components';

const ContactButtonStyles = styled.div`
  .contact-button {
    width: 2.5rem;
    height: 2.5rem;
    
    .contact-icon {
      font-size: 1.5rem;
    }
    
    &:hover {
      .edit-icon {
        color: ${props => props.theme.colors.blueColor};
      }
      .delete-icon {
        color: ${props => props.theme.colors.redColor};
      }
      .close-icon {
        color: ${props => props.theme.colors.mainColor};
      }
    }
  }
`;

export default ContactButtonStyles;
