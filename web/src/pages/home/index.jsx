import React, { useState } from 'react';
import Form from '../../components/form';
import { Container } from './styles';

const Home = () => {

  const [ whatsapp, setWhasapp ] = useState('');
  const [ brand, setBrand ] = useState('');
  const [ model, setModel ] = useState('');
  const [ year, setYear ] = useState('');
  const [ placa, setPlaca ] = useState('');
  const [ date, setDate] = useState('');

  return (
    <Form>

    </Form>
  );



};

//WhatsApp; a marca, modelo, ano (opcional) e placa do veículo; e o dia, mês, ano e o horário do agendamento. 

export default Home;