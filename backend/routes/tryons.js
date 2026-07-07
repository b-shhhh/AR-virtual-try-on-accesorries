import { TryOnService } from "../services/tryonService.js";
import { AppError } from "../middleware/errorHandler.js";
import { validateTryOnBody } from "../middleware/validation.js";

export async function recordTryOn(request, response, body) {
  try {
    const validatedData = validateTryOnBody(body);

    const result = await TryOnService.recordTryOn(
      validatedData.userId,
      validatedData.accessoryId,
      validatedData.faceRatio,
      validatedData.fps
    );

    response.writeHead(201, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(500, "Failed to record try-on");
  }
}

export async function getUserTryOns(request, response, userId) {
  try {
    const tryOns = await TryOnService.getUserTryOns(userId);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: tryOns }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch try-ons");
  }
}
