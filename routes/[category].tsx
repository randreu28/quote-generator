import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import BigQuote from "../islands/BigQuote.tsx";
import SmallQuote from "../islands/SmallQuote.tsx";
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

      <div class="mx-auto my-auto max-w-6xl">
        <h2 class="mx-auto text-5xl font-bold text-center mb-6 max-w-xl md:max-w-3xl mt-8">
          Discover More Quotes
        </h2>
        <p class="mx-auto text-center text-lg font-regular max-w-xl md:max-w-3xl">
          Explore an endless collection of quotes to match any mood, from
          inspirational to funny to everything else you ever need.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12 py-8 lg:py-12">
          {quotes.map((quote, index) => {
            if (index === 0) {
              return;
            }

            return <SmallQuote quote={quote} user={user} />;
          })}
        </div>
      </div>
    </>
  );
}
