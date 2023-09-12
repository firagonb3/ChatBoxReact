import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-l7owe0cd4jlvwoe1.us.auth0.com';
const clientId = '9kAyIPtegdsAsIkZwy6sqNF7ltb04OIj';

const auth0Config = {
  domain,
  clientId,
  redirectUri: window.location.origin,
};

export const Auth0ProviderWithHistory = ({ children }) => (
  <Auth0Provider {...auth0Config}>{children}</Auth0Provider>
);