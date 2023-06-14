import { Handlers } from "$fresh/server.ts";
import { oauth2Client } from "../../../utils/auth.ts";

export const handler: Handlers = {
  async GET() {
    const authURL = await oauth2Client.code.getAuthorizationUri();
    const headers = new Headers();
    headers.set(
      "location",
      authURL.uri.toString(),
    );
    return new Response(
      null,
      { status: 307, headers },
    );
  },
};
