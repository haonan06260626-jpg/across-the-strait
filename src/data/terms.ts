import type { LocalizedText } from "@/i18n/config";

export type TermRecord = {
  term: LocalizedText;
  aliases?: string[];
  definition: LocalizedText;
  whyItMatters: LocalizedText;
  sourceIds: string[];
  relatedSections: string[];
};

export const keyTerms: TermRecord[] = [
  {
    term: { en: "U.S. One China policy", "zh-CN": "美国的“一个中国”政策" },
    aliases: ["One China policy", "一个中国政策"],
    definition: {
      en: "The U.S. policy framework that recognizes the PRC government as the sole legal government of China, maintains unofficial relations with Taiwan, and is guided by the Taiwan Relations Act, Three Communiqués, and Six Assurances.",
      "zh-CN": "美国的政策框架：承认中华人民共和国政府是中国的唯一合法政府，同时维持与台湾的非官方关系，并受《台湾关系法》、三个联合公报和六项保证等安排影响。",
    },
    whyItMatters: {
      en: "It is distinct from the PRC's One China principle and is central to how Washington describes its Taiwan policy.",
      "zh-CN": "它不同于中国大陆的“一个中国原则”，是理解美国如何表述其台湾政策的核心概念。",
    },
    sourceIds: ["crs-one-china-policy", "ait-policy-docs"],
    relatedSections: ["U.S. Policy", "Competing Positions", "Documents"],
  },
  {
    term: { en: "PRC One China principle", "zh-CN": "中国大陆的“一个中国原则”" },
    aliases: ["One China principle", "一个中国原则"],
    definition: {
      en: "The PRC position that there is one China, Taiwan is part of China, and the PRC government represents the whole of China.",
      "zh-CN": "中华人民共和国政府的立场，认为世界上只有一个中国、台湾是中国的一部分，中华人民共和国政府代表全中国。",
    },
    whyItMatters: {
      en: "It is the basis of Beijing's official sovereignty framing and should not be treated as identical to the U.S. One China policy.",
      "zh-CN": "它是北京官方主权叙事的基础，不应与美国的“一个中国”政策等同。",
    },
    sourceIds: ["prc-2022-white-paper", "crs-one-china-policy"],
    relatedSections: ["Competing Positions", "Timeline", "Documents"],
  },
  {
    term: { en: "Taiwan Relations Act", "zh-CN": "《台湾关系法》" },
    aliases: ["TRA", "台湾关系法"],
    definition: {
      en: "The 1979 U.S. statute establishing the framework for unofficial relations with Taiwan and defense-related policy after U.S.-PRC normalization.",
      "zh-CN": "1979年美国法律，在美中关系正常化后建立美国与台湾非官方关系和防务相关政策的框架。",
    },
    whyItMatters: {
      en: "It gives U.S. Taiwan policy a domestic legal basis separate from the diplomatic communiqués with Beijing.",
      "zh-CN": "它使美国台湾政策在与北京的外交公报之外，拥有独立的美国国内法基础。",
    },
    sourceIds: ["ait-tra", "crs-one-china-policy"],
    relatedSections: ["U.S. Policy", "Security & Economics", "Documents"],
  },
  {
    term: { en: "Three Communiqués", "zh-CN": "三个联合公报" },
    aliases: ["Three Communiques", "三个公报"],
    definition: {
      en: "The 1972, 1979, and 1982 U.S.-PRC diplomatic documents that structure recognition, normalization, and arms-sales issues.",
      "zh-CN": "1972年、1979年和1982年的美中外交文件，构成承认、关系正常化和对台军售议题的重要框架。",
    },
    whyItMatters: {
      en: "They are core diplomatic texts, but their language is interpreted alongside U.S. law and later assurances.",
      "zh-CN": "它们是核心外交文本，但其措辞需要与美国法律和后续保证一起解释。",
    },
    sourceIds: ["ait-policy-docs", "ait-shanghai-communique", "ait-normalization-communique", "ait-1982-communique"],
    relatedSections: ["U.S. Policy", "Timeline", "Documents"],
  },
  {
    term: { en: "Six Assurances", "zh-CN": "六项保证" },
    definition: {
      en: "U.S. assurances conveyed to Taiwan in 1982 describing commitments the United States had not made to the PRC during arms-sales negotiations.",
      "zh-CN": "美国在1982年向台湾传达的保证，用以说明美国在对台军售谈判中没有向中华人民共和国作出的若干承诺。",
    },
    whyItMatters: {
      en: "They shape how U.S. officials and Congress interpret the 1982 communiqué and later arms-sales policy.",
      "zh-CN": "它们影响美国官员和国会如何解释1982年公报以及后续对台军售政策。",
    },
    sourceIds: ["ait-six-assurances", "crs-six-assurances"],
    relatedSections: ["U.S. Policy", "Documents", "Bibliography"],
  },
  {
    term: { en: "Strategic ambiguity", "zh-CN": "战略模糊" },
    definition: {
      en: "A U.S. posture that avoids an unconditional public defense pledge while preserving capacity and political discretion to respond to coercion.",
      "zh-CN": "一种美国政策姿态：避免作出无条件公开防卫承诺，同时保留应对胁迫的能力和政治裁量空间。",
    },
    whyItMatters: {
      en: "It is central to deterrence debates because different audiences may read the same posture differently.",
      "zh-CN": "它位于威慑争论的核心，因为不同受众可能对同一姿态作出不同解读。",
    },
    sourceIds: ["ait-tra", "crs-background-us-relations"],
    relatedSections: ["U.S. Policy", "Security & Economics"],
  },
  {
    term: { en: "Status quo", "zh-CN": "现状" },
    definition: {
      en: "A contested phrase generally referring to no unilateral change by force or declaration, while preserving Taiwan's existing self-government and the diplomatic framework around it.",
      "zh-CN": "一个存在争议的概念，通常指不以武力或单方面声明改变既有安排，同时保留台湾现行自治状态及其周边外交框架。",
    },
    whyItMatters: {
      en: "Actors use the phrase differently, so the site attributes claims about who is preserving or changing it.",
      "zh-CN": "不同主体对这一词语的使用并不相同，因此本网站会归属谁在维护或改变现状的相关主张。",
    },
    sourceIds: ["taiwan-mac-policy", "crs-one-china-policy"],
    relatedSections: ["Competing Positions", "Overview", "Security & Economics"],
  },
  {
    term: { en: "Gray-zone tactics", "zh-CN": "灰色地带行动" },
    definition: {
      en: "Coercive actions below the threshold of open war, including military pressure, maritime enforcement, cyber activity, legal pressure, and information operations.",
      "zh-CN": "低于公开战争门槛的胁迫性行动，可能包括军事压力、海上执法、网络活动、法律压力和信息行动。",
    },
    whyItMatters: {
      en: "They help explain pressure short of war and why security analysis must include more than invasion scenarios.",
      "zh-CN": "它们有助于解释战争以下的压力，也说明安全分析不能只关注入侵情景。",
    },
    sourceIds: ["rand-gray-zone", "taiwan-mnd-joint-sword-2024a"],
    relatedSections: ["Security & Economics", "Timeline"],
  },
  {
    term: { en: "Deterrence", "zh-CN": "威慑" },
    definition: {
      en: "The effort to prevent an adversary from taking an action by shaping its expectations about cost, failure, escalation, or denial.",
      "zh-CN": "通过影响对方对成本、失败、升级或受阻可能性的预期，阻止其采取某种行动的努力。",
    },
    whyItMatters: {
      en: "Deterrence connects military posture, political signaling, economic risk, and alliance planning.",
      "zh-CN": "威慑把军事态势、政治信号、经济风险和联盟规划连接起来。",
    },
    sourceIds: ["ait-tra", "csis-blockade"],
    relatedSections: ["Security & Economics", "U.S. Policy"],
  },
  {
    term: { en: "Sovereignty", "zh-CN": "主权" },
    definition: {
      en: "Supreme legal authority over territory and people; in the Taiwan case, official claims and legal interpretations are disputed and must be attributed.",
      "zh-CN": "对领土和人民的最高法律权威；在台湾议题中，官方主张与法律解释存在争议，相关表述需要明确归属。",
    },
    whyItMatters: {
      en: "The project avoids presenting sovereignty claims as settled legal conclusions unless a source is explicitly attributed.",
      "zh-CN": "本项目避免把主权主张表述为已定法律结论，除非明确归属于相应来源。",
    },
    sourceIds: ["crs-one-china-policy", "prc-2022-white-paper", "taiwan-gov-history"],
    relatedSections: ["Overview", "Competing Positions", "Methodology"],
  },
  {
    term: { en: "UN Resolution 2758", "zh-CN": "联合国大会第2758号决议" },
    aliases: ["UN 2758", "2758号决议"],
    definition: {
      en: "The 1971 UN General Assembly resolution that seated PRC representatives as China's UN representatives; its implications for Taiwan's legal status remain disputed by governments and scholars.",
      "zh-CN": "1971年联合国大会通过的决议，确认中华人民共和国代表为中国在联合国的代表；该决议对台湾法律地位的含义仍受到不同政府与学者的争议性解释。",
    },
    whyItMatters: {
      en: "It is central to representation debates, but the site does not treat it as a final judgment on Taiwan's sovereignty.",
      "zh-CN": "它是代表权争议的核心文件，但本网站不把它视为台湾主权问题的最终裁断。",
    },
    sourceIds: ["un-res-2758", "crs-one-china-policy"],
    relatedSections: ["Timeline", "Competing Positions", "Documents"],
  },
  {
    term: { en: "Cross-Strait relations", "zh-CN": "两岸关系" },
    aliases: ["China-Taiwan relations", "中国大陆与台湾关系"],
    definition: {
      en: "Relations across the Taiwan Strait involving the PRC government, Taiwan / ROC authorities, societies, militaries, economies, and external policy actors.",
      "zh-CN": "台湾海峡两岸之间的关系，涉及中国大陆政府、台湾 / 中华民国当局、社会、军事、经济以及外部政策主体。",
    },
    whyItMatters: {
      en: "The term keeps the issue broader than a single bilateral dispute by including history, identity, law, security, and economics.",
      "zh-CN": "这一术语使议题不被简化为单一双边争端，而是包含历史、身份、法律、安全与经济层面。",
    },
    sourceIds: ["taiwan-mac-policy", "crs-background-us-relations", "prc-2022-white-paper"],
    relatedSections: ["Overview", "Timeline", "Competing Positions"],
  },
  {
    term: { en: "Taiwan Strait", "zh-CN": "台湾海峡" },
    definition: {
      en: "The waterway between Taiwan and mainland China; in this project it also names the political, security, and economic issue space around cross-Strait relations.",
      "zh-CN": "台湾与中国大陆之间的水域；在本项目中，它也指围绕两岸关系形成的政治、安全与经济议题空间。",
    },
    whyItMatters: {
      en: "It is both geography and shorthand for a wider diplomatic and security system.",
      "zh-CN": "它既是地理空间，也是更广泛外交与安全系统的简称。",
    },
    sourceIds: ["state-taiwan-crises", "crs-background-us-relations"],
    relatedSections: ["Overview", "Security & Economics", "Timeline"],
  },
  {
    term: { en: "ADIZ", "zh-CN": "防空识别区" },
    aliases: ["Air defense identification zone"],
    definition: {
      en: "An air defense identification zone is a declared airspace monitoring area; entering it is not the same as entering sovereign airspace.",
      "zh-CN": "防空识别区是一种公布的空域监控区域，进入该区域并不等同于进入主权领空。",
    },
    whyItMatters: {
      en: "The distinction matters when interpreting military activity data and avoiding overstatement.",
      "zh-CN": "这一区分有助于解释军事活动数据，并避免过度表述。",
    },
    sourceIds: ["taiwan-mnd-joint-sword-2024a"],
    relatedSections: ["Security & Economics", "Timeline"],
  },
  {
    term: { en: "Source attribution", "zh-CN": "来源归属" },
    aliases: ["Attribution", "归属"],
    definition: {
      en: "The practice of identifying whether a statement comes from an official actor, legal document, historical record, scholar, analyst, or news report.",
      "zh-CN": "明确某一表述来自官方主体、法律文件、历史记录、学者、分析人士还是新闻报道的做法。",
    },
    whyItMatters: {
      en: "Attribution prevents the site from converting disputed claims into unqualified factual statements.",
      "zh-CN": "来源归属可以避免本网站把存在争议的主张转化为不加限定的事实陈述。",
    },
    sourceIds: ["crs-one-china-policy", "prc-2022-white-paper", "taiwan-mac-policy"],
    relatedSections: ["Methodology", "Documents", "Competing Positions"],
  },
];
