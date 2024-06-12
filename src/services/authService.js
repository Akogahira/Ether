// En authService.js

// Usuario y contraseña predeterminados
const defaultUser = {
  username: 'user',
  password: 'pass',
};

// Función para iniciar sesión
export const login = async (username, password) => {
  try {
    if (username === defaultUser.username && password === defaultUser.password) {
      return { message: 'Inicio de sesión exitoso', data: defaultUser };
    } else {
      throw new Error('Credenciales incorrectas');
    }
  } catch (error) {
    throw error.message ? error.message : new Error('Error de red');
  }
};
