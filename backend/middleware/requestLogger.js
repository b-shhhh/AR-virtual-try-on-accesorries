export function requestLogger(request, response, next) {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();

  const originalEnd = response.end;
  response.end = function (...args) {
    const duration = Date.now() - startTime;
    console.log(
      `[${timestamp}] ${request.method} ${request.url} - ${response.statusCode} (${duration}ms)`
    );
    originalEnd.apply(response, args);
  };

  next();
}
