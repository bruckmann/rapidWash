import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FcAlarmClock } from 'react-icons/fc';
import Container from '../container/';
import InputGroup from '../inputGroup';
import DatePickerComponent from '../datePicker';


import './styles.css';

const FormComponent = () => {

  return (
    <Container>
      <div className="header">
        <p>
          Agende seu horário&nbsp;&nbsp;
          <FcAlarmClock />
        </p>
      </div>
      <form>
        <InputGroup name="name" label="Seu nome" type="text" isRequired />
        <InputGroup
          name="brand"
          label="Marca do veículo"
          type="text"
          isRequired
        />
        <InputGroup
          name="model"
          label="Modelo do veículo"
          type="text"
          isRequired
        />
        <InputGroup name="licensePlate" label="Placa do veículo" type="text" />
        <InputGroup
          name="telephone"
          label="Telefone para contato"
          type="number"
        />
        <DatePickerComponent />
        <InputGroup
          name="time"
          label="Horário do agendamento"
          type="time"
          isRequired
        />
        <Button colorScheme="red" className="button">Agendar!</Button>
      </form>
    </Container>
  );
};

export default FormComponent;
