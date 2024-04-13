import React from 'react'
import ReactDOM from 'react-dom/client'

import '@repo/design-system/styles/reset.css'
import '@repo/design-system/styles/fonts.css'

import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')!, {
  identifierPrefix: 'player-'
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
