import styled from 'styled-components';

const ContactStyles = styled.div`
  margin: .5rem 0;
  
  .card-action {
    width: 100%;
  }
  .phones-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
  }
  
  .contact-content {
    display: none;
    padding: 1.5rem;
    &.expanded {
      display: block;
    }
    &:last-child {
      padding-bottom: 1.5rem;
    }
  }
`;

export default ContactStyles;
