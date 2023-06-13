import type { Quote } from "./types.ts";

const kv = await Deno.openKv();

export async function getQuote(uuid: string): Promise<Quote | null> {
  const quote = await kv.get<Quote>(["quote", uuid]);

  return quote.value;
}

export async function getQuotes(): Promise<Quote[]> {
  const quotes: Quote[] = [];

  for await (const entry of kv.list<Quote>({ prefix: ["quote"] })) {
    quotes.push(entry.value);
  }
  return quotes;
}

export async function addQuote(quote: Quote) {
  await kv.set(["quote", quote.uuid], quote);
}

export async function deleteQuote(uuid: string) {
  await kv.delete(["quote", uuid]);
}
