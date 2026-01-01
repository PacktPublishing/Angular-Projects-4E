import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';

registerLocaleData(en);

const firebaseConfig = {
  apiKey: "AIzaSyDlJHeAp8KrkbCErI1MeQRozA3TIrJc1-w",
  authDomain: "citypass-b299f.firebaseapp.com",
  projectId: "citypass-b299f",
  storageBucket: "citypass-b299f.firebasestorage.app",
  messagingSenderId: "1047601284372",
  appId: "1:1047601284372:web:343517b63ddd6e8300ee01"
};
const firebaseApp = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideNzI18n(en_US), provideAnimationsAsync(), provideHttpClient(),
    { provide: 'FIREBASE_APP', useValue: firebaseApp }
  ]
};
