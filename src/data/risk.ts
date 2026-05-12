export type RiskRow = {
  scenario: string;
  probability: "Lower" | "Moderate" | "Higher";
  impact: "Contained" | "Serious" | "Severe" | "Extreme";
  indicators: string;
  confidence: "Low" | "Medium" | "Medium-high";
  sourceIds: string[];
};

export const riskRows: RiskRow[] = [
  {
    scenario: "Coercion / gray-zone pressure",
    probability: "Higher",
    impact: "Serious",
    indicators:
      "Sustained air and maritime operations, cyber pressure, economic restrictions, disinformation, and coast guard or maritime militia activity.",
    confidence: "Medium-high",
    sourceIds: ["taiwan-mnd-joint-sword-2024a", "rand-gray-zone", "crs-background-us-relations"],
  },
  {
    scenario: "Blockade or quarantine",
    probability: "Moderate",
    impact: "Severe",
    indicators:
      "Declared exclusion zones, inspection regimes, port disruption, large-scale joint exercises, and legal messaging about enforcement powers.",
    confidence: "Medium",
    sourceIds: ["csis-blockade", "taiwan-mnd-joint-sword-2024a"],
  },
  {
    scenario: "Limited strike",
    probability: "Lower",
    impact: "Severe",
    indicators:
      "Missile deployments, explicit warnings, evacuation signals, mobilization of theater forces, or attacks on command, communications, or military facilities.",
    confidence: "Low",
    sourceIds: ["state-taiwan-crises", "crs-background-us-relations"],
  },
  {
    scenario: "Full invasion",
    probability: "Lower",
    impact: "Extreme",
    indicators:
      "Large amphibious mobilization, reserve activation, logistics buildup, information lockdown, and sustained operations to seize air and maritime control.",
    confidence: "Low",
    sourceIds: ["csis-blockade", "rand-gray-zone", "crs-background-us-relations"],
  },
  {
    scenario: "Accidental escalation",
    probability: "Moderate",
    impact: "Severe",
    indicators:
      "Unsafe intercepts, collision at sea or in the air, misread exercises, domestic political pressure, or unclear crisis communication channels.",
    confidence: "Medium",
    sourceIds: ["state-taiwan-crises", "csis-blockade"],
  },
];

export const supplyChainNodes = [
  { id: "Taiwan", group: "origin", radius: 32 },
  { id: "TSMC / foundries", group: "semiconductors", radius: 28 },
  { id: "Advanced logic chips", group: "semiconductors", radius: 25 },
  { id: "Global supply chains", group: "systems", radius: 30 },
  { id: "United States", group: "market", radius: 24 },
  { id: "China", group: "market", radius: 24 },
  { id: "Japan", group: "market", radius: 22 },
  { id: "European Union", group: "market", radius: 22 },
];

export const supplyChainLinks = [
  { source: "Taiwan", target: "TSMC / foundries", value: 9 },
  { source: "TSMC / foundries", target: "Advanced logic chips", value: 10 },
  { source: "Advanced logic chips", target: "Global supply chains", value: 9 },
  { source: "Global supply chains", target: "United States", value: 8 },
  { source: "Global supply chains", target: "China", value: 7 },
  { source: "Global supply chains", target: "Japan", value: 6 },
  { source: "Global supply chains", target: "European Union", value: 6 },
];
