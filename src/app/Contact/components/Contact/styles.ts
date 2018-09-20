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
    padding: 1rem;
  }
  .phones-header {
    padding: .5rem 1.5rem;
    font-weight: 600;
  }
  .buttons-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .contact-content {
    display: none;
    padding: 0;
    &.expanded {
      display: block;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export default ContactStyles;
