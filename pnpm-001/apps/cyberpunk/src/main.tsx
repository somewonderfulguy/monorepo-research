import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SetupWorker } from 'msw';

import 'sub-application/styles/reset.css';

import App from './App';

const launchOffline = async () => {
  if (import.meta.env.VITE_OFFLINE !== 'true') {
    return;
  }
  const importResult = (await import('./api/offline')) as {
    worker: SetupWorker;
  };

  await import('../public/mockServiceWorker.js?worker');

  importResult.worker.start({
    onUnhandledRequest: 'bypass'
  });
};

launchOffline().then(() =>
  createRoot(document.getElementById('root')!, {
    identifierPrefix: 'cyberpunk-'
  }).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
);
