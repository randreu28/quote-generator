import { Handlers } from "$fresh/server.ts";
import { addQuote, deleteQuote, getQuote } from "../../utils/db.ts";
import { Quote } from "../../utils/types.ts";

export const handler: Handlers = {
  async GET(req) {
    const form = await req.formData();
    const uuid = form.get("uuid")?.toString();

    if (!uuid) {
      return new Response(JSON.stringify({ message: "uuid missing" }), {
        status: 400,
      });
    }

    const quote = await getQuote(uuid);
    return new Response(JSON.stringify(quote), { status: 200 });
  },
  async POST(req) {
    const form = await req.formData();

    const uuid = form.get("uuid")?.toString();
    const quoteText = form.get("quote")?.toString();
    const author = form.get("author")?.toString();
    const likes = form.get("likes")?.toString();

    if (!author || !quoteText) {
      return new Response(JSON.stringify({ message: "Form data missing" }), {
        status: 400,
      });
    }

    const quote: Quote = {
      quote: quoteText,
      author: author,
      likes: likes ? Number(likes) : 0,
      uuid: uuid ? uuid : crypto.randomUUID(),
    };

    await addQuote(quote);

    const headers = new Headers();
    headers.set("location", "/");

    return new Response(JSON.stringify(quote), {
      status: 303,
      headers,
    });
  },
  async DELETE(req) {
    const form = await req.formData();
    const uuid = form.get("uuid")?.toString();

    if (!uuid) {
      return new Response(JSON.stringify({ message: "uuid missing" }));
    }

    await deleteQuote(uuid);

    return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
  },
};
