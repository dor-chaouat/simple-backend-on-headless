export default {
  async fetch(request, env) {
    
    // SSR
    const url = new URL(request.url);

    // The headless OAuth client ID is public (no secret needed for member login),
    // so it's safe to hand to the browser.
    if (url.pathname === "/api/config") {
      return Response.json({ clientId: env.WIX_CLIENT_ID ?? null });
    }

    return new Response("Hello");
  },
};
