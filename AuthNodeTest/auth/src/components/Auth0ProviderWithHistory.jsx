import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-l7owe0cd4jlvwoe1.us.auth0.com';
const clientId = 'Z80Vygftn1VKjbMjMCpv1t64LWNly6Kz';

const auth0Config = {
  domain,
  clientId,
  audience: 'http://localhost:3000',
  redirectUri: window.location.origin,
};

export const Auth0ProviderWithHistory = ({ children }) => (
  <Auth0Provider {...auth0Config}>{children}</Auth0Provider>
);