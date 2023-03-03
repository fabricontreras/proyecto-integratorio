export const validate = (userData) => {
  let errors = {};

  if (!/^[\w-.]+@[\w-_]+(\.[\w]{2,4}){1,2}$/.test(userData.username)) {
    errors.username = "El email es incorrecto";
  }

  if (!userData.username) {
    errors.username = "No se a ingresado un email";
  }

  if (userData.username.length > 35) {
    errors.username = "se a pasado del limite de letras";
  }

  if (!userData.password.match(/\d/)) {
    errors.password = "La contraseña debe tener un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener de 6 a 10 caracteres";
  }

  return errors;
};
