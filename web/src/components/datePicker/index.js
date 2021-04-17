import React from 'react';
import { FormLabel, FormControl, Input } from '@chakra-ui/react';
import moment from 'moment';

import './styles.css'

const DatePickerComponent = () => {
  
  const date = moment().format('yyyy-MM-DD'); 
  console.log(date);
  return(
    <FormControl className="input-group" isRequired>
      <FormLabel>Data de agendamento</FormLabel>
      <Input type="date" min={date} onChange={(e) => { console.log(e.target.value)}} />
    </FormControl>
  );
};

export default DatePickerComponent;