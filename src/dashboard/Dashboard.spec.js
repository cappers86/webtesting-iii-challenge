// Test away
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import Dash from './Dashboard';
import { exportAllDeclaration } from '@babel/types';

// react testing library requires a "cleanup" operation
// after each test
// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);

// STEP 3 take care of repetitive operations inside
// a beforeEach function

let wrapper;
let Unlocked = () =>{
    return wrapper.queryByText('Unlocked');
}


beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<Dash />)
});

it('renders without crashing', () => {
  wrapper.debug();
  expect(wrapper.container).toMatchSnapshot();
});

it ('renders a "Unlocked" text node', () => {
   
    expect(wrapper.queryByText('Unlocked')).toBeVisible();
});
