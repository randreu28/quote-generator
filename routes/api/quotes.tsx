import { Handlers } from "$fresh/server.ts";
import { getQuotes } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET() {
    const quotes = await getQuotes();
    return new Response(JSON.stringify(quotes), { status: 200 });
  },
};
