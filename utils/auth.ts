import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.0/mod.ts";
import { User } from "./types.ts";

if (!Deno.env.has("GH_CLIENT_ID") || !Deno.env.has("GH_CLIENT_ID")) {
  throw Error("Missing Github enviroment variables");
}

export const oauth2Client = new OAuth2Client({
  clientId: Deno.env.get("GH_CLIENT_ID")!,
  clientSecret: Deno.env.get("GH_CLIENT_SECRET")!,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  redirectUri: "http://localhost:8000/api/auth",
  defaults: {
    scope: "read:user",
  },
});

export async function getAuthenticatedUser(token: string): Promise<User> {
  const resp = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!resp.ok) {
    throw new Error("Failed to fetch user");
  }
  return await resp.json();
}
