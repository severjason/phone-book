import * as React from 'react';
import { HomeContainer } from '../HomeContainer';
import { shallow } from 'enzyme';
import { AppContact } from '../../../Contact/interfaces';
import { AppHomeDispatch, AppHomeProps } from '../../interfaces';

describe('Home container test', () => {
  const mockContacts: AppContact[] = [
    {
      id: 1,
      name: {
        first: 'man',
        last: 'awesome',
      },
      phone: [],
      expanded: false,
    },
    {
      id: 2,
      name: {
        first: 'man',
        last: 'awesome',
      },
      phone: [],
      expanded: false,
    }
  ];

  it('ConnectedHomeContainer should renders without crashing with initial state', () => {
    const mockProps: AppHomeProps & AppHomeDispatch = {
      isLoading: false,
      contacts: [],
      error: null,
      fetchContacts: jest.fn(),
      toggleContact: jest.fn(),
      deleteContact: jest.fn(),
    };
    const wrapper = shallow(<HomeContainer {...mockProps}/>);
    const instance = wrapper.instance();
    expect(wrapper).toMatchSnapshot();
    // @ts-ignore
    expect(instance.props.fetchContacts).toBeCalled();
  });

  it('ConnectedHomeContainer should renders without crashing with contacts', () => {
    const mockProps: AppHomeProps & AppHomeDispatch = {
      isLoading: false,
      contacts: mockContacts,
      error: null,
      fetchContacts: jest.fn(),
      toggleContact: jest.fn(),
      deleteContact: jest.fn(),
    };
    const wrapper = shallow(<HomeContainer {...mockProps}/>);
    const instance = wrapper.instance();
    expect(wrapper).toMatchSnapshot();
    // @ts-ignore
    expect(instance.props.fetchContacts).not.toBeCalled();
  });

  it('ConnectedHomeContainer should renders with error', () => {
    const mockProps: AppHomeProps & AppHomeDispatch = {
      isLoading: false,
      contacts: [],
      error: 'error',
      fetchContacts: jest.fn(),
      toggleContact: jest.fn(),
      deleteContact: jest.fn(),
    };
    const wrapper = shallow(<HomeContainer {...mockProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});