/**
  *
  *   @description:   Bun.serve provides a high-performance HTTP server with built-in routing
  *                   support.  it enables both function-based and object-based route handlers
  *                   with type-safe parameters and method-specific handling.
  *
  *
  *                   figlet is a utility for convering strings into ascii art
  **/

  import figlet from 'figlet';

  const server = Bun.serve({

    port: 3000,
    routes: {
      "/": () => new Response('information'),
      "/figlet": () => {
        const body = figlet.textSync('INFORMATION');
        return new Response(body);
      }
    }
  });

  console.log(`Listening on ${server.url}`);
