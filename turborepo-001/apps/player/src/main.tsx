import React from 'react'
import ReactDOM from 'react-dom/client'

import '@repo/design-system/styles/reset.css'
import '@repo/design-system/styles/fonts.css'

import PlayerApp from './components/PlayerApp'

import './styles/devMode.css'

ReactDOM.createRoot(document.getElementById('root')!, {
  identifierPrefix: 'player-app-'
}).render(
  <React.StrictMode>
    <PlayerApp />
  </React.StrictMode>
)
