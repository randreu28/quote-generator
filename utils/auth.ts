import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.0/mod.ts";
import { User } from "./types.ts";
import { getCookies } from "https://deno.land/std@0.191.0/http/cookie.ts";

if (!Deno.env.has("GH_CLIENT_ID") || !Deno.env.has("GH_CLIENT_ID")) {
  throw Error("Missing Github enviroment variables");
}

export const oauth2Client = new OAuth2Client({
  clientId: Deno.env.get("GH_CLIENT_ID")!,
  clientSecret: Deno.env.get("GH_CLIENT_SECRET")!,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  redirectUri: "https://quote-generator.deno.dev/api/auth",
  defaults: {
    scope: "read:user",
  },
});

export async function getAuthenticatedUser(
  headers: Headers,
): Promise<User | null> {
  const cookies = getCookies(headers);
  const token = cookies["session"] as string | undefined;

  if (!token) {
    return null;
  }

  const resp = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!resp.ok) {
    return null;
  }
  return await resp.json();
}
