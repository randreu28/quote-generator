import { Handlers } from "$fresh/server.ts";
import {
  Cookie,
  setCookie,
} from "https://deno.land/std@0.191.0/http/cookie.ts";
import { oauth2Client } from "../../../utils/auth.ts";

export const handler: Handlers = {
  async GET(req) {
    const tokens = await oauth2Client.code.getToken(req.url);
    const cookie: Cookie = {
      name: "session",
      value: tokens.accessToken,
      path: "/",
      httpOnly: true,
    };
    const headers = new Headers();
    setCookie(headers, cookie);
    headers.set("location", "/");

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
