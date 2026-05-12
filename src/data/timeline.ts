export type TimelineCategory =
  | "Imperial / colonial period"
  | "ROC and PRC formation"
  | "U.S.-PRC normalization"
  | "Taiwan democratization"
  | "Cross-Strait crises"
  | "Contemporary policy period";

export type TimelineTag =
  | "law"
  | "diplomacy"
  | "military"
  | "election"
  | "economy"
  | "identity";

export type TimelineEvent = {
  id: string;
  date: string;
  year: number;
  title: string;
  category: TimelineCategory;
  tag: TimelineTag;
  explanation: string;
  whyItMatters: string;
  sourceIds: string[];
  narrativeNote?: string;
};

export const timelineCategories: TimelineCategory[] = [
  "Imperial / colonial period",
  "ROC and PRC formation",
  "U.S.-PRC normalization",
  "Taiwan democratization",
  "Cross-Strait crises",
  "Contemporary policy period",
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1895-shimonoseki",
    date: "April 17, 1895",
    year: 1895,
    title: "Treaty of Shimonoseki and Japanese rule over Taiwan",
    category: "Imperial / colonial period",
    tag: "law",
    explanation:
      "The Treaty of Shimonoseki ended the First Sino-Japanese War and transferred Taiwan and Penghu from Qing rule to Japan. Taiwan then entered a fifty-year period of Japanese colonial administration that transformed infrastructure, law, education, and identity. Later political narratives treat this moment differently: PRC narratives emphasize Taiwan's earlier place in Chinese history, while Taiwan official accounts often mark 1895 as the beginning of Japanese colonial rule before postwar ROC administration.",
    whyItMatters:
      "The treaty is a legal-historical anchor for arguments about interrupted sovereignty, colonial rule, and the meaning of post-1945 administration.",
    sourceIds: ["jacar-shimonoseki", "taiwan-gov-history", "crs-one-china-policy"],
    narrativeNote:
      "PRC and Taiwan official narratives both discuss 1895, but they emphasize different implications for later sovereignty claims.",
  },
  {
    id: "1912-roc",
    date: "1912",
    year: 1912,
    title: "Founding of the Republic of China",
    category: "ROC and PRC formation",
    tag: "identity",
    explanation:
      "The Republic of China was established after the fall of the Qing dynasty. Taiwan, however, was still under Japanese rule when the ROC was founded on the mainland. This distinction is important because modern Taiwan's constitutional institutions trace themselves to the ROC, while Taiwan's society experienced Japanese rule until the end of World War II. Later legal-historical debates therefore separate the founding of the ROC from the later question of Taiwan's administration.",
    whyItMatters:
      "The ROC's founding is central to Taiwan's constitutional vocabulary, even though the polity's territorial base changed dramatically after 1949.",
    sourceIds: ["taiwan-gov-history", "crs-one-china-policy"],
    narrativeNote:
      "Taiwan authorities usually describe institutional continuity from the ROC, while scholars distinguish institutional continuity from settled sovereignty.",
  },
  {
    id: "1945-postwar-transfer",
    date: "1945",
    year: 1945,
    title: "Postwar transfer of Taiwan's administration to the ROC",
    category: "ROC and PRC formation",
    tag: "law",
    explanation:
      "After Japan's surrender in World War II, ROC officials accepted the surrender of Japanese forces in Taiwan and began administering the island. Taiwan government sources describe this as the ROC government exercising jurisdiction after 1945. Some legal scholars and governments have debated whether postwar instruments fully resolved sovereignty, so the site treats 1945 as an administrative transfer and attributes broader legal claims to the actors making them.",
    whyItMatters:
      "The distinction between administration, jurisdiction, and final legal sovereignty is one reason the dispute resists a single neutral formulation.",
    sourceIds: ["taiwan-gov-history", "crs-one-china-policy"],
    narrativeNote:
      "The website uses 'administration' here because it is narrower than a final legal judgment on sovereignty.",
  },
  {
    id: "1949-prc-roc",
    date: "1949",
    year: 1949,
    title: "PRC founding and ROC government relocation to Taiwan",
    category: "ROC and PRC formation",
    tag: "identity",
    explanation:
      "The Chinese Civil War produced two rival governments: the PRC was founded in Beijing, while the ROC government relocated to Taiwan. Taiwan official sources state that the ROC has since exercised effective jurisdiction over Taiwan and several outlying islands. The PRC government states that Taiwan is part of China and that the PRC represents China. U.S. policy shifted later, but the post-1949 division remains the central historical structure of the dispute.",
    whyItMatters:
      "The split created competing claims of representation, jurisdiction, and legitimacy that still shape diplomacy and domestic politics.",
    sourceIds: ["taiwan-gov-history", "crs-one-china-policy", "prc-2022-white-paper"],
    narrativeNote:
      "This event should not be flattened into a simple state-versus-state story; it emerged from civil-war institutions and postwar geopolitics.",
  },
  {
    id: "1954-1958-crises",
    date: "1954-55 and 1958",
    year: 1954,
    title: "First and Second Taiwan Strait crises",
    category: "Cross-Strait crises",
    tag: "military",
    explanation:
      "Armed crises erupted around ROC-held offshore islands, especially Jinmen and Mazu. The U.S. Department of State historical account describes PRC bombardment, U.S. support for the ROC, and the role of the 1954 U.S.-ROC Mutual Defense Treaty. The crises also showed how limited geography could produce wider escalation risks: the offshore islands were close to the mainland but politically tied to the ROC's survival and U.S. Cold War strategy.",
    whyItMatters:
      "The crises established a pattern in which local military pressure, U.S. deterrence, and political signaling interacted across the Strait.",
    sourceIds: ["state-taiwan-crises"],
    narrativeNote:
      "Later deterrence debates often return to these crises because they show how ambiguity and alliance politics can both restrain and intensify risk.",
  },
  {
    id: "1971-un-2758",
    date: "October 25, 1971",
    year: 1971,
    title: "UN General Assembly Resolution 2758",
    category: "U.S.-PRC normalization",
    tag: "diplomacy",
    explanation:
      "UN General Assembly Resolution 2758 recognized the representatives of the PRC as China's representatives at the United Nations and expelled the representatives of Chiang Kai-shek. The resolution is central to today's diplomatic dispute because the PRC cites it as confirmation of the One China principle, while Taiwan and some U.S. congressional materials argue that it did not settle Taiwan's sovereignty or its participation in international organizations.",
    whyItMatters:
      "Resolution 2758 shapes international representation, but its meaning for Taiwan's legal status remains politically contested.",
    sourceIds: ["un-res-2758", "crs-one-china-policy", "prc-2022-white-paper"],
    narrativeNote:
      "The site presents the resolution's text separately from later claims about what the text implies.",
  },
  {
    id: "1972-shanghai",
    date: "February 28, 1972",
    year: 1972,
    title: "Shanghai Communique",
    category: "U.S.-PRC normalization",
    tag: "diplomacy",
    explanation:
      "The Shanghai Communique opened the U.S.-PRC rapprochement. On Taiwan, the PRC stated its position that the PRC government was the sole legal government of China and that Taiwan was a province of China. The United States acknowledged that Chinese on either side of the Strait maintained there was one China and that Taiwan was part of China, and stated that it did not challenge that position while expressing interest in a peaceful settlement.",
    whyItMatters:
      "The communique introduced wording that still matters: acknowledgement is not identical to endorsement, and that distinction remains central to U.S. policy.",
    sourceIds: ["ait-shanghai-communique", "crs-one-china-policy"],
    narrativeNote:
      "Readers should distinguish the PRC position inside the document from the U.S. wording about that position.",
  },
  {
    id: "1979-normalization-tra",
    date: "1979",
    year: 1979,
    title: "U.S.-PRC normalization and the Taiwan Relations Act",
    category: "U.S.-PRC normalization",
    tag: "law",
    explanation:
      "The United States established diplomatic relations with the PRC and ended formal diplomatic relations with the ROC. Congress then enacted the Taiwan Relations Act, creating a domestic legal framework for continued unofficial relations with Taiwan and for making defense articles and services available. The result was a deliberately layered architecture: official ties with Beijing, unofficial relations with Taiwan, and a U.S. legal interest in peace and stability.",
    whyItMatters:
      "U.S. Taiwan policy is not a single document; it is a stack of diplomatic communiques, domestic law, and executive statements.",
    sourceIds: ["ait-normalization-communique", "ait-tra", "crs-one-china-policy"],
    narrativeNote:
      "The TRA is U.S. domestic law; the communiques are diplomatic texts with the PRC.",
  },
  {
    id: "1982-communique-assurances",
    date: "August 17, 1982",
    year: 1982,
    title: "August 17 Communique and Six Assurances",
    category: "U.S.-PRC normalization",
    tag: "diplomacy",
    explanation:
      "The 1982 communique addressed U.S. arms sales to Taiwan and the PRC's stated peaceful-unification policy. Before the communique was announced, U.S. officials conveyed assurances to Taiwan that the United States had not agreed to several PRC demands, including setting a date for ending arms sales or mediating between Taipei and Beijing. CRS notes that multiple official texts of the assurances exist, with some wording differences.",
    whyItMatters:
      "The pairing of the communique and assurances explains why arms sales remain both a policy tool and a recurring diplomatic dispute.",
    sourceIds: ["ait-1982-communique", "ait-six-assurances", "crs-six-assurances"],
    narrativeNote:
      "The documents should be read together because each side emphasizes different parts of the 1982 record.",
  },
  {
    id: "1987-martial-law",
    date: "July 15, 1987",
    year: 1987,
    title: "Lifting of martial law in Taiwan",
    category: "Taiwan democratization",
    tag: "identity",
    explanation:
      "Taiwan's martial-law era ended at midnight on July 15, 1987. The change did not complete democratization by itself, but it created political space for opposition parties, civic organizing, and later constitutional reforms. Taiwan official speeches frame the event as a transition from authoritarian rule toward freedom and democracy. For cross-Strait politics, democratization changed who could speak for Taiwan and made public opinion a central constraint on policy.",
    whyItMatters:
      "Democratization transformed Taiwan from a civil-war government in exile into a polity whose leaders must answer to voters.",
    sourceIds: ["president-martial-law", "taiwan-gov-history"],
    narrativeNote:
      "Many cross-Strait arguments changed after 1987 because Taiwan's domestic legitimacy increasingly rested on democratic consent.",
  },
  {
    id: "1995-1996-crisis",
    date: "1995-96",
    year: 1995,
    title: "Taiwan Strait crisis before the first direct presidential election",
    category: "Cross-Strait crises",
    tag: "military",
    explanation:
      "A major crisis followed rising tension around Taiwan's international profile and the run-up to Taiwan's first direct presidential election. PRC missile tests and military exercises were widely interpreted as coercive signaling. The United States deployed naval forces, while Taiwan proceeded with the election. The crisis became a reference point for later debates about deterrence, coercion, democratic resilience, and the risks created when electoral politics and military signaling overlap.",
    whyItMatters:
      "The crisis connected democratic transition directly to military pressure and U.S. signaling.",
    sourceIds: ["president-lai-profile", "crs-one-china-policy", "state-taiwan-crises"],
    narrativeNote:
      "The site's claim here is historical and analytical, not a prediction that future elections will follow the same pattern.",
  },
  {
    id: "1996-direct-election",
    date: "March 23, 1996",
    year: 1996,
    title: "First direct presidential election in Taiwan",
    category: "Taiwan democratization",
    tag: "election",
    explanation:
      "Taiwan held its first direct presidential election in 1996. This milestone made electoral consent a visible foundation of political authority in Taiwan and altered cross-Strait diplomacy. International actors could no longer treat Taiwan only as an unresolved civil-war claimant; they also had to account for a voting public with changing views on identity, security, and economic relations. Taiwan's elections remain central to how policies are made and interpreted.",
    whyItMatters:
      "Direct elections made Taiwan's society an independent variable in cross-Strait politics.",
    sourceIds: ["president-lai-profile", "president-tsai-profile", "crs-background-us-relations"],
    narrativeNote:
      "The democratic milestone is a factual event; its implications are interpreted differently by governments and scholars.",
  },
  {
    id: "2005-anti-secession",
    date: "March 14, 2005",
    year: 2005,
    title: "PRC Anti-Secession Law",
    category: "Contemporary policy period",
    tag: "law",
    explanation:
      "The PRC adopted the Anti-Secession Law, a domestic law that opposes Taiwan independence and sets conditions under which Beijing reserves the use of non-peaceful means. The PRC frames the law as protecting sovereignty and peaceful reunification. Taiwan authorities and many outside analysts treat it as a coercive legal instrument because it writes the possibility of force into PRC domestic law. The website attributes both readings rather than resolving them.",
    whyItMatters:
      "The law is a key legal reference for PRC policy and for security debates about coercion and escalation.",
    sourceIds: ["prc-anti-secession-law", "prc-2022-white-paper", "taiwan-mac-policy"],
    narrativeNote:
      "This event illustrates why legal texts can be evidence of an official position without settling international legal disputes.",
  },
  {
    id: "2016-election",
    date: "January 16, 2016",
    year: 2016,
    title: "2016 Taiwan election and the DPP return to power",
    category: "Taiwan democratization",
    tag: "election",
    explanation:
      "Tsai Ing-wen was elected president in 2016, and the DPP won a legislative majority. Taiwan official biographical materials record Tsai as Taiwan's first female head of state and note her 2016-2024 term. The election affected cross-Strait politics because the DPP did not accept Beijing's preferred formulation of the 1992 Consensus, while Tsai's administration emphasized constitutional procedures, peace, parity, democracy, and dialogue.",
    whyItMatters:
      "The 2016 result shifted both domestic governing power and the diplomatic vocabulary around the status quo.",
    sourceIds: ["president-tsai-profile", "brookings-2016-election", "academic-2016-election"],
    narrativeNote:
      "The election can be described factually; interpretations of its mandate differ among parties and governments.",
  },
  {
    id: "2020-election",
    date: "January 11, 2020",
    year: 2020,
    title: "2020 Taiwan election and continuity under Tsai Ing-wen",
    category: "Taiwan democratization",
    tag: "election",
    explanation:
      "Tsai Ing-wen was re-elected in 2020 with over 8.17 million votes, according to Taiwan's presidential office. The election followed a period of heightened attention to Hong Kong, PRC pressure, and Taiwan's own debates over identity and security. The result strengthened policy continuity in Taipei while leaving unresolved the deeper question of whether Beijing and Taipei could restore a mutually acceptable framework for cross-Strait dialogue.",
    whyItMatters:
      "The election reinforced the importance of public consent and domestic identity in Taiwan's approach to Beijing.",
    sourceIds: ["president-tsai-profile", "crs-background-us-relations"],
    narrativeNote:
      "The vote total is official; conclusions about voter motivations are interpretive and should be attributed.",
  },
  {
    id: "2024-election",
    date: "January 13 and May 20, 2024",
    year: 2024,
    title: "2024 Taiwan election and Lai Ching-te inauguration",
    category: "Taiwan democratization",
    tag: "election",
    explanation:
      "Taiwan held presidential and legislative elections in January 2024, and Lai Ching-te was inaugurated in May 2024. Taiwan's Central Election Commission provides official election records, while the Office of the President records Lai's election and inauguration. The result gave the DPP a third consecutive presidential term, but the legislature became more politically contested, making Taiwan's cross-Strait policy part of a broader democratic bargaining process.",
    whyItMatters:
      "The 2024 election is the current democratic baseline for interpreting Taiwan's policy statements and PRC responses.",
    sourceIds: ["taiwan-cec-2024", "president-lai-profile", "rti-2024-election"],
    narrativeNote:
      "Election results are factual; their cross-Strait meaning should be treated as a debated interpretation.",
  },
  {
    id: "2024-joint-sword",
    date: "May 23, 2024",
    year: 2024,
    title: "Joint Sword-2024A and recent military pressure",
    category: "Contemporary policy period",
    tag: "military",
    explanation:
      "After Lai Ching-te's inauguration, Taiwan's Ministry of National Defense reported that the PLA Eastern Theater Command announced Joint Sword-2024A exercises in sea and airspace around Taiwan. Taiwan characterized the drills as destabilizing, while Beijing framed such activities through its sovereignty and anti-separatism narrative. For this site, the event is included as a verified recent development, not as evidence of a predetermined conflict pathway.",
    whyItMatters:
      "Recent exercises show how military signaling, political speeches, and deterrence claims continue to interact across the Strait.",
    sourceIds: ["taiwan-mnd-joint-sword-2024a", "prc-2022-white-paper", "csis-blockade"],
    narrativeNote:
      "The event belongs in scenario analysis and military-pressure analysis, not in deterministic war prediction.",
  },
];
