export type PolicyDocument = {
  id: string;
  title: string;
  label: string;
  summary: string;
  historicalContext: string;
  whyItMatters: string;
  relatedDebates: string[];
  sourceIds: string[];
};

export const policyDocuments: PolicyDocument[] = [
  {
    id: "tra",
    title: "Taiwan Relations Act",
    label: "Domestic law",
    summary:
      "A U.S. statute that sustains unofficial relations with Taiwan and authorizes defense articles and services needed for Taiwan to maintain a sufficient self-defense capability.",
    historicalContext:
      "Congress enacted the TRA after the United States recognized the PRC and ended formal relations with the ROC government on Taiwan.",
    whyItMatters:
      "It gives U.S. policy a legal foundation independent from the diplomatic communiques with Beijing.",
    relatedDebates: [
      "Scope of U.S. support short of formal diplomatic recognition",
      "Arms sales and defensive character",
      "Whether strategic ambiguity remains adequate",
    ],
    sourceIds: ["ait-tra", "crs-one-china-policy"],
  },
  {
    id: "communiques",
    title: "Three U.S.-China Joint Communiques",
    label: "Diplomatic texts",
    summary:
      "The 1972, 1979, and 1982 communiques define the U.S.-PRC diplomatic framework, including recognition of the PRC government and U.S. acknowledgement of the Chinese position on Taiwan.",
    historicalContext:
      "The documents emerged from U.S.-PRC rapprochement, normalization, and negotiations over arms sales to Taiwan.",
    whyItMatters:
      "They are essential to understanding why U.S. policy uses careful language such as 'acknowledge' rather than simply adopting the PRC's position.",
    relatedDebates: [
      "Meaning of 'acknowledge' in U.S. policy",
      "Relationship between the 1982 communique and later arms sales",
      "Whether PRC and U.S. interpretations have diverged over time",
    ],
    sourceIds: [
      "ait-shanghai-communique",
      "ait-normalization-communique",
      "ait-1982-communique",
      "crs-one-china-policy",
    ],
  },
  {
    id: "six-assurances",
    title: "Six Assurances",
    label: "Executive assurances",
    summary:
      "Statements conveyed to Taiwan in 1982 about what the United States had not agreed to with the PRC, including no agreed end date for arms sales and no U.S. pressure on Taiwan to negotiate.",
    historicalContext:
      "The assurances were paired with the August 17 Communique and later declassified in U.S. records.",
    whyItMatters:
      "They shape how U.S. officials and Congress interpret the 1982 communique and U.S. obligations to Taiwan.",
    relatedDebates: [
      "Different official versions of the assurances",
      "Whether the assurances constrain future administrations",
      "How sovereignty language should be interpreted",
    ],
    sourceIds: ["ait-six-assurances", "crs-six-assurances"],
  },
  {
    id: "strategic-ambiguity",
    title: "Strategic ambiguity",
    label: "Policy posture",
    summary:
      "A U.S. posture that avoids an unconditional public promise to defend Taiwan while maintaining the capacity to resist coercion and preserving space for political decision-making.",
    historicalContext:
      "The posture developed from the TRA, alliance politics, and U.S. efforts to deter both PRC force and unilateral moves that could trigger crisis.",
    whyItMatters:
      "It is central to deterrence debates because it can reassure, restrain, and confuse different audiences at the same time.",
    relatedDebates: [
      "Strategic clarity versus ambiguity",
      "Deterring PRC coercion without encouraging unilateral escalation",
      "Congressional and executive roles in crisis decisions",
    ],
    sourceIds: ["ait-tra", "crs-background-us-relations", "crs-one-china-policy"],
  },
  {
    id: "arms-deterrence",
    title: "U.S. arms sales and deterrence",
    label: "Security policy",
    summary:
      "The United States makes defense articles and services available to Taiwan under the TRA, while the PRC objects to such sales as interference in what it defines as an internal issue.",
    historicalContext:
      "Arms sales remained unresolved during normalization and became the core issue in the 1982 communique and Six Assurances.",
    whyItMatters:
      "Arms sales are both a practical defense tool and a diplomatic signal, which makes them persistently contested.",
    relatedDebates: [
      "Asymmetric defense and survivability",
      "How arms packages affect crisis stability",
      "Whether arms sales deter coercion or provoke escalation",
    ],
    sourceIds: ["ait-tra", "ait-1982-communique", "ait-six-assurances"],
  },
  {
    id: "ait-relations",
    title: "Unofficial U.S.-Taiwan relations through AIT",
    label: "Institutional channel",
    summary:
      "The American Institute in Taiwan is the principal nongovernmental mechanism through which the United States conducts unofficial relations with Taiwan.",
    historicalContext:
      "The TRA authorized the use of a nonprofit corporation after the United States ended formal diplomatic relations with the ROC.",
    whyItMatters:
      "AIT makes unofficial relations operational across commerce, culture, consular services, and policy communication.",
    relatedDebates: [
      "Boundary between official and unofficial contacts",
      "Protocol, symbolism, and diplomatic signaling",
      "Taiwan's international space",
    ],
    sourceIds: ["ait-tra", "ait-policy-docs", "crs-one-china-policy"],
  },
];
