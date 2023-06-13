import { Handlers } from "$fresh/server.ts";
import { addQuote } from "../utils/db.ts";
import type { Quote } from "../utils/types.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const form = await req.formData();
    const quoteText = form.get("quote")?.toString();
    const author = form.get("author")?.toString();

    if (!quoteText || !author) {
      return new Response(null, { status: 422 });
    }

    const quote: Quote = {
      quote: quoteText,
      author: author,
      likes: 0,
    };

    try {
      await addQuote(quote);
    } catch (e) {
      return new Response(JSON.stringify(e), { status: 400 });
    }

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function AddQuote() {
  return (
    <div class="flex justify-center items-center h-[80vh] text-2xl">
      <form method="post" class="gap-2 flex flex-col">
        <label>Quote</label>
        <input
          type="text"
          class="bg-gray-200"
          required
          name="quote"
          value=""
        />
        <label>Author</label>
        <input
          type="text"
          class="bg-gray-200"
          required
          name="author"
          value=""
        />
        <button type="submit" class="bg-blue-300 p-2 mt-5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
