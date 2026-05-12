export type PositionColumn = {
  id: "prc" | "taiwan" | "us";
  heading: string;
  summary: string;
  coreDocuments: string[];
  keyPhrases: string[];
  implications: string[];
  caveat: string;
  sourceIds: string[];
};

export const positions: PositionColumn[] = [
  {
    id: "prc",
    heading: "PRC official position",
    summary:
      "The PRC government states that Taiwan is part of China, that the PRC is the sole legal government representing China, and that national reunification is a core objective. It presents the One China principle as the basis for diplomatic relations and frames Taiwan independence as secession.",
    coreDocuments: [
      "2022 State Council white paper",
      "Anti-Secession Law",
      "Shanghai, Normalization, and 1982 communiques as interpreted by Beijing",
    ],
    keyPhrases: [
      "One China principle",
      "national reunification",
      "opposition to Taiwan independence",
      "internal affair",
    ],
    implications: [
      "Opposes official foreign relations with Taiwan",
      "Objects to U.S. arms sales and high-level political contact",
      "Reserves non-peaceful means under specified domestic-law conditions",
    ],
    caveat:
      "The website treats these statements as official PRC claims; it does not present them as a settled legal judgment.",
    sourceIds: ["prc-2022-white-paper", "prc-anti-secession-law", "ait-shanghai-communique"],
  },
  {
    id: "taiwan",
    heading: "ROC / Taiwan official position",
    summary:
      "Taiwan's government emphasizes democratic self-government, effective jurisdiction over Taiwan and related islands, and cross-Strait policy under the ROC Constitution and Taiwan's domestic laws. Contemporary Taiwan authorities often stress maintaining peace, stability, democratic procedures, and the status quo.",
    coreDocuments: [
      "ROC Constitution and related cross-Strait laws",
      "Mainland Affairs Council policy statements",
      "Presidential speeches and profiles",
    ],
    keyPhrases: [
      "Republic of China (Taiwan)",
      "status quo",
      "peace, parity, democracy, dialogue",
      "democratic consent",
    ],
    implications: [
      "Rejects PRC jurisdiction over Taiwan",
      "Seeks international participation despite diplomatic constraints",
      "Frames cross-Strait policy through democratic legitimacy and public opinion",
    ],
    caveat:
      "Taiwan's domestic politics are plural; official statements do not exhaust the range of views within Taiwan's society.",
    sourceIds: ["taiwan-gov-history", "taiwan-mac-policy", "president-tsai-profile", "president-lai-profile"],
  },
  {
    id: "us",
    heading: "U.S. policy position",
    summary:
      "The United States states that its One China policy is guided by the Taiwan Relations Act, the three U.S.-PRC Joint Communiques, and the Six Assurances. The policy recognizes the PRC government as the sole legal government of China, maintains unofficial relations with Taiwan, and emphasizes peaceful resolution.",
    coreDocuments: [
      "Taiwan Relations Act",
      "Three U.S.-PRC Joint Communiques",
      "Six Assurances",
      "CRS summaries of the One China policy",
    ],
    keyPhrases: [
      "One China policy",
      "acknowledges the Chinese position",
      "unofficial relations",
      "peace and stability",
    ],
    implications: [
      "Maintains official relations with Beijing and unofficial relations with Taiwan",
      "Provides Taiwan defensive articles and services under U.S. law",
      "Does not treat the PRC One China principle as identical to U.S. policy",
    ],
    caveat:
      "U.S. policy is deliberately layered and has been interpreted through both executive practice and congressional action.",
    sourceIds: [
      "crs-one-china-policy",
      "ait-tra",
      "ait-shanghai-communique",
      "ait-normalization-communique",
      "ait-six-assurances",
    ],
  },
];
