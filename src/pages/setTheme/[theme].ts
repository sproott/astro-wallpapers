import type { APIRoute } from "astro";
import { themes } from "../../lib/constants";

export const post: APIRoute = async ({ cookies, params }) => {
  const { theme } = params;

  // @ts-ignore
  if (theme === undefined || !themes.includes(theme)) {
    return new Response("", {
      status: 404,
    });
  }
  cookies.set("theme", theme, { path: "/" });
  return new Response("", {
    status: 200,
  });
};
