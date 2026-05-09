/**
  *
  *   @description:   Bun.serve provides a high-performance HTTP server with built-in routing
  *                   support.  it enables both function-based and object-based route handlers
  *                   with type-safe parameters and method-specific handling.
  *
  *
  *                   figlet is a utility for convering strings into ascii art
  *                   index is an HTML file that will be served at the root route
  **/

  import figlet from 'figlet';
  import index from './index.html';

  const server = Bun.serve({
    port: 3000,
    routes: {
      "/": index,
      // "/": () => new Response('Bun!'),
      "/figlet": () => {
        const body = figlet.textSync('Bun!');
        return new Response(body);
      }
    }
  });

  console.log(`Listening on ${server.url}`);
