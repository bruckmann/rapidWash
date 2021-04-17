import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FcAlarmClock } from 'react-icons/fc';
import Container from '../container/';
import InputGroup from '../inputGroup';
import DatePickerComponent from '../datePicker';
import RadioButton from '../radioButton';

import dateValidate from '../../utils/dateValidate';
import telephoneValidate from '../../utils/telephoneValidade';

import apiService from '../../services/apiService';

import './styles.css';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [licenseField, setLicenseField] = useState('');
  const [telephone, setTelephone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [ telephoneError, setTelephoneError ] = useState('');
  const [ dateError, setDateError ] = useState('');
  const [ timeError, setTimeError ] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      const isWeekDay = dateValidate(date);
      if(telephone !== ''){
        const isTelephoneValid = telephoneValidate(telephone);
        if(!isTelephoneValid){
          return setTelephoneError('Formato inválido, o número precisa conter 11 números com o DDD');
        }
      }
      if(!isWeekDay){
        return setDateError('Os agendamentos só podem ser feitos em dias de semana');
      }

    } catch (error) {
      
    }
  };

  return (
    <Container>
      <div className="header">
        <p>
          Agende seu horário&nbsp;&nbsp;
          <FcAlarmClock />
        </p>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <InputGroup
          name="name"
          label="Seu nome"
          type="text"
          isRequired
          onChange={(e) => setName(e.target.value)}
        />
        <InputGroup
          name="brand"
          label="Marca do veículo"
          type="text"
          isRequired
          onChange={(e) => setBrand(e.target.value)}
        />
        <InputGroup
          name="model"
          label="Modelo do veículo"
          type="text"
          isRequired
          onChange={(e) => setModel(e.target.value)}
        />
        <InputGroup
          n
          name="licensePlate"
          label="Placa do veículo"
          typ
          e="text"
          onChange={(e) => setLicenseField(e.target.value)}
        />
        <InputGroup
          name="telephone"
          label="Telefone para contato"
          type="number"
          onChange={(e) => setTelephone(e.target.value)}
        />
        <RadioButton onChange={(value) => setWhatsapp(value)} />
        <DatePickerComponent onChange={(e) => setDate(e.target.value)} />
        <InputGroup
          name="time"
          label="Horário do agendamento"
          type="time"
          isRequired
          onChange={(e) => setTime(e.target.value)}
        />
        <Button colorScheme="blue" className="button" type="submit">
          Agendar!
        </Button>
      </form>
    </Container>
  );
};

export default FormComponent;
