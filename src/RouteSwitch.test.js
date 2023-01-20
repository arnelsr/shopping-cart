import { render, screen } from '@testing-library/react';
import RouteSwitch from './RouteSwitch';

describe('Route Switch',()=>{
  it('renders snapshot',()=>{
    //container
    const {container}=render(<RouteSwitch/>);
    expect(container).toMatchSnapshot();
  });
});


