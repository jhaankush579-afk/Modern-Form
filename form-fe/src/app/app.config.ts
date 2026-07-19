import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Root application config.
 * - Zoneless change detection (Angular 18+ standalone pattern).
 * - ReactiveFormsModule is imported per-component, but we keep it here
 *   for clarity. The user-form component imports it directly.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideZonelessChangeDetection(), provideHttpClient(withFetch())],
};
