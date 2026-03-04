import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import keycloak from './app/keycloak';

keycloak.init({
  onLoad: 'login-required',
  checkLoginIframe: false
}).then(authenticated => {
  if (authenticated) {
    console.log('Keycloak authenticated, bootstrapping Angular...');

    // Auto-refresh token before expiry
    setInterval(() => {
      keycloak.updateToken(60).catch(() => {
        console.warn('Token refresh failed, re-login required');
        keycloak.login();
      });
    }, 30000);

    platformBrowserDynamic().bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
    }).catch(err => console.error(err));
  } else {
    console.warn('Not authenticated, redirecting to Keycloak login...');
    keycloak.login();
  }
}).catch(err => {
  console.error('Keycloak init failed:', err);
});
