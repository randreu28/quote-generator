export type Quote = {
  quote: string;
  author: string;
  category: QuoteCategory;
};

export interface FullQuote extends Quote {
  likes: string[];
}

// deno-fmt-ignore
export type QuoteCategory = "age" | "alone" | "amazing" | "anger" | "architecture" | "art" | "attitude" | "beauty" | "best" | "birthday" | "business" | "car" | "change" | "communications" | "computers" | "cool" | "courage" | "dad" | "dating" | "death" | "design" | "dreams" | "education" | "environmental" | "equality" | "experience" | "failure" | "faith" | "family" | "famous" | "fear" | "fitness" | "food" | "forgiveness" | "freedom" | "friendship" | "funny" | "future" | "god" | "good" | "government" | "graduation" | "great" | "happiness" | "health" | "history" | "home" | "hope" | "humor" | "imagination" | "inspirational" | "intelligence" | "jealousy" | "knowledge" | "leadership" | "learning" | "legal" | "life" | "love" | "marriage" | "medical" | "men" | "mom" | "money" | "morning" | "movies" | "success";

/**
 * Just a small subset of the real Github user data
 * @link https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user
 */
export type User = {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
};
