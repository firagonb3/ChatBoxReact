import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0ProviderWithHistory } from './components/Auth0ProviderWithHistory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>,
)
