import React from 'react';
import { RadioGroup, Radio, Stack, FormLabel } from '@chakra-ui/react';
import './styles.css';

const RadioButton = ({ onChange }) => {
  return (
    <RadioGroup onChange={(value) => onChange(value)}>
      <FormLabel>Este número possuí whatsapp?</FormLabel>
      <Stack className="radioButton" direction="row">
        <Radio value="sim">Sim</Radio>
        <Radio value="nao">Não</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioButton;
