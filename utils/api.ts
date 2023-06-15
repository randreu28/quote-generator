import { Quote, QuoteCategory } from "./types.ts";

if (!Deno.env.has("API_KEY")) {
  throw Error("Missing api key in the enviroment variables");
}

/**
 * Gets a list of random quotes
 * @link https://api-ninjas.com/api/quotes
 */
export async function getQuotes(
  category?: QuoteCategory,
  limit?: number,
): Promise<Quote[] | null> {
  const API = new URL("https://api.api-ninjas.com/v1/quotes");

  if (category) {
    API.searchParams.append("category", category);
  }

  if (limit) {
    API.searchParams.append("limit", limit.toString());
  }

  const rawRes = await fetch(API, {
    headers: { "X-Api-Key": Deno.env.get("API_KEY")! },
  });

  if (!rawRes.ok) {
    return null;
  }
  const res = await rawRes.json() as Quote[];

  return res;
}
