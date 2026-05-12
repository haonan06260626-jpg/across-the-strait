export type SourceCategory =
  | "Official PRC sources"
  | "Official Taiwan / ROC sources"
  | "Official U.S. sources"
  | "Congressional / legal documents"
  | "Think tank analysis"
  | "Academic articles"
  | "News / current events";

export type SourceRecord = {
  id: string;
  title: string;
  institution: string;
  author?: string;
  year: string;
  category: SourceCategory;
  viewpoint: string;
  reliability: string;
  url: string;
  sections: string[];
  preview: string;
};

export const sources: SourceRecord[] = [
  {
    id: "taiwan-gov-history",
    title: "History",
    institution: "Government Portal of the Republic of China (Taiwan)",
    year: "current page",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan official historical narrative",
    reliability:
      "Official government portal; useful for the ROC/Taiwan government's account of major dates and institutional continuity.",
    url: "https://taiwan.gov.tw/content_3.php",
    sections: ["Overview", "Timeline", "Competing Positions"],
    preview:
      "Summarizes Taiwan's recorded history, Japanese rule, ROC administration after 1945, and the 1949 relocation of the ROC government to Taiwan.",
  },
  {
    id: "jacar-shimonoseki",
    title: "Peace treaty concluded between Japan and China (Treaty of Shimonoseki)",
    institution: "Japan Center for Asian Historical Records",
    year: "1895 document exhibit",
    category: "Academic articles",
    viewpoint: "Historical archive",
    reliability:
      "Archive-based exhibit linking to treaty records and public-domain historical materials.",
    url: "https://www.jacar.go.jp/english/exhibition/jacarbl-fsjwar-e/main/18950417/index.html",
    sections: ["Timeline", "Bibliography"],
    preview:
      "Identifies the April 17, 1895 treaty signed by Japan and Qing China after the First Sino-Japanese War.",
  },
  {
    id: "state-taiwan-crises",
    title: "The Taiwan Straits Crises: 1954-55 and 1958",
    institution: "U.S. Department of State, Office of the Historian",
    year: "retired historical reference",
    category: "Official U.S. sources",
    viewpoint: "U.S. diplomatic history",
    reliability:
      "Official historical reference; the page is retired but remains useful for chronology and U.S. policy context.",
    url: "https://history.state.gov/milestones/1953-1960/taiwan-strait-crises",
    sections: ["Timeline", "Security & Economics"],
    preview:
      "Explains the offshore-island crises, U.S. involvement, and the strategic role of Jinmen, Mazu, and related islands.",
  },
  {
    id: "un-res-2758",
    title: "Restoration of the lawful rights of the People's Republic of China in the United Nations",
    institution: "United Nations Digital Library",
    year: "1971",
    category: "Congressional / legal documents",
    viewpoint: "UN institutional record",
    reliability:
      "Primary UN record for Resolution 2758; legal interpretations of the resolution remain disputed by governments and scholars.",
    url: "https://digitallibrary.un.org/record/192054",
    sections: ["Timeline", "Competing Positions", "Documents"],
    preview:
      "UN General Assembly Resolution 2758 seated PRC representatives as China's UN representatives and expelled Chiang Kai-shek's representatives.",
  },
  {
    id: "ait-policy-docs",
    title: "Key U.S. Foreign Policy Documents for the Region",
    institution: "American Institute in Taiwan",
    year: "archived page",
    category: "Official U.S. sources",
    viewpoint: "U.S. policy document archive",
    reliability:
      "Archived AIT page listing the Taiwan Relations Act, the three communiques, and declassified Six Assurances cables.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/index.html",
    sections: ["U.S. Policy", "Documents"],
    preview:
      "A document hub for the main U.S. policy texts used by the website.",
  },
  {
    id: "ait-shanghai-communique",
    title: "U.S.-PRC Joint Communique (Shanghai Communique)",
    institution: "American Institute in Taiwan",
    year: "1972",
    category: "Official U.S. sources",
    viewpoint: "Joint U.S.-PRC diplomatic text",
    reliability:
      "Archived official U.S. posting of the 1972 communique; use alongside later U.S. policy statements for interpretation.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/u-s-prc-joint-communique-1972/index.html",
    sections: ["Timeline", "U.S. Policy", "Competing Positions"],
    preview:
      "Records the PRC position and the U.S. acknowledgement language that became central to later U.S. policy.",
  },
  {
    id: "ait-normalization-communique",
    title: "U.S.-PRC Joint Communique on the Establishment of Diplomatic Relations",
    institution: "American Institute in Taiwan",
    year: "1979",
    category: "Official U.S. sources",
    viewpoint: "Joint U.S.-PRC diplomatic text",
    reliability:
      "Archived official U.S. posting of the normalization communique establishing diplomatic relations with the PRC.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/u-s-prc-joint-communique-1979/index.html",
    sections: ["Timeline", "U.S. Policy", "Documents"],
    preview:
      "Sets the 1979 recognition framework and continued cultural, commercial, and unofficial relations with Taiwan.",
  },
  {
    id: "ait-1982-communique",
    title: "U.S.-PRC Joint Communique on Arms Sales",
    institution: "American Institute in Taiwan",
    year: "1982",
    category: "Official U.S. sources",
    viewpoint: "Joint U.S.-PRC diplomatic text",
    reliability:
      "Archived official U.S. posting of the August 17 Communique; should be read with the Taiwan Relations Act and Six Assurances.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/u-s-prc-joint-communique-1982/index.html",
    sections: ["Timeline", "U.S. Policy", "Documents"],
    preview:
      "Addresses U.S. arms sales to Taiwan and the stated expectation of peaceful resolution.",
  },
  {
    id: "ait-tra",
    title: "Taiwan Relations Act",
    institution: "American Institute in Taiwan",
    year: "1979",
    category: "Congressional / legal documents",
    viewpoint: "U.S. domestic legal framework",
    reliability:
      "Archived AIT text of Public Law 96-8; official legal text for the U.S. framework of unofficial Taiwan relations.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/taiwan-relations-act/index.html",
    sections: ["Overview", "Timeline", "U.S. Policy", "Security & Economics"],
    preview:
      "Authorizes continued commercial, cultural, and other relations and states U.S. policy on Taiwan's self-defense capacity.",
  },
  {
    id: "ait-six-assurances",
    title: "Declassified Cables: Taiwan Arms Sales and Six Assurances",
    institution: "American Institute in Taiwan",
    year: "1982 / declassified",
    category: "Official U.S. sources",
    viewpoint: "U.S. executive-branch policy record",
    reliability:
      "Official archived cables; useful for the U.S. commitments not made during the 1982 communique negotiations.",
    url: "https://web-archive-2022.ait.org.tw/our-relationship/policy-history/key-u-s-foreign-policy-documents-region/six-assurances-1982/index.html",
    sections: ["Timeline", "U.S. Policy", "Competing Positions"],
    preview:
      "Lists assurances including no agreed end date for arms sales and no agreed U.S. mediation role between Taipei and Beijing.",
  },
  {
    id: "crs-six-assurances",
    title: "President Reagan's Six Assurances to Taiwan",
    institution: "Congressional Research Service via Congress.gov",
    author: "Susan V. Lawrence",
    year: "2025",
    category: "Congressional / legal documents",
    viewpoint: "Nonpartisan U.S. congressional analysis",
    reliability:
      "CRS product for Congress; useful for comparing official texts and congressional treatment of the Six Assurances.",
    url: "https://www.congress.gov/crs-product/IF11665",
    sections: ["U.S. Policy", "Documents", "Bibliography"],
    preview:
      "Explains the different public texts of the Six Assurances and their use in U.S. legislation.",
  },
  {
    id: "crs-one-china-policy",
    title: "The U.S. 'One-China' Policy and Taiwan",
    institution: "Congressional Research Service via Congress.gov",
    author: "Susan V. Lawrence",
    year: "2025",
    category: "Congressional / legal documents",
    viewpoint: "Nonpartisan U.S. congressional analysis",
    reliability:
      "CRS product distinguishing the U.S. One-China policy from the PRC One-China principle and summarizing governing documents.",
    url: "https://www.congress.gov/crs-product/IF12503",
    sections: ["Overview", "Competing Positions", "U.S. Policy", "Documents"],
    preview:
      "Clarifies that the U.S. One-China policy is distinct from the PRC's One-China principle and is guided by several documents.",
  },
  {
    id: "crs-background-us-relations",
    title: "Taiwan: Background and U.S. Relations",
    institution: "Congressional Research Service via Congress.gov",
    author: "Susan V. Lawrence",
    year: "2025",
    category: "Congressional / legal documents",
    viewpoint: "Nonpartisan U.S. congressional analysis",
    reliability:
      "CRS summary of Taiwan's political status, U.S. policy, security issues, and congressional concerns.",
    url: "https://www.congress.gov/crs-product/IF10275",
    sections: ["Overview", "U.S. Policy", "Security & Economics"],
    preview:
      "Describes Taiwan as a self-governing democracy and summarizes U.S. policy under the TRA, communiques, and Six Assurances.",
  },
  {
    id: "prc-2022-white-paper",
    title: "The Taiwan Question and China's Reunification in the New Era",
    institution: "PRC State Council Information Office",
    year: "2022",
    category: "Official PRC sources",
    viewpoint: "PRC official position",
    reliability:
      "Primary PRC official statement; should be attributed as the PRC government's position rather than treated as an uncontested fact.",
    url: "https://english.www.gov.cn/archive/whitepaper/202208/10/content_WS62f34f46c6d02e533532f0ac.html",
    sections: ["Overview", "Competing Positions", "Security & Economics", "Documents"],
    preview:
      "States the PRC's reunification position, One China principle, and claimed legal-historical basis.",
  },
  {
    id: "prc-anti-secession-law",
    title: "Anti-Secession Law",
    institution: "National People's Congress / PRC official translation reposted by Taiwan.cn",
    year: "2005",
    category: "Official PRC sources",
    viewpoint: "PRC domestic legal position",
    reliability:
      "Official PRC legal text; the law's international meaning and legitimacy are contested by other actors.",
    url: "https://eng.taiwan.cn/speeches_remarks_documents_on_the_taiwan_question/key_documents/anti_secession_law/",
    sections: ["Timeline", "Competing Positions", "Security & Economics", "Documents"],
    preview:
      "PRC domestic legislation opposing Taiwan independence and setting conditions under which Beijing reserves non-peaceful measures.",
  },
  {
    id: "taiwan-mac-policy",
    title: "What is the government's cross-Strait policy?",
    institution: "Mainland Affairs Council, Republic of China (Taiwan)",
    year: "current page",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan official policy",
    reliability:
      "Official Taiwan cross-Strait policy page; use as an attributed statement of Taiwan government policy.",
    url: "https://www.mac.gov.tw/en/News_Content.aspx?n=4C27E6551520EEFD&s=2788BD1B76FB8DBC&sms=1916A801AA635C8A",
    sections: ["Overview", "Competing Positions", "Methodology"],
    preview:
      "States that Taiwan's government conducts cross-Strait affairs under the ROC Constitution and related laws while maintaining peace and stability.",
  },
  {
    id: "president-martial-law",
    title: "Remarks in Commemoration of Taiwan's 20th Anniversary of the Lifting of Martial Law",
    institution: "Office of the President, Republic of China (Taiwan)",
    year: "2007",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan official historical commemoration",
    reliability:
      "Official presidential speech; useful for the official account of the end of martial law and democratization.",
    url: "https://english.president.gov.tw/NEWS/2717",
    sections: ["Timeline", "Overview"],
    preview:
      "Marks the end of martial law at midnight on July 15, 1987 and frames the event as a democratic transition milestone.",
  },
  {
    id: "president-tsai-profile",
    title: "Tsai Ing-wen, 14th-15th Terms",
    institution: "Office of the President, Republic of China (Taiwan)",
    year: "2024 page",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan official biographical record",
    reliability:
      "Official presidential profile; useful for election and term dates but not neutral about policy achievements.",
    url: "https://english.president.gov.tw/Page/646",
    sections: ["Timeline", "Competing Positions", "Security & Economics"],
    preview:
      "Records Tsai Ing-wen's 2016 election, 2020 re-election, and cross-Strait policy framing.",
  },
  {
    id: "president-lai-profile",
    title: "Inauguration of the 16th-term President and Vice President",
    institution: "Office of the President, Republic of China (Taiwan)",
    year: "2024",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan official biographical record",
    reliability:
      "Official presidential profile for Lai Ching-te; use for inauguration and official biographical details.",
    url: "https://english.president.gov.tw/Page/648",
    sections: ["Timeline", "Competing Positions"],
    preview:
      "Records Lai Ching-te's January 2024 election and May 2024 inauguration.",
  },
  {
    id: "taiwan-cec-2024",
    title: "2024 Presidential and Vice Presidential Election",
    institution: "Central Election Commission, Taiwan",
    year: "2024",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Election administration record",
    reliability:
      "Official election-results page from Taiwan's election authority.",
    url: "https://web.cec.gov.tw/english/article/41410",
    sections: ["Timeline", "Documents"],
    preview:
      "Official election-results landing page for Taiwan's 2024 presidential and vice-presidential election.",
  },
  {
    id: "taiwan-mnd-joint-sword-2024a",
    title: "MND press release on Joint Sword-2024A",
    institution: "Ministry of National Defense, Republic of China (Taiwan)",
    year: "2024",
    category: "Official Taiwan / ROC sources",
    viewpoint: "Taiwan defense ministry statement",
    reliability:
      "Official defense ministry press release; describes Taiwan's response and uses Taiwan government framing.",
    url: "https://www.mnd.gov.tw/en/Publication/83035",
    sections: ["Timeline", "Security & Economics"],
    preview:
      "States that the PLA Eastern Theater Command announced Joint Sword-2024A exercises around Taiwan on May 23, 2024.",
  },
  {
    id: "csis-blockade",
    title: "How China Could Blockade Taiwan",
    institution: "CSIS China Power Project",
    year: "2024",
    category: "Think tank analysis",
    viewpoint: "Independent policy analysis",
    reliability:
      "Think tank scenario analysis based on Chinese writings, tabletop exercises, expert consultations, and surveys.",
    url: "https://features.csis.org/chinapower/china-blockade-taiwan/",
    sections: ["Security & Economics"],
    preview:
      "Maps blockade and quarantine scenarios as analytical categories and stresses uncertainty, escalation risk, and operational complexity.",
  },
  {
    id: "crs-semiconductor",
    title: "Taiwan's Role in Global Semiconductor Supply Chains",
    institution: "Congressional Research Service via Congress.gov",
    author: "Karen M. Sutter, Cassandra Higgins, Juan Pablo Madrid",
    year: "2025",
    category: "Congressional / legal documents",
    viewpoint: "Nonpartisan U.S. congressional analysis",
    reliability:
      "CRS product for Congress; useful for high-level supply-chain facts and U.S. policy implications.",
    url: "https://www.congress.gov/crs-product/IG10073",
    sections: ["Security & Economics", "Documents"],
    preview:
      "Describes semiconductors as strategically important and identifies Taiwan and TSMC as central to advanced-chip production.",
  },
  {
    id: "csis-silicon-island",
    title: "Silicon Island: Assessing Taiwan's Importance to U.S. Economic Growth and Security",
    institution: "Center for Strategic and International Studies",
    year: "2025",
    category: "Think tank analysis",
    viewpoint: "Independent policy analysis",
    reliability:
      "Think tank analysis of U.S.-Taiwan technology interdependence; useful for synthesis rather than primary legal claims.",
    url: "https://www.csis.org/analysis/silicon-island-assessing-taiwans-importance-us-economic-growth-and-security",
    sections: ["Security & Economics", "Bibliography"],
    preview:
      "Examines Taiwan's semiconductor ecosystem, U.S. technology dependence, and debates over diversification and economic security.",
  },
  {
    id: "nist-tsmc-arizona",
    title: "TSMC Arizona",
    institution: "U.S. National Institute of Standards and Technology",
    year: "current page",
    category: "Official U.S. sources",
    viewpoint: "U.S. industrial policy source",
    reliability:
      "Official U.S. CHIPS program page; useful for U.S.-based capacity and public claims about leading-edge chips.",
    url: "https://www.nist.gov/chips/tsmc-arizona-phoenix",
    sections: ["Security & Economics"],
    preview:
      "States that TSMC manufactures over 90 percent of the world's leading-edge logic chips and describes Arizona fab plans.",
  },
  {
    id: "rti-2024-election",
    title: "DPP's Lai Ching-te wins 2024 presidential election",
    institution: "Radio Taiwan International",
    year: "2024",
    category: "News / current events",
    viewpoint: "Taiwan public broadcaster news report",
    reliability:
      "Useful for contemporaneous election reporting; primary election data should be checked against the CEC.",
    url: "https://en.rti.org.tw/news/view/id/2010580",
    sections: ["Timeline", "Bibliography"],
    preview:
      "Reports Lai Ching-te and Hsiao Bi-khim's victory in the 2024 presidential election.",
  },
  {
    id: "brookings-2016-election",
    title: "Taiwan's election results, explained",
    institution: "Brookings Institution",
    author: "Richard C. Bush",
    year: "2016",
    category: "Think tank analysis",
    viewpoint: "Independent policy analysis",
    reliability:
      "Expert analysis from a research institution; useful for interpreting the 2016 election's political implications.",
    url: "https://www.brookings.edu/articles/taiwans-election-results-explained/",
    sections: ["Timeline", "Bibliography"],
    preview:
      "Analyzes the DPP's 2016 victory and implications for cross-Strait politics.",
  },
  {
    id: "academic-2016-election",
    title: "The 2016 Election and Prospects for Taiwan's Democracy",
    institution: "Orbis / ScienceDirect",
    year: "2016",
    category: "Academic articles",
    viewpoint: "Scholarly interpretation",
    reliability:
      "Academic article record; access may depend on institutional subscriptions.",
    url: "https://www.sciencedirect.com/science/article/pii/S0030438716300321",
    sections: ["Bibliography"],
    preview:
      "Scholarly analysis of Taiwan's 2016 election and democratic development.",
  },
  {
    id: "rand-gray-zone",
    title: "Gaining Victory in Systems Warfare: China's Perspective on the U.S.-China Military Balance",
    institution: "RAND Corporation",
    year: "2023",
    category: "Think tank analysis",
    viewpoint: "Independent defense analysis",
    reliability:
      "Research institution report; useful for defense-analysis context, not a prediction of a specific conflict.",
    url: "https://www.rand.org/pubs/research_reports/RRA591-1.html",
    sections: ["Security & Economics", "Bibliography"],
    preview:
      "Provides context for military competition and escalation risk in a U.S.-China contingency environment.",
  },
];

export const sourceNumberById = sources.reduce<Record<string, number>>((acc, source, index) => {
  acc[source.id] = index + 1;
  return acc;
}, {});

export function getSource(id: string) {
  return sources.find((source) => source.id === id);
}

export function getSources(ids: string[]) {
  return ids.map((id) => getSource(id)).filter(Boolean) as SourceRecord[];
}
