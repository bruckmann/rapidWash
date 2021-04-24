import React from 'react';
import { RadioGroup, Radio, FormLabel } from '@chakra-ui/react';

import './styles.css';

const RadioButton = ({ onChange, disabled }) => {
  return (
    <RadioGroup onChange={(value) => onChange(value)}>
      <FormLabel>Este número possuí whatsapp?</FormLabel>
      <div className="radioContainer" direction="row">
        <Radio value="sim" disabled={disabled}>
          Sim
        </Radio>
        <Radio value="nao" disabled={disabled}>
          Não
        </Radio>
      </div>
    </RadioGroup>
  );
};


export default RadioButton;
