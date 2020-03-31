import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })


 it('renders without crashing', () => {
  shallow(<App />);
 });
