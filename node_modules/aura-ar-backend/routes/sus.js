import { SusService } from "../services/susService.js";
import { AppError } from "../middleware/errorHandler.js";
import { validateSusResponseBody } from "../middleware/validation.js";

export async function recordSusResponse(request, response, body) {
  try {
    const validatedData = validateSusResponseBody(body);

    const result = await SusService.recordSusResponse(validatedData.userId, validatedData.answers);

    if (!result) {
      throw new AppError(400, "Invalid SUS response data");
    }

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(500, "Failed to record SUS response");
  }
}

export async function getUserSusResponse(request, response, userId) {
  try {
    const susResponse = await SusService.getUserSusResponse(userId);

    if (!susResponse) {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(
        JSON.stringify({
          success: false,
          message: "No SUS responses found for this user"
        })
      );
      return;
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: susResponse }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch SUS response");
  }
}

export async function getSusStats(request, response) {
  try {
    const stats = await SusService.getSusStats();

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: stats }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch SUS statistics");
  }
}
