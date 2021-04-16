import React from 'react';
import { FcAlarmClock } from 'react-icons/fc'
import Container from '../container/';
import InputGroup from '../inputGroup';

import './styles.css';

const FormComponent = () => {
  return(
    <Container>
      <div className="header">
        <p>Agende seu horário&nbsp;&nbsp;<FcAlarmClock /></p>
      </div>
     <form>
      <InputGroup name="name" label="Seu nome:"/>
      <InputGroup name="brand" label="Marca do veículo:"/>
      <InputGroup name="model" label="Modelo do veículo:"/>
      <InputGroup name="licensePlate" label="Placa do veículo:"/>
     </form>
    </Container>
  );
};


/* seu nome completo, telefone para contato (opcional) e se este possui WhatsApp;
marca, modelo, ano (opcional) e placa do veículo; e o dia, mês, ano e o horário do agendamento.
A lavação funciona de segunda à sexta-feira, das 8:00 às 18:00, com intervalos de agendamento de 30 em 30 minutos. 
A aplicação deverá validar o preenchimento dos campos obrigatórios do formulário e o agendamento apenas para os dias e 
horários em que a lavação presta o serviço.*/


export default FormComponent;