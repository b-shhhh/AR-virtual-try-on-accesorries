export async function healthRoute(request, response) {
  const payload = {
    status: "ok",
    service: "auraar-backend",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload));
}
