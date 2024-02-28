import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"pruebalogin-app-db2be","appId":"1:961831312469:web:d8ac23e3dec79a35bcc8dc","storageBucket":"pruebalogin-app-db2be.appspot.com","apiKey":"AIzaSyDBUEw6kSnPsr2REVCU3VIqx-dC-tGoACU","authDomain":"pruebalogin-app-db2be.firebaseapp.com","messagingSenderId":"961831312469"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
