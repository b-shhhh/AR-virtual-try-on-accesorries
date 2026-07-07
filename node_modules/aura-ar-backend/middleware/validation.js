import { AppError } from "./errorHandler.js";

export function validateProductId(productId) {
  if (!productId || typeof productId !== "string" || productId.trim() === "") {
    throw new AppError(400, "Invalid product ID");
  }
  return productId.trim();
}

export function validateUserId(userId) {
  if (!userId || typeof userId !== "string" || userId.trim() === "") {
    throw new AppError(400, "Invalid user ID");
  }
  return userId.trim();
}

export function validateWishlistBody(body) {
  if (!body || !body.productId) {
    throw new AppError(400, "Missing productId in request body");
  }
  return { productId: validateProductId(body.productId) };
}

export function validateTryOnBody(body) {
  if (!body || !body.userId || !body.accessoryId) {
    throw new AppError(400, "Missing userId or accessoryId");
  }

  const data = {
    userId: validateUserId(body.userId),
    accessoryId: body.accessoryId?.toString().trim(),
    faceRatio: body.faceRatio ? Number(body.faceRatio) : null,
    fps: body.fps ? Number(body.fps) : null
  };

  if (!data.accessoryId) {
    throw new AppError(400, "Invalid accessoryId");
  }

  return data;
}

export function validateSusResponseBody(body) {
  if (!body || !body.userId || !Array.isArray(body.answers)) {
    throw new AppError(400, "Missing userId or answers array");
  }

  if (body.answers.length !== 10) {
    throw new AppError(400, "answers array must contain exactly 10 items");
  }

  const answers = body.answers.map((answer) => {
    const num = Number(answer);
    if (!Number.isFinite(num) || num < 1 || num > 5) {
      throw new AppError(400, "Each answer must be a number between 1 and 5");
    }
    return num;
  });

  return {
    userId: validateUserId(body.userId),
    answers
  };
}
