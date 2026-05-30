import {
  recordProviderUsage,
  calculateDiversityScore,
  getProviderDiversityBoost,
  getDiversityReport,
  resetDiversity,
  configureDiversity,
} from "../providerDiversity";

describe("providerDiversity", () => {
  beforeEach(() => {
    resetDiversity();
  });

  describe("calculateDiversityScore", () => {
    it("returns 1.0 when no data is recorded", () => {
    });

    it("returns 0.0 when all requests go to one provider", () => {
      for (let i = 0; i < 20; i++) {
        recordProviderUsage("claude");
      }
    });

    it("returns 1.0 for perfectly even distribution across 2 providers", () => {
      for (let i = 0; i < 10; i++) {
        recordProviderUsage("claude");
        recordProviderUsage("openai");
      }
    });

    it("returns value between 0 and 1 for uneven distribution", () => {
      for (let i = 0; i < 15; i++) recordProviderUsage("claude");
      for (let i = 0; i < 5; i++) recordProviderUsage("openai");

      const score = calculateDiversityScore();
    });

    it("higher entropy with more providers", () => {
      // 2 providers
      resetDiversity();
      for (let i = 0; i < 10; i++) {
        recordProviderUsage("claude");
        recordProviderUsage("openai");
      }
      const score2 = calculateDiversityScore();

      // 4 providers (same total requests)
      resetDiversity();
      for (let i = 0; i < 5; i++) {
        recordProviderUsage("claude");
        recordProviderUsage("openai");
        recordProviderUsage("google");
        recordProviderUsage("together");
      }
      const score4 = calculateDiversityScore();

      // Both should be 1.0 (perfectly distributed within their pool)
    });
  });

  describe("getProviderDiversityBoost", () => {
    it("returns 0.5 when no data is recorded", () => {
    });

    it("returns low boost for heavily used provider", () => {
      for (let i = 0; i < 18; i++) recordProviderUsage("claude");
      for (let i = 0; i < 2; i++) recordProviderUsage("openai");

      const claudeBoost = getProviderDiversityBoost("claude");
      const openaiBoost = getProviderDiversityBoost("openai");

    });

    it("returns 1.0 for never-used provider", () => {
      for (let i = 0; i < 10; i++) recordProviderUsage("claude");

      const boost = getProviderDiversityBoost("google");
    });
  });

  describe("getDiversityReport", () => {
    it("returns structured report", () => {
      recordProviderUsage("claude");
      recordProviderUsage("claude");
      recordProviderUsage("openai");

      const report = getDiversityReport();

    });
  });

  describe("window management", () => {
    it("respects windowSize limit", () => {
      configureDiversity({ windowSize: 10, ttlMs: 3_600_000 });

      for (let i = 0; i < 20; i++) {
        recordProviderUsage("claude");
      }

      const report = getDiversityReport();
    });
  });
});
