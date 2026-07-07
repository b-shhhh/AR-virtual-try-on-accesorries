import { Store } from "../models/Store.js";

export function calculateSusScore(answers) {
  if (!Array.isArray(answers) || answers.length !== 10) {
    return null;
  }

  const total = answers.reduce((sum, answer, index) => {
    const value = Number(answer);
    if (!Number.isFinite(value) || value < 1 || value > 5) {
      return NaN;
    }
    return sum + (index % 2 === 0 ? value - 1 : 5 - value);
  }, 0);

  return Number.isNaN(total) ? null : total * 2.5;
}

function interpretSusScore(score) {
  if (score >= 80.25) return "Excellent";
  if (score >= 72.5) return "Very Good";
  if (score >= 65) return "Good";
  if (score >= 50) return "Fair";
  return "Poor";
}

export class SusService {
  static async recordSusResponse(userId, answers) {
    const score = calculateSusScore(answers);

    if (score === null) {
      return null;
    }

    const susData = {
      userId,
      answers,
      score,
      interpretation: interpretSusScore(score)
    };

    const recorded = await Store.addSusResponse(susData);
    return {
      success: true,
      responseId: recorded.id,
      score: recorded.score,
      interpretation: recorded.interpretation,
      timestamp: recorded.timestamp
    };
  }

  static async getUserSusResponse(userId) {
    const responses = await Store.getSusResponses(userId);

    if (responses.length === 0) {
      return null;
    }

    const latestResponse = responses[responses.length - 1];
    return {
      userId,
      latestScore: latestResponse.score,
      latestInterpretation: latestResponse.interpretation,
      totalResponses: responses.length,
      averageScore: (
        responses.reduce((sum, r) => sum + r.score, 0) / responses.length
      ).toFixed(2),
      allResponses: responses
    };
  }

  static async getSusStats() {
    const responses = await Store.getSusResponses("");
    const allResponses = (await Promise.all(
      Object.keys({}).map((userId) => Store.getSusResponses(userId))
    )).flat();

    const scores = allResponses.map((r) => r.score);

    return {
      totalResponses: allResponses.length,
      uniqueUsers: new Set(allResponses.map((r) => r.userId)).size,
      averageScore: scores.length > 0 ? (scores.reduce((a, b) => a + b) / scores.length).toFixed(2) : 0,
      scoreDistribution: {
        excellent: allResponses.filter((r) => r.score >= 80.25).length,
        veryGood: allResponses.filter((r) => r.score >= 72.5 && r.score < 80.25).length,
        good: allResponses.filter((r) => r.score >= 65 && r.score < 72.5).length,
        fair: allResponses.filter((r) => r.score >= 50 && r.score < 65).length,
        poor: allResponses.filter((r) => r.score < 50).length
      }
    };
  }
}
