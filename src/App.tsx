import React, { useState } from 'react';
import Password from './components/Password';
import PasswordSettings from './components/PasswordSettings';
import { PasswordGenerator } from './types/types';
import styled from 'styled-components';

const PasswordApplication = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem auto;
  padding: 4rem;
  background-color: #494454;
  max-width: 540px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #b1a6c9;
  color: #f7ebff;
  font-family: 'Combo', cursive;
  font-size: 2rem;
  height: 700px;
`;

function App() {
  const [password, setPassword] = useState<string>('');

  const validateAmounts = (
    numberToValidate: number,
    higerThan: number,
    lowerThan: number
  ) => {
    if (numberToValidate > higerThan && numberToValidate < lowerThan) {
      return true;
    } else {
      return false;
    }
  };

  const createPassword: PasswordGenerator = (
    length,
    numbers,
    bigLettrers,
    specialChar
  ) => {
    if (!validateAmounts(length, 3, 25)) {
      alert('Amount of symbols should be greater than 3, and lower than 20');
      return null;
    }
    let password = [];
    const listOfLetters = 'abcdefghijklmnopqrstuvwxyz';
    const listOfBigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const listOfNumbers = '0123456789';
    const listOfSpecialChar = '@!$#%^*()_+?/';

    let searchingScope = listOfLetters;

    if (bigLettrers === true) {
      searchingScope += listOfBigLetters;
    }

    if (numbers === true) {
      searchingScope += listOfNumbers;
    }

    if (specialChar === true) {
      searchingScope += listOfSpecialChar;
    }

    for (let i = 0; i < length; i++) {
      const addToPassword =
        searchingScope[Math.floor(Math.random() * searchingScope.length + 1)];
      password.push(addToPassword);
    }

    setPassword(password.join(''));
  };

  return (
    <PasswordApplication>
      <PasswordSettings passwordGenerator={createPassword} />
      <Password generatedPassword={password} />
    </PasswordApplication>
  );
}

export default App;
