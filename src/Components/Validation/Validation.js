const validation = (userData) => {
  const errors = {};
  if (!/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(userData.email)) {
    errors.email = 'Debe ser un Email';
  }
  if (!userData.email) {
    errors.email = 'Debe colocar un Email';
  }
  if (userData.email.length > 35) {
    errors.email = 'El Email no debe superar los 35 caracteres';
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = 'La contraseña debe tener un número';
  }
  if (userData.password.length > 10 || userData.password.length < 6) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  }
  return errors;
};

export default validation;
