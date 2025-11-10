import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "easymenu-27809", appId: "1:543617414683:web:ca9c41f7b47c6d1fb46abe", storageBucket: "easymenu-27809.firebasestorage.app", apiKey: "AIzaSyB9o93tNlTlXWyHUeRgT4zkxBdy-CqnTKQ", authDomain: "easymenu-27809.firebaseapp.com", messagingSenderId: "543617414683" })), provideFirestore(() => getFirestore())
  ]
};
