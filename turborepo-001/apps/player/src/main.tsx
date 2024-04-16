import React from 'react'
import ReactDOM from 'react-dom/client'
import 'augmented-ui/augmented-ui.min.css'

import { ThemeProvider } from '@repo/design-system/contexts/themeContext'
import '@repo/design-system/styles/reset.css'
import '@repo/design-system/styles/fonts.css'

import PlayerApp from './components/PlayerApp'

import './styles/devMode.css'

ReactDOM.createRoot(document.getElementById('root')!, {
  identifierPrefix: 'player-app-'
}).render(
  <React.StrictMode>
    <ThemeProvider style={{ width: '100%', height: '100%' }}>
      <PlayerApp />
    </ThemeProvider>
  </React.StrictMode>
)
