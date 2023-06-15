import { User } from "../utils/types.ts";

type Props = {
  user: User | null;
  showLikedQuotesLink?: boolean;
};

export default function NavBar({ user, showLikedQuotesLink = true }: Props) {
  return (
    <nav class="space-y-1">
      <div class="flex justify-between items-center">
        <a class="text-4xl font-bold hover:underline" href="/">
          Quote generator
        </a>
        <a
          href="https://github.com/randreu28/quote-generator"
          class="text-sm text-blue-500 hover:underline text-right"
        >
          View on GitHub
        </a>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-600">
          {user
            ? (
              <>
                Logged in as{" "}
                <span>
                  <span class="font-semibold">{user.name}</span>
                  <span class="text-gray-600">{" "}(@{user.login})</span>
                </span>
              </>
            )
            : <span class="">Anonymous user</span>}
        </p>
        <a
          class="text-sm text-blue-500 hover:underline"
          href={user ? "/api/auth/logout" : "/api/auth/login"}
        >
          {user ? "Log out" : "Log in"}
        </a>
      </div>
      {(user) && (
        <>
          {showLikedQuotesLink
            ? (
              <a
                class="text-sm text-blue-500 hover:underline"
                href="/favorite-quotes"
              >
                See your liked quotes
              </a>
            )
            : (
              <a class="text-sm text-blue-500 hover:underline" href="/">
                Go back
              </a>
            )}
        </>
      )}
    </nav>
  );
}
