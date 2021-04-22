addEventListener("fetch", (event: FetchEvent) => {
	setTimeout(() => event.respondWith(new Response("success")), 1000);
});
