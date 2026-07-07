import { Store } from "../models/Store.js";

function calculateMetrics(tryOns) {
  if (tryOns.length === 0) {
    return { avgFaceRatio: 0, avgFps: 0, totalTryOns: 0 };
  }

  const withRatio = tryOns.filter((t) => t.faceRatio !== null);
  const withFps = tryOns.filter((t) => t.fps !== null);

  return {
    avgFaceRatio:
      withRatio.length > 0
        ? (withRatio.reduce((sum, t) => sum + t.faceRatio, 0) / withRatio.length).toFixed(2)
        : 0,
    avgFps:
      withFps.length > 0
        ? (withFps.reduce((sum, t) => sum + t.fps, 0) / withFps.length).toFixed(2)
        : 0,
    totalTryOns: tryOns.length
  };
}

export class TryOnService {
  static async recordTryOn(userId, accessoryId, faceRatio, fps) {
    const tryOnData = {
      userId,
      accessoryId,
      faceRatio: faceRatio || null,
      fps: fps || null
    };

    const recorded = await Store.addTryOn(tryOnData);
    return {
      success: true,
      tryOnId: recorded.id,
      ...recorded
    };
  }

  static async getUserTryOns(userId) {
    const tryOns = await Store.getTryOns(userId);
    const metrics = calculateMetrics(tryOns);

    return {
      userId,
      ...metrics,
      tryOns: tryOns.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    };
  }

  static async getAccessoryStats(accessoryId) {
    const tryOns = await Store.getTryOns("");
    const accessoryTryOns = (await Promise.all(
      Object.entries({}).map(([userId]) =>
        Store.getTryOns(userId).then((tos) => tos.filter((t) => t.accessoryId === accessoryId))
      )
    )).flat();

    return {
      accessoryId,
      totalUses: accessoryTryOns.length,
      uniqueUsers: new Set(accessoryTryOns.map((t) => t.userId)).size,
      metrics: calculateMetrics(accessoryTryOns)
    };
  }
}
