import { User } from "../utils/types.ts";

type Props = {
  user: User | null;
};

export default function NavBar({ user }: Props) {
  return (
    <nav class="space-y-1">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold">Quote generator</h1>
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
          href={user ? "/logout" : "/login"}
        >
          {user ? "Log out" : "Log in"}
        </a>
      </div>
    </nav>
  );
}
