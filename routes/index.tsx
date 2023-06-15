import { Handlers, PageProps } from "$fresh/server.ts";
import NavBar from "../components/NavBar.tsx";
import { getAuthenticatedUser } from "../utils/auth.ts";
import { User } from "../utils/types.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const user = await getAuthenticatedUser(req.headers);

    return ctx.render({ user: user });
  },
};

type Props = PageProps<{ user: User | null }>;

export default function Home({ data: { user } }: Props) {
  return (
    <>
      <NavBar user={user} />
    </>
  );
}
