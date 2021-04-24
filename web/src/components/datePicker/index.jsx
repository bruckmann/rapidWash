import React from 'react';
import { FormLabel, FormControl, Input } from '@chakra-ui/react';
import moment from 'moment';

import './styles.css';

const DatePickerComponent = ({ onChange, ...rest}) => {
  const date = moment().format('yyyy-MM-DD');
  return (
    <FormControl className="input-group" isRequired>
      <FormLabel>Data de agendamento</FormLabel>
      <Input
        type="date"
        min={date}
        {...rest}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </FormControl>
  );
};

export default DatePickerComponent;
