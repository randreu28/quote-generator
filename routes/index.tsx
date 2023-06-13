import { Handlers, PageProps } from "$fresh/server.ts";
import QuoteBox from "../islands/QuoteBox.tsx";
import { getQuotes } from "../utils/db.ts";
import { Quote } from "../utils/types.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const quotes = await getQuotes();
    return ctx.render(quotes);
  },
};

export default function Home({ data: quotes }: PageProps<Quote[]>) {
  if (quotes.length === 0) {
    return (
      <div class="flex justify-center items-center h-[80vh]">
        <p class="text-gray-500">There isn't any quotes yet</p>
      </div>
    );
  }

  return (
    <div class="max-w-lg mx-auto py-10">
      {quotes.map((quote) => <QuoteBox {...quote} />)}
    </div>
  );
}
