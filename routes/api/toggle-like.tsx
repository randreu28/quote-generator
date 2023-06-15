import { Handlers } from "$fresh/server.ts";
import { getAuthenticatedUser } from "../../utils/auth.ts";
import { toggleDbLike } from "../../utils/db.ts";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
import { FullQuote } from "../../utils/types.ts";

export const handler: Handlers = {
  async POST(req) {
    const user = await getAuthenticatedUser(req.headers);

    if (user === null) {
      return new Response(JSON.stringify({ message: "Session missing" }), {
        status: 401,
      });
    }

    const body = await req.json() as FullQuote;

    const schema = z.object({
      quote: z.string(),
      author: z.string(),
      category: z.string(),
      likes: z.array(z.string()),
    });

    const reqBodyIsOk = schema.safeParse(body);

    if (!reqBodyIsOk) {
      return new Response(JSON.stringify({ message: "Invalid quote" }), {
        status: 400,
      });
    }

    toggleDbLike(body, user);
    return new Response(JSON.stringify({ message: "OK" }), {
      status: 200,
    });
  },
};
