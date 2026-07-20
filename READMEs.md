# Greengate API Layer (Expo + TypeScript)

Typed Axios + React Query integration layer for the Greengate API, covering every
**non-admin** endpoint: `auth`, `account`, `wallets`, `transactions`, `fx`, `upload`, `health`.

## Structure

```
src/api/
  client.ts              # axios instance, token storage, silent refresh on 401
  types/                  # one file per domain
  services/               # one file per domain — plain typed functions, no React
  hooks/                  # React Query hooks that wrap the services
  index.ts                # barrel export
```

Why this split: `services/` has zero React dependency, so it's usable from anywhere
(redux thunks, background tasks, tests). `hooks/` is the thin React Query layer
components actually import. `types/` is isolated so it's a one-file swap once you
regenerate from the real spec (see below).

## 1. Install dependencies

```bash
npx expo install expo-secure-store
npm install axios @tanstack/react-query
```

## 2. Wire up React Query at the app root

```tsx
// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true, // good default for balances/rates
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* your navigator */}
    </QueryClientProvider>
  );
}
```

## 3. Hook up session-expiry navigation

`client.ts` exposes a hook for when a refresh fails (refresh token itself expired/revoked):

```tsx
import { setOnSessionExpired } from './src/api';

setOnSessionExpired(() => {
  // e.g. navigationRef.reset({ index: 0, routes: [{ name: 'Login' }] })
});
```

## ⚠️ Before you build screens against this: verify against the real spec

This scaffold was built from the Swagger UI's **collapsed** endpoint list (73 routes,
methods, paths, descriptions) — the exact request/response field names for each
operation weren't visible without expanding every single one individually. Every
type file has an `⚠️ ASSUMPTION` comment at the top.

The fast, correct way to close this gap:

1. In a browser, open `https://greengate-api.up.railway.app/api/docs-json` (or
   `/api/docs-yaml` if that 404s) — this is the raw OpenAPI spec Swagger UI renders.
2. Save/copy that JSON and send it back.
3. From there the fastest path to *guaranteed-accurate* types is to run a generator
   against it rather than hand-editing further, e.g.:
   ```bash
   npx openapi-typescript ./greengate-openapi.json -o src/api/types/generated.ts
   ```
   or, for a full client+types generator: `orval` / `swagger-typescript-api`.
4. The one thing worth checking first, by hand, before anything else: **call
   `/api/v1/auth/login` once and look at the raw response body.** Every `.then((r) => r.data)`
   in `services/` assumes a bare JSON object (not a `{ success, data }` wrapper). If
   the API wraps responses, it's a single find-and-replace across `services/*.ts`.

## Notes on specific endpoints

- **`transactions.exportCsv()`** returns a `Blob` — pair it with `expo-file-system`
  + `expo-sharing` to save/share the CSV, since Expo can't trigger a browser download.
- **`upload.uploadFile()`** expects the `{ uri, name, type }` shape that
  `expo-image-picker` / `expo-document-picker` results already give you.
- **PIN-protected endpoints** (`wallets/transfer`, `fx/convert`, `fx/payouts`) send
  the PIN in the request body per the Swagger summaries — confirm this isn't meant
  to go in a header instead once you have the real spec.
