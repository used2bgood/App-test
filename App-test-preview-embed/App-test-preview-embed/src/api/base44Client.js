import { createClient } from '@base44/sdk';

const isEmbed =
  typeof window !== 'undefined' &&
  window.location &&
  window.location.pathname.startsWith('/embed');

export const base44 = createClient({
  appId: "689668dcb09ff1d7f1a2ff4d",
  requiresAuth: !isEmbed,
});
