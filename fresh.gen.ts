// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/auth/index.tsx";
import * as $2 from "./routes/api/auth/login.tsx";
import * as $3 from "./routes/api/auth/logout.tsx";
import * as $4 from "./routes/api/toggle-like.tsx";
import * as $5 from "./routes/index.tsx";
import * as $$0 from "./islands/BigQuote.tsx";
import * as $$1 from "./islands/SmallQuote.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/auth/index.tsx": $1,
    "./routes/api/auth/login.tsx": $2,
    "./routes/api/auth/logout.tsx": $3,
    "./routes/api/toggle-like.tsx": $4,
    "./routes/index.tsx": $5,
  },
  islands: {
    "./islands/BigQuote.tsx": $$0,
    "./islands/SmallQuote.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
