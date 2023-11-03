import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import styled, { css } from "styled-components";

const Button = styled.button`
border: 1px solid teal;
padding: 10px;
color: ${({ color }) => color || "teal"};
background: white;
margin: 20px;
cursor: pointer;

${({ primary }) => primary && css`
background: teal;
color: white;
`}

&:hover {
background: greenyellow;
color: black;
}

@media (max-width: 767px) {
  width: 100%;
  margin: 0;
}
`;

const PrimaryButton = styled(Button)`
border: 2px dotted blue;
`;

const Counter = styled.p`
margin-left: 20px;
color: blueviolet;
font-weight: bold;
`;


function App() {

  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount(count => count + 1);

    }, 1000);
  }, []);

  useEffect(() => {
    document.title = `Licznik: ${counter}`;
  }, [counter]);


  const stopCounter = () => clearInterval(intervalId.current);

  return (
    <>
      <Counter>{count}</Counter>
      <Button onClick={stopCounter}>Zatrzymaj licznik</Button>
      <Counter> {counter} </Counter>
      <Button primary onClick={() => setCounter(counter => counter + 1)}>Zwiększ licznik</Button>
      <p>
        <Button color="red">2 sposób na zapis styled components</Button>
      </p>
      <p>
        <PrimaryButton>3 sposób na zapis</PrimaryButton>
      </p>
    </>
  );
};

export default App;
