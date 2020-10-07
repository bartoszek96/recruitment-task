import React, { useState } from 'react';
import { StyledSection } from './Link1.styles';

const Link1 = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    setValue(event.target.value);
  }

  const handleButtonClick = () => {
    setTimeout(() => {
      setResult(value * value);
    }, 1000)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", placeItems: "center" }}>
      <StyledSection>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta molestiae consectetur a dignissimos autem ad corrupti, quis nisi totam quos vitae itaque facere! Quos minus odit explicabo suscipit nemo iusto.
    </StyledSection>
      <input placeholder="wpisz liczbę" value={value} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Oblicz</button>
      <div>
        {result}
      </div>
    </div>
  );
}

export default Link1;
