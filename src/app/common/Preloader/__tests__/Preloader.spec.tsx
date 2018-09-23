import * as React from 'react';
import { shallow } from 'enzyme';
import Preloader from '../../Preloader';
import { mainTheme } from '../../../../styles/themes';

it('About renders without crashing', () => {
  const node = shallow(<Preloader/>);
  expect(shallow(<Preloader/>)).toMatchSnapshot();
});
