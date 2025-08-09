import { createClient } from '@base44/sdk';

// Detect "embed mode" by URL (works in dev and prod)
const isEmbed =
  typeof window !== 'undefined' &&
  window.location &&
  window.location.pathname.startsWith('/embed');

export const base44 = createClient({
  appId: "689668dcb09ff1d7f1a2ff4d",
  // In embed mode, do NOT require auth (prevents redirect to Base44)
  requiresAuth: !isEmbed,
  // If your SDK supports it and you previously set a sign-in URL,
  // you could also disable it in embed mode:
  // signInUrl: isEmbed ? undefined : 'https://…/login'
});
