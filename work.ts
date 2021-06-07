let something = 0
setInterval(() => something++, 10); 

addEventListener("fetch", (event) => {
  event.respondWith(handler(event));
});

async function handler(req: Request): Promise<Response> {
  return new Response(JSON.stringify({increment: something}));
}
