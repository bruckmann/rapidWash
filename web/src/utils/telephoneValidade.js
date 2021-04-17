function telephoneValidate(tel) {
  if (tel.lenght === 11) {
    return true;
  } else {
    return 'O telefone precisa conter 11 números incluindo o ddd';
  }
}

export default telephoneValidate;
