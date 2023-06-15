import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import QuoteGrid from "../components/QuoteGrid.tsx";
import BigQuote from "../islands/BigQuote.tsx";
import { getQuotes } from "../utils/api.ts";
import { getAuthenticatedUser } from "../utils/auth.ts";
import { FullQuote, QuoteCategory, User } from "../utils/types.ts";

type PageData = {
  user: User | null;
  quotes: FullQuote[] | null;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);

    const category = url.pathname.substring(1) as QuoteCategory;

    const user = await getAuthenticatedUser(req.headers);
    const quotes = await getQuotes(category, 10);

    return ctx.render({ user: user, quotes: quotes } satisfies PageData);
  },
};

export default function Home({ data: { user, quotes } }: PageProps<PageData>) {
  if (quotes === null || quotes.length === 0) {
    return (
      <>
        <NavBar user={user} />
        <div class="h-screen flex justify-center items-center text-red-500">
          <h1>An error occured loading the quotes. Please try again later</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar user={user} />
      <BigQuote quote={quotes[0]} user={user} />

      <div class="mx-auto my-auto max-w-6xl space-y-10">
        <h2 class="mx-auto text-5xl font-bold text-center max-w-xl md:max-w-3xl">
          Discover More Quotes
        </h2>
        <p class="mx-auto text-center text-lg font-regular max-w-xl md:max-w-3xl">
          Explore an endless collection of quotes to match any mood, from
          inspirational to funny to everything else you ever need.
        </p>
        <QuoteGrid quotes={quotes} user={user} />
      </div>
    </>
  );
}
