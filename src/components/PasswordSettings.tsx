import React, { useState } from 'react';
import styled from 'styled-components';
import { PasswordGenerator } from '../types/types';

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const NumberInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  color:#F7EBFF;
  padding: 1rem;
  margin: .4rem auto;
  box-shadow: 0.1px 0.1px 0.5px 0.5px #B1A6C9;

  &&:focus-visible {
    outline: none;
  }

  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Button = styled.button`
  background-color: transparent;
  color: #F7EBFF;
  font-size: 1rem;
  padding: 1.5rem 0.2rem;
  width: 200px;
  margin: 0 auto;
  border: none;
  box-shadow: 0.1px 0.1px 0.5px 0.5px #B1A6C9;

  &&:hover {
    background-color: #005B3D;
    transition: 0.6s;
    cursor: pointer;
    box-shadow: none;
  }
`

const PasswordSettings: React.FC<{
  passwordGenerator: PasswordGenerator;
}> = ({ passwordGenerator }) => {
  const [amountOfSymbols, setAmountOfSymbols] = useState<number>(4);
  const [useNumbers, setUseNumbers] = useState<boolean>(false);
  const [useBigLetters, setUseBigLetters] = useState<boolean>(false);
  const [useSpecialChar, setUseSpecialChar] = useState<boolean>(false);

  const toggleCheckboxSettings = (
    prevSetting: boolean,
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (prevSetting === false) {
      set(true);
    } else {
      set(false);
    }
  };

  return (
    <PasswordForm>
      <OptionWrapper>
        <label>Amount of symbols</label>
        <NumberInput
          type="number"
          value={amountOfSymbols}
          onChange={(e) => setAmountOfSymbols(parseInt(e.target.value))}
        />
      </OptionWrapper>
      <OptionWrapper>
        <label>Numbers in passowrd?</label>
        <input
          type="checkbox"
          name="numbers"
          onChange={() => toggleCheckboxSettings(useNumbers, setUseNumbers)}
        />
      </OptionWrapper>
      <OptionWrapper>
        <label>Big letters in password?</label>
        <input
          type="checkbox"
          name="bigLetters"
          onChange={() =>
            toggleCheckboxSettings(useBigLetters, setUseBigLetters)
          }
        />
      </OptionWrapper>
      <OptionWrapper>
        <label>Special char?</label>
        <input
          type="checkbox"
          name="specialChar"
          onChange={() =>
            toggleCheckboxSettings(useSpecialChar, setUseSpecialChar)
          }
        />
      </OptionWrapper>
      <Button
        onClick={(e) => {
          e.preventDefault();
          passwordGenerator(
            amountOfSymbols,
            useNumbers,
            useBigLetters,
            useSpecialChar
          );
        }}
      >
        Create the password
      </Button>
    </PasswordForm>
  );
};

export default PasswordSettings;
