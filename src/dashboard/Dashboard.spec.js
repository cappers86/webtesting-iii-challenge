// Test away
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Display from '../display/Display';
import Controls from '../controls/Controls';
import * as rtl from '@testing-library/react';

import DashBoard from './Dashboard';


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
let Open = () =>{
    return wrapper.queryByText('Open');
}
let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}

beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<DashBoard />)
});

it('renders without crashing', () => {
  wrapper.debug();
  expect(wrapper.container).toMatchSnapshot();
});

it ('renders a "Unlocked" text node', () => {
   
    expect(Unlocked()).toBeVisible();
});

it ('renders a "Open" text node', () => {
    expect(Open()).toBeDefined();
    expect(Open()).toBeVisible();
});

it ('renders a "Close gate"', () => {
   
    expect(CloseGate()).toBeVisible();
   
});

it ('renders a "LockGate" text node', () => {
    expect(LockGate()).toBeDefined();
    
});

it (' "Locked and open" ', () => {
    expect(Locked).toBeDefined();
    expect(Open).toBeDefined();
});

it ('button is off', ()=>{
    const lockButton = wrapper.getByText('Lock Gate');
    const closeGate = wrapper.getByText('Close Gate');

    expect(lockButton).toBeVisible();
    
    expect(closeGate).toBeVisible();
});

it ('default gate open', () => {
    const lockButton = wrapper.getByText('Lock Gate');
    const openButton = wrapper.getByText('Close Gate');
    expect(lockButton.disabled).toBe(true);
    expect(openButton.disabled).toBe(false)
});


it('gate open', ()=> {
    
    rtl.fireEvent.click(CloseGate())

    expect(OpenGate()).toBeVisible()
});



 


  
  



 




