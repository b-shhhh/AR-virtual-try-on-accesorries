export class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
  }
}

export function errorHandler(error, response) {
  if (error instanceof AppError) {
    response.writeHead(error.statusCode, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({
        error: error.message,
        statusCode: error.statusCode,
        timestamp: error.timestamp
      })
    );
    return;
  }

  console.error("Unexpected error:", error);
  response.writeHead(500, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      error: "Internal server error",
      statusCode: 500,
      timestamp: new Date().toISOString()
    })
  );
}
