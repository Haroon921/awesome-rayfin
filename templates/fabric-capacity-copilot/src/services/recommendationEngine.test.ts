import { describe, expect, it } from "vitest";

import { recommend } from "./recommendationEngine";
import type { Hotspot } from "../types";

const hotspot: Hotspot = {
  id: "warehouse-hotspot",
  workspace: "Finance Analytics",
  item: "Finance-Warehouse",
  workload: "Warehouse",
  cu: 84,
  severity: "High",
  signal: "Sustained interactive consumption",
  operation: "SQL query",
  time: "10:30-10:45",
};

describe("recommend", () => {
  it("builds evidence from the selected hotspot", () => {
    const result = recommend(hotspot);

    expect(result.evidence).toContain("Finance Analytics / Finance-Warehouse");
    expect(result.evidence).toContain("Warehouse: 84 sample CU utilization");
    expect(result.summary).toContain("sustained interactive consumption");
  });

  it("adds utilization and workload-specific guidance", () => {
    const result = recommend(hotspot);

    expect(result.actions).toContain(
      "Review the dominant operation and adjacent time window before considering capacity changes.",
    );
    expect(result.actions).toContain(
      "Inspect SQL operation duration, recurrence and concurrency for this item.",
    );
    expect(result.actions.at(-1)).toBe(
      "Validate the finding against the authoritative Capacity Metrics source.",
    );
  });
});
