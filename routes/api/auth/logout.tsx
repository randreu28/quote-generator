import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "https://deno.land/std@0.191.0/http/cookie.ts";

export const handler: Handlers = {
  GET() {
    const headers = new Headers();
    deleteCookie(headers, "session", { path: "/" });
    headers.set(
      "location",
      "/",
    );
    return new Response(
      null,
      { status: 307, headers },
    );
  },
};
