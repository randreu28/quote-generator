import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.191.0/http/cookie.ts";
import NavBar from "../components/NavBar.tsx";
import QuoteBox from "../islands/QuoteBox.tsx";
import { getAuthenticatedUser } from "../utils/auth.ts";
import { getQuotes } from "../utils/db.ts";
import { Quote, User } from "../utils/types.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const quotes = await getQuotes();
    const user = await getAuthenticatedUser(req.headers);

    return ctx.render({ quotes: quotes, user: user });
  },
};

type Props = PageProps<{ quotes: Quote[]; user: User | null }>;

export default function Home({ data: { quotes, user } }: Props) {
  if (quotes.length === 0) {
    return (
      <>
        <div class="flex justify-center items-center h-[80vh]">
          <p class="text-gray-500">There isn't any quotes yet</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar user={user} />
      <div class="max-w-lg mx-auto py-10">
        {quotes.map((quote) => <QuoteBox {...quote} />)}
      </div>
    </>
  );
}
