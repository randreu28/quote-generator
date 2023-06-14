export type Quote = {
  uuid: string;
  author: string;
  quote: string;
  likes: number;
};

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
