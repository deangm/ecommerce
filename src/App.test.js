import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount } from 'enzyme';
import {
  BrowserRouter as Router, 
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe("App", () => {
  
  it("should render loading when loading is true", () => {
    const wrapper = mount(
      <App /> 
      );
      wrapper.setState({ loading: true });
      expect(wrapper.contains(<div>Loading</div>)).toBe(true);
  })
  it("should contain correct nav links when finished loading", () => {
    const wrapper = mount(
      <App /> 
      );
      wrapper.setState({ loading: false });
      expect(wrapper.containsMatchingElement(<Link to="/ProductsPage">Products</Link>)).toBe(true);
      expect(wrapper.containsMatchingElement(<Link to="/Cart">Cart</Link>)).toBe(true);
      expect(wrapper.containsMatchingElement(<Link to="/Login">Login</Link>)).toBe(true);
  })
})