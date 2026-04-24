import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { App } from './app/app';

async function enableMocking(): Promise<void> {
  if (!isDevMode()) {
    return;
  }

  const { worker } = await import('./app/mocks/browsers');
  await worker.start({
    onUnhandledRequest: 'bypass'
  });
}

enableMocking()
  .then(() => bootstrapApplication(App, appConfig))
  .catch((err) => console.error(err));
