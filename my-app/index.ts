/**
  *
  *   @description:   Bun.serve provides a high-performance HTTP server with built-in routing
  *                   support.  it enables both function-based and object-based route handlers
  *                   with type-safe parameters and method-specific handling.
  *
  **/

  const server = Bun.serve({

    port: 3000,
    routes: {
      "/": () => new Response('information'),
    }
  });

  console.log(`Listening on ${server.url}`);
