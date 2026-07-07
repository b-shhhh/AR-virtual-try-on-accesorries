import { UserService } from "../services/userService.js";
import { AppError } from "../middleware/errorHandler.js";

export async function getUserStats(request, response, userId) {
  try {
    const stats = await UserService.getUserStats(userId);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: stats }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch user stats");
  }
}

export async function getUserProfile(request, response, userId) {
  try {
    const profile = await UserService.getUserProfile(userId);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ success: true, data: profile }));
  } catch (error) {
    throw new AppError(500, "Failed to fetch user profile");
  }
}
