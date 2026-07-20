import { apiClient, unwrap } from '../client';

/** Useful for a startup connectivity check / splash screen gate. */
export const HealthService = {
  live: () => unwrap(apiClient.get('/health/live')),
  ready: () => unwrap(apiClient.get('/health/ready')),
};
