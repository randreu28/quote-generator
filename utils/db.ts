import type { Quote } from "./types.ts";

const kv = await Deno.openKv();

export async function getQuotes(): Promise<Quote[]> {
  const quotes: Quote[] = [];

  for await (const entry of kv.list<Quote>({ prefix: ["quote"] })) {
    quotes.push(entry.value);
  }
  return quotes;
}

export async function addQuote(quote: Quote) {
  const res = await kv.set(["quote", quote.author], quote);

  if (!res.ok) {
    throw Error("Failed to add quote");
  }
}
