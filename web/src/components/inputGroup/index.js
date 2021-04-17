import React from 'react';
import { FormLabel, Input, FormControl } from '@chakra-ui/react';
import './styles.css'

const InputGroup = ({name, label, type, onChange, isRequired }) => {
   
  return(
    <FormControl className="input-group" isRequired={isRequired ? true : false}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input type={type} name={name} onChange={(e) => onChange(e)} />
    </FormControl>
  );
};

export default InputGroup;