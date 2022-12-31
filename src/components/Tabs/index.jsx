import { useState } from 'react';
import { ButtonGroup, Tab } from './styled.tw';

const types = ['Fullstack', 'Data']

export default function Tabs (props) {
  const {children} = props
  // setting our state
  const [active, setActive] = useState(types[0])
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      {/* This is where we'll call our carousel component */}
      {children}
    </>
  );
}
