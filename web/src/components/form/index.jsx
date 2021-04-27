import React, { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { FcAlarmClock } from 'react-icons/fc';

import Container from '../container/';
import InputGroup from '../inputGroup';
import DatePickerComponent from '../datePicker';
import RadioButton from '../radioButton';

import isWeekDay from '../../utils/isWeekDay';
import isTelephoneValid from '../../utils/isTelephoneValid';
import isTimeValid from '../../utils/isTimeValid';
import isPlateValid from '../../utils/isPlateValid';
import isCarYearValid from '../../utils/isCarYearValid';

import apiService from '../../services/apiService';

import './styles.css';

const FormComponent = () => {

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [whatsapp, setWhatsapp] = useState('nao');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [telephoneError, setTelephoneError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [carYearError, setCarYearError] = useState(false);
  const [plateError, setPlateError] = useState(false);

  const toast = useToast();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {

      console.log(date);
      console.log(isWeekDay(date))

      if (!isCarYearValid(carYear)) {
        return (
          setCarYearError(true),
          toast({
            title: 'Erro no agendamento',
            description: 'O ano do carro não pode ser maior que o ano atual.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        );
      }

      if (!isPlateValid(licensePlate)) {
        return (
          setPlateError(true),
          toast({
            title: 'Erro no agendamento',
            description: 'A placa não está no padrão ABC1234.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        );
      }


      if (telephone !== '') {
        if (!isTelephoneValid(telephone)) {
          return (
            toast({
              title: 'Erro na requisição',
              description: 'O campo de telefone precisa ter 11 caracteres.',
              status: 'error',
              duration: 9000,
              isClosable: true,
            }),
            setTelephoneError(true)
          );
        }
      }

      if (isWeekDay(date)) {
        return (
          setDateError(true),
          toast({
            title: 'Erro no agendamento',
            description: 'Só agendamos de segunda à sexta feira.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        );
      }

      if (!isTimeValid(time)) {
        return (
          setTimeError(true),
          toast({
            title: 'Erro no agendamento',
            description: 'Só atendemos das 08:00 às 18:00 de 30 em 30min.',
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        );
      }




      const response = await apiService.post('/schedule', {
        name,
        brand,
        model,
        licensePlate,
        carYear,
        telephone,
        whatsapp,
        date,
        time
      });

      if (response.status === 200) {
        toast({
          title: 'Agendamento feito com sucesso',
          description: `Seu agendamento foi feito para a data ${date} no horário ${time}`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    } catch (error) {
      const errorMessage = error.response.data.Response
      toast({
        title: 'Erro no agendamento',
        description: errorMessage,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
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
          name="carYear"
          label="Ano do veículo"
          type="number"
          isRequired
          isInvalid={carYearError}
          onChange={(e) => {
            setCarYear(e.target.value);
            setCarYearError(false);
          }}
        />
        <InputGroup
          name="licensePlate"
          label="Placa do veículo"
          type="text"
          isInvalid={plateError}
          onChange={(e) => {
            setLicensePlate(e.target.value);
            setPlateError(false);
          }}
        />
        <InputGroup
          name="telephone"
          label="Telefone para contato"
          type="number"
          onChange={(e) => {
            setTelephone(e.target.value);
            setTelephoneError(false);
          }}
          isInvalid={telephoneError}
        />
        <RadioButton
          disabled={telephone === '' ? (true) : (false)}
          onChange={(value) => {
            setWhatsapp(value);
            setTelephoneError(false);
          }}
        />
        <DatePickerComponent
          onChange={(e) => {
            setDate(e.target.value);
            setDateError(false);
          }}
          isInvalid={dateError}
        />
        <InputGroup
          name="time"
          label="Horário do agendamento"
          type="time"
          isRequired
          isInvalid={timeError}
          onChange={(e) => {
            setTime(e.target.value);
            setTimeError(false);
          }}
        />
        <Button colorScheme="blue" className="button" type="submit">
          Agendar!
        </Button>
      </form>
    </Container>
  );
};

export default FormComponent;