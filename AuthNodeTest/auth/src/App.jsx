import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function App() {
  const { isAuthenticated, loginWithRedirect, user, getAccessTokenSilently } = useAuth0();

  const fetchDataFromServer = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token)
      const response = await axios.get('http://localhost:3000/api/private', {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log('Datos del servidor:', response.data);
    } catch (error) {
      console.error('Error al obtener datos del servidor:', error);
    }
  };

  console.log(isAuthenticated)

  return (
    <div>
      <header>
        <h1>App con Auth0</h1>
        {isAuthenticated ? (
          <>
            <p>Hola, {user.name}!</p>
            <button onClick={fetchDataFromServer}>Obtener datos protegidos</button>
          </>
        ) : (
          <button onClick={loginWithRedirect}>Iniciar sesión</button>
        )}
      </header>
    </div>
  );
}

export default App;

