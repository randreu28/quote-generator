import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function Home() {
  return (
    <>
      <div class="flex justify-center items-center h-screen text-3xl">
        Hello world
      </div>
    </>
  );
}
