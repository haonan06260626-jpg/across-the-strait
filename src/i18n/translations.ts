import type { Locale } from "@/i18n/config";

type TranslationTree = {
  [key: string]: string | TranslationTree;
};

export const translations: Record<Locale, TranslationTree> = {
  en: {
    common: {
      siteTitle: "Across the Strait",
      menu: "Menu",
      closeMenu: "Close menu",
      closeSearch: "Close search",
      search: "Search",
      searchPagesSources: "Search pages and sources",
      openCommandPalette: "Open command palette",
      mainNavigation: "Main navigation",
      breadcrumb: "Breadcrumb",
      abstractMap: "Abstract map-like visualization of the Taiwan Strait",
      evidence: "Evidence",
      narratives: "Narratives",
      source: "Source",
      sources: "Sources",
      viewSource: "View source",
      viewDetails: "View details",
      directSourceLink: "Direct source link",
      sourceDetails: "Source details",
      closeSourceDrawer: "Close source drawer",
      institution: "Institution",
      year: "Year",
      type: "Type",
      viewpoint: "Viewpoint",
      reliabilityNote: "Reliability note",
      relatedSections: "Related sections",
      sourcesUsed: "Sources used in this section",
      open: "Open",
      home: "Home",
      language: "Language",
      english: "English",
      simplifiedChinese: "简体中文",
      switchLanguage: "Switch language",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      noResults: "No results found.",
      ctrlK: "Ctrl K",
      searchShortcut: "Ctrl K",
      sourceType: "Source type",
      viewpointCategory: "Viewpoint category",
      footerCredit: "Across the Strait · An interactive academic project by George Chen",
      researchDesignCredit: "Research and design by George Chen",
      contentReviewed: "Content last reviewed: May 2026",
      academicDisclaimer:
        "This project is an academic educational website. It distinguishes official claims, historical events, legal documents, and scholarly interpretations. It does not represent an official government position or offer a final legal judgment on disputed sovereignty questions.",
    },
    metadata: {
      title: "Across the Strait: China, Taiwan, and the United States",
      description:
        "An interactive academic guide to China-Taiwan relations, U.S. policy, and the documents shaping the Taiwan Strait.",
    },
    home: {
      eyebrow: "Interactive policy atlas",
      title: "Across the Strait",
      subtitle: "An interactive scholarly guide to China-Taiwan relations and the role of the United States.",
      timelineCta: "Start with the Timeline",
      positionsCta: "Compare Official Positions",
      documentsCta: "Open Source Library",
      guidedTourCta: "Start Guided Tour",
      authorCredit: "Research and design by George Chen",
      keyQuestionLabel: "Key question",
      keyQuestion:
        "How have unresolved historical claims, competing political identities, and U.S. policy frameworks shaped the Taiwan Strait?",
      takeawayLabel: "Main takeaway",
      takeaway:
        "The Taiwan Strait cannot be understood through one narrative alone. Its current status is shaped by unresolved civil-war history, Taiwan’s democratization, PRC sovereignty claims, U.S. legal and diplomatic commitments, and global economic interdependence.",
      howTo: "How to use this site",
      howTo1: "Begin with a topic card, then open drawers, filters, tabs, and source previews as needed.",
      howTo2: "Use the Menu button for the atlas structure, or press Ctrl+K / Cmd+K to search pages and sources.",
      howTo3: "Turn Evidence or Narratives on and off from the header to change how claims are surfaced.",
      choosePathway: "Choose a pathway",
      exploreAtlas: "Explore the atlas by topic.",
      openModule: "Open module",
      sourceTransparency:
        "Every module separates official claims, legal documents, historical events, and scholarly interpretation. Source badges open evidence drawers for review.",
    },
    overview: {
      title: "The Strait as an issue system.",
      eyebrow: "Concise overview",
      intro:
        "China-Taiwan relations are shaped by unresolved civil-war history, PRC and ROC / Taiwan claims, Taiwan's democratization, U.S.-PRC diplomacy, deterrence, international-law debates, and economic interdependence.",
      issueMap: "Clickable issue map",
      issueMapAria: "Issue map connecting history, law, diplomacy, security, economics, identity, and U.S. policy",
      deeper: "Deeper modules",
      moveEvidence: "Move from overview to evidence.",
    },
    timeline: {
      title: "Historical Timeline",
      eyebrow: "Chronological research interface",
      intro:
        "Filter anchor events by historical period and policy domain, then open event drawers for sources and competing interpretations.",
      narrativeMode: "Narrative mode",
      narrativeModeText: "Highlight where interpretation matters.",
      compareInterpretations: "Compare interpretations",
      period: "Period",
      domain: "Domain",
      all: "All",
      progressRail: "Progress rail",
      openDetailDrawer: "Open detail drawer",
      detail: "Timeline detail",
      eventSummary: "Event summary",
      whyItMatters: "Why it matters",
      competingInterpretations: "Competing interpretations",
      relatedDocuments: "Related documents",
      closeTimelineDrawer: "Close timeline drawer",
      filteredEvents: "Filtered timeline events",
      fallbackInterpretation:
        "This event is included for chronology; source interpretation still varies by actor and discipline.",
    },
    timelineTag: {
      law: "Law",
      diplomacy: "Diplomacy",
      identity: "Identity",
    },
    positions: {
      title: "Competing Official Positions",
      eyebrow: "Attribution-based comparison",
      intro:
        "Start with an actor, then compare claims by issue. The page separates official framing from legal or scholarly judgment.",
      officialCards: "Official position cards",
      expanded: "Expanded actor position",
      coreDocuments: "Core documents",
      keyPhrases: "Key phrases",
      policyImplications: "Policy implications",
      compareByIssue: "Compare by issue",
      selectQuestion: "Select a question before comparing claims.",
      actor: "Actor",
      attributedClaim: "Attributed claim",
      issues: {
        sovereignty: "Sovereignty",
        recognition: "International recognition",
        force: "Use of force",
        democracy: "Democracy and consent",
        usRole: "U.S. role",
        statusQuo: "Status quo",
      },
    },
    policy: {
      title: "U.S. Policy Architecture",
      eyebrow: "Interactive policy architecture",
      intro:
        "Explore how U.S. domestic law, diplomatic texts, executive assurances, arms sales, AIT practice, and strategic interpretation connect.",
      legal: "Legal documents",
      diplomatic: "Diplomatic practice",
      strategic: "Strategic interpretation",
      diagram: "Connected policy architecture diagram",
      selectedNode: "Selected node",
      summary: "Summary",
      historicalContext: "Historical context",
      status: "Legal or diplomatic status",
      whyItMatters: "Why it matters",
      relatedDebates: "Related debates",
      strip: "Policy timeline strip",
      conceptualNote: "The diagram is conceptual. It shows relationships among policy instruments rather than legal hierarchy.",
    },
    security: {
      title: "Security & Deterrence",
      eyebrow: "Scenario dashboard",
      intro:
        "This page treats coercion, blockade, strikes, invasion, and accidental escalation as analytical categories. It does not present them as predictions.",
      disclaimer: "Analytical disclaimer",
      disclaimerText:
        "Probability and impact labels are qualitative visual aids. They summarize scenario logic from cited sources and should not be read as statistical forecasts.",
      riskCards: "Risk cards",
      matrixView: "Matrix view",
      regionalImplications: "Regional implications",
      selectedScenario: "Selected scenario",
      probability: "Probability",
      impact: "Impact",
      warningIndicators: "Warning indicators",
      confidence: "Source confidence",
      optionalMatrix: "Optional visual risk matrix",
      scenario: "Scenario",
      riskCategories: "Risk categories",
    },
    economics: {
      title: "Economics & Technology",
      eyebrow: "Network and supply-chain interface",
      intro:
        "Explore trade, semiconductors, technology competition, supply-chain risk, and sanctions debates through a network map and evidence-backed detail cards.",
      selected: "Selected economic issue",
      networkTitle: "Semiconductor dependency network",
      networkAria:
        "Network chart showing Taiwan semiconductors flowing into global supply chains and major markets",
      networkNote:
        "This is a qualitative network, not a measured trade-flow chart. It visualizes dependency pathways highlighted by CRS, NIST, and CSIS sources.",
    },
    documents: {
      title: "Document Library",
      eyebrow: "Searchable research database",
      intro: "Search official sources, legal documents, research analysis, academic records, and current-event sources.",
      filters: "Filters",
      searchPlaceholder: "Search title, institution, viewpoint, or section",
      sortDocuments: "Sort documents",
      cards: "Cards",
      sourceMap: "Source map",
      detailDrawer: "Detail drawer",
      link: "Link",
      openSource: "View source",
      whySourceMatters: "Why this source matters",
      copyCitation: "Copy citation",
      copyLink: "Copy link",
      copied: "Copied",
    },
    whyCards: {
      timelineTitle: "Why historical sequence matters",
      timelineText:
        "Chronology separates dated events from later interpretations, making it easier to see how law, diplomacy, democratization, and crises build on one another.",
      positionsTitle: "Why attribution matters",
      positionsText:
        "Official positions are claims made by specific actors. Attribution prevents the dispute from being flattened into a single narrative.",
      policyTitle: "Why U.S. policy is legally and diplomatically layered",
      policyText:
        "U.S. policy combines domestic law, diplomatic texts, executive assurances, unofficial practice, and strategic interpretation.",
      securityTitle: "Why scenario analysis is not prediction",
      securityText:
        "Risk categories organize possible pathways for analysis. They are not forecasts and should be read with source confidence in mind.",
      economicsTitle: "Why supply chains shape geopolitical risk",
      economicsText:
        "Semiconductors, trade exposure, and sanctions debates connect cross-Strait stability to firms, governments, and global markets.",
      documentsTitle: "Why source transparency matters",
      documentsText:
        "Readers should be able to inspect who produced a source, what viewpoint it represents, and why it is reliable for a specific claim.",
      methodologyTitle: "How this project handles disputed claims",
      methodologyText:
        "The project distinguishes official claims, legal documents, historical events, scholarly interpretation, and scenario analysis before drawing conclusions.",
    },
    glossary: {
      title: "Glossary / Key Terms",
      eyebrow: "Concept guide",
      intro:
        "Key terms are defined in attribution-based language so readers can distinguish U.S. policy terms, PRC claims, Taiwan / ROC usage, and analytical concepts.",
      openSources: "Open sources",
      relatedSources: "Related sources",
    },
    presentation: {
      title: "Presentation Mode",
      eyebrow: "Guided tour",
      intro:
        "A concise full-screen path through the project for classroom, review, or presentation settings.",
      slideLabel: "Slide",
      previous: "Previous",
      next: "Next",
      openModule: "Open module",
      exit: "Exit presentation",
      start: "Start",
      slides: {
        homeTitle: "Across the Strait",
        homeText: "An interactive academic policy atlas on China-Taiwan relations and the role of the United States.",
        questionTitle: "Key Question",
        questionText:
          "How have unresolved historical claims, competing political identities, and U.S. policy frameworks shaped the Taiwan Strait?",
        takeawayTitle: "Main Takeaway",
        takeawayText:
          "The Taiwan Strait cannot be understood through one narrative alone. Its current status is shaped by unresolved civil-war history, Taiwan’s democratization, PRC sovereignty claims, U.S. legal and diplomatic commitments, and global economic interdependence.",
        timelineTitle: "Historical Turning Points",
        timelineText:
          "The timeline connects colonial rule, civil-war outcomes, normalization, democratization, crises, and recent elections.",
        positionsTitle: "Competing Official Positions",
        positionsText:
          "Compare official PRC, Taiwan / ROC, and U.S. positions by issue without collapsing them into a single narrative.",
        policyTitle: "U.S. Policy Architecture",
        policyText:
          "Explore how the Taiwan Relations Act, Three Communiqués, Six Assurances, AIT practice, arms sales, and strategic ambiguity interact.",
        securityTitle: "Security and Economic Dimensions",
        securityText:
          "Security scenarios are analytical categories, while semiconductors and supply chains show why economics matters to geopolitical risk.",
        methodologyTitle: "Source Methodology",
        methodologyText:
          "Review how the project separates official claims, legal documents, historical facts, scholarly interpretation, and scenario analysis.",
        conclusionTitle: "Conclusion",
        conclusionText:
          "The project is designed for evidence inspection: readers can compare narratives, open sources, and evaluate claims without treating disputed legal questions as settled.",
      },
    },
    guidedTour: {
      label: "Guided tour",
      step: "Step",
      previous: "Previous",
      next: "Next",
      skip: "Skip tour",
      finish: "Finish tour",
      openPage: "Open page",
      steps: {
        homeTitle: "Home overview",
        homeText:
          "Begin with the project frame: a bilingual policy atlas built around attribution, evidence, and neutral analysis.",
        questionTitle: "Key research question",
        questionText:
          "Use the central question to connect history, identity, and U.S. policy architecture across the site.",
        timelineTitle: "Historical timeline",
        timelineText:
          "Trace major events chronologically, then open drawers for sources and competing interpretations.",
        positionsTitle: "Competing official positions",
        positionsText:
          "Compare PRC, Taiwan / ROC, and U.S. statements by issue without merging them into one narrative.",
        policyTitle: "U.S. policy architecture",
        policyText:
          "Explore how law, communiques, assurances, AIT practice, arms sales, and strategic interpretation interact.",
        securityTitle: "Security and deterrence",
        securityText:
          "Read risk categories as scenario analysis, not prediction, with attention to confidence and warning indicators.",
        economicsTitle: "Economics and technology",
        economicsText:
          "Follow how semiconductors, supply chains, and technology competition shape geopolitical risk.",
        documentsTitle: "Document library",
        documentsText:
          "Inspect source records, reliability notes, citations, and original links in the research database.",
        methodologyTitle: "Methodology and source transparency",
        methodologyText:
          "Review how the project separates claims, evidence, interpretation, and scenario analysis.",
      },
    },
    bibliography: {
      title: "Source registry by category.",
      eyebrow: "Academic bibliography",
      intro:
        "Sources are grouped by type and formatted for review. Use the document library for filtering and source-map exploration.",
      copyCitation: "Copy citation",
      copyLink: "Copy link",
      viewSource: "View source",
      institutionAuthor: "Institution / author",
    },
    methodology: {
      title: "How claims become evidence.",
      eyebrow: "Source method",
      intro:
        "The site distinguishes official claims, legal documents, historical facts, and scholarly interpretation. It does not present disputed sovereignty claims as settled legal conclusions.",
      projectNote:
        "This website was researched, designed, and developed by George Chen as an academic project.",
      categories: "Methodology categories",
      attributionRules: "Attribution rules",
      sourceHierarchy: "Source hierarchy",
      sourceHierarchyIntro:
        "Source hierarchy: 1. Primary legal and diplomatic documents 2. Official government statements 3. Congressional and institutional research 4. Peer-reviewed scholarship 5. Think tank analysis 6. News sources for recent developments only",
      reviewed: "Content last reviewed: May 2026",
      disclaimer:
        "This project is an academic educational website. It distinguishes official claims, historical events, legal documents, and scholarly interpretations. It does not represent an official government position or offer a final legal judgment on disputed sovereignty questions.",
    },
  },
  "zh-CN": {
    common: {
      siteTitle: "海峡之间",
      menu: "菜单",
      closeMenu: "关闭菜单",
      closeSearch: "关闭搜索",
      search: "搜索",
      searchPagesSources: "搜索页面与来源",
      openCommandPalette: "打开搜索面板",
      mainNavigation: "主导航",
      breadcrumb: "面包屑导航",
      abstractMap: "台湾海峡的抽象地图式可视化",
      evidence: "证据",
      narratives: "叙事",
      source: "来源",
      sources: "来源",
      viewSource: "查看来源",
      viewDetails: "查看详情",
      directSourceLink: "直接来源链接",
      sourceDetails: "来源详情",
      closeSourceDrawer: "关闭来源抽屉",
      institution: "机构",
      year: "年份",
      type: "类型",
      viewpoint: "观点类别",
      reliabilityNote: "可靠性说明",
      relatedSections: "相关版块",
      sourcesUsed: "本节使用的来源",
      open: "打开",
      home: "首页",
      language: "语言",
      english: "English",
      simplifiedChinese: "简体中文",
      switchLanguage: "切换语言",
      switchToLight: "切换到浅色模式",
      switchToDark: "切换到深色模式",
      noResults: "未找到结果。",
      ctrlK: "Ctrl K",
      searchShortcut: "Ctrl K",
      sourceType: "来源类型",
      viewpointCategory: "观点类别",
      footerCredit: "海峡之间 · George Chen 制作的互动式学术项目",
      researchDesignCredit: "研究与设计：George Chen",
      contentReviewed: "内容最后审阅：2026年5月",
      academicDisclaimer:
        "本项目为学术教育用途，区分官方主张、历史事件、法律文件与学术解释。本网站不代表任何政府官方立场，也不对存在争议的主权问题作最终法律裁断。",
    },
    metadata: {
      title: "海峡之间：中国大陆、台湾与美国",
      description:
        "一个关于两岸关系、美国政策角色以及影响台湾海峡局势的重要文件的互动式学术指南。",
    },
    home: {
      eyebrow: "互动式政策图谱",
      title: "海峡之间",
      subtitle: "一个关于两岸关系与美国政策角色的互动式学术指南。",
      timelineCta: "从时间线开始",
      positionsCta: "比较官方立场",
      documentsCta: "打开来源资料库",
      guidedTourCta: "开始导览",
      authorCredit: "研究与设计：George Chen",
      keyQuestionLabel: "核心研究问题",
      keyQuestion: "未解决的历史主张、竞争性的政治身份以及美国政策框架，如何共同塑造台湾海峡局势？",
      takeawayLabel: "主要分析结论",
      takeaway:
        "台湾海峡问题不能只通过单一叙事理解。其现状由未解决的内战历史、台湾民主化、中国大陆的主权主张、美国的法律与外交安排，以及全球经济相互依赖共同塑造。",
      howTo: "如何使用本网站",
      howTo1: "从主题卡片进入，再根据需要打开抽屉、筛选器、标签页与来源预览。",
      howTo2: "使用“菜单”查看图谱结构，或按 Ctrl+K / Cmd+K 搜索页面与来源。",
      howTo3: "在页眉中切换“证据”或“叙事”，以改变事实与立场的呈现方式。",
      choosePathway: "选择阅读路径",
      exploreAtlas: "按主题探索这份政策图谱。",
      openModule: "打开模块",
      sourceTransparency:
        "每个模块都区分官方主张、法律文件、历史事件与学术解释。来源徽标可打开证据抽屉以供核查。",
    },
    overview: {
      title: "把台湾海峡理解为一个议题系统。",
      eyebrow: "简要概览",
      intro:
        "两岸关系受到未解决的内战历史、中国大陆政府与中华民国 / 台湾的主张、台湾民主化、美中外交、威慑、国际法争议以及经济相互依存等因素共同塑造。",
      issueMap: "可点击的议题图",
      issueMapAria: "连接历史、法律、外交、安全、经济、身份认同和美国政策的议题图",
      deeper: "深入模块",
      moveEvidence: "从概览进入证据。",
    },
    timeline: {
      title: "历史时间线",
      eyebrow: "按年代组织的研究界面",
      intro: "按历史时期和政策领域筛选关键事件，并打开事件抽屉查看来源与不同解释。",
      narrativeMode: "叙事模式",
      narrativeModeText: "突出哪些地方存在解释差异。",
      compareInterpretations: "比较解释",
      period: "时期",
      domain: "领域",
      all: "全部",
      progressRail: "进度轨",
      openDetailDrawer: "打开详情抽屉",
      detail: "时间线详情",
      eventSummary: "事件摘要",
      whyItMatters: "为何重要",
      competingInterpretations: "不同解释",
      relatedDocuments: "相关文件",
      closeTimelineDrawer: "关闭时间线抽屉",
      filteredEvents: "筛选后的时间线事件",
      fallbackInterpretation: "本事件用于建立年代脉络；其含义仍会因行动者和学科视角而有所不同。",
    },
    timelineTag: {
      law: "法律",
      diplomacy: "外交",
      identity: "身份认同",
    },
    positions: {
      title: "竞争性官方立场",
      eyebrow: "基于归属的比较",
      intro: "先选择一个行动者，再按议题比较主张。本页区分官方表述、法律判断与学术解释。",
      officialCards: "官方立场卡片",
      expanded: "展开的行动者立场",
      coreDocuments: "核心文件",
      keyPhrases: "关键词语",
      policyImplications: "政策含义",
      compareByIssue: "按议题比较",
      selectQuestion: "先选择一个问题，再比较各方主张。",
      actor: "行动者",
      attributedClaim: "归属后的主张",
      issues: {
        sovereignty: "主权",
        recognition: "国际承认",
        force: "使用武力",
        democracy: "民主与同意",
        usRole: "美国角色",
        statusQuo: "现状",
      },
    },
    policy: {
      title: "美国政策架构",
      eyebrow: "互动式政策架构",
      intro: "探索美国国内法、外交文本、行政保证、对台军售、美国在台协会实践与战略解释之间的关系。",
      legal: "法律文件",
      diplomatic: "外交实践",
      strategic: "战略解释",
      diagram: "政策架构关联图",
      selectedNode: "选中的节点",
      summary: "摘要",
      historicalContext: "历史背景",
      status: "法律或外交地位",
      whyItMatters: "为何重要",
      relatedDebates: "相关争论",
      strip: "政策时间带",
      conceptualNote: "该图为概念图，展示政策工具之间的关系，而非正式法律层级。",
    },
    security: {
      title: "安全与威慑",
      eyebrow: "情景分析仪表盘",
      intro: "本页将胁迫、封锁、打击、入侵和意外升级视为分析类别，而非预测。",
      disclaimer: "分析说明",
      disclaimerText: "概率和影响标签是定性视觉辅助，概括来源中的情景逻辑，不应被理解为统计预测。",
      riskCards: "风险卡片",
      matrixView: "矩阵视图",
      regionalImplications: "地区影响",
      selectedScenario: "选中的情景",
      probability: "概率",
      impact: "影响",
      warningIndicators: "预警指标",
      confidence: "来源信心",
      optionalMatrix: "可选风险矩阵",
      scenario: "情景",
      riskCategories: "风险类别",
    },
    economics: {
      title: "经济与技术",
      eyebrow: "网络与供应链界面",
      intro: "通过网络图和带来源的详情卡片，探索贸易、半导体、技术竞争、供应链风险与制裁争论。",
      selected: "选中的经济议题",
      networkTitle: "半导体依赖网络",
      networkAria: "显示台湾半导体、全球供应链以及主要市场之间关系的网络图",
      networkNote: "这是定性网络图，不是实测贸易流量图。它呈现 CRS、NIST 与 CSIS 来源强调的依赖路径。",
    },
    documents: {
      title: "文件资料库",
      eyebrow: "可搜索的研究数据库",
      intro: "搜索官方来源、法律文件、研究分析、学术记录和时事来源。",
      filters: "筛选",
      searchPlaceholder: "按标题、机构、观点或版块搜索",
      sortDocuments: "排序文件",
      cards: "卡片",
      sourceMap: "来源图谱",
      detailDrawer: "详情抽屉",
      link: "链接",
      openSource: "查看来源",
      whySourceMatters: "为什么这个来源重要",
      copyCitation: "复制引用",
      copyLink: "复制链接",
      copied: "已复制",
    },
    whyCards: {
      timelineTitle: "为什么历史顺序重要",
      timelineText:
        "时间顺序把有日期的事件与后来的解释区分开来，帮助读者理解法律、外交、民主化与危机如何相互累积。",
      positionsTitle: "为什么归属重要",
      positionsText:
        "官方立场是特定行动者提出的主张。明确归属可以避免把争议压缩成单一叙事。",
      policyTitle: "为什么美国政策具有法律与外交层次",
      policyText:
        "美国政策同时包含国内法、外交文本、行政保证、非官方实践与战略解释。",
      securityTitle: "为什么情景分析不是预测",
      securityText:
        "风险类别用于组织可能路径的分析，并不是预测；阅读时应同时关注来源信心。",
      economicsTitle: "为什么供应链塑造地缘政治风险",
      economicsText:
        "半导体、贸易暴露与制裁争论把台海稳定同企业、政府和全球市场连接起来。",
      documentsTitle: "为什么来源透明度重要",
      documentsText:
        "读者应能查看来源由谁制作、代表何种观点，以及它为何适合支持某一具体主张。",
      methodologyTitle: "本项目如何处理争议性主张",
      methodologyText:
        "本项目先区分官方主张、法律文件、历史事件、学术解释与情景分析，再提出分析结论。",
    },
    glossary: {
      title: "术语表 / 关键概念",
      eyebrow: "概念指南",
      intro:
        "关键术语采用基于归属的表述方式，帮助读者区分美国政策用语、中国大陆政府主张、台湾 / 中华民国用法以及分析性概念。",
      openSources: "打开来源",
      relatedSources: "相关来源",
    },
    presentation: {
      title: "演示模式",
      eyebrow: "项目导览",
      intro: "一个适合课堂、评审或展示场景的全屏式简明项目路径。",
      slideLabel: "页",
      previous: "上一页",
      next: "下一页",
      openModule: "打开模块",
      exit: "退出演示",
      start: "开始",
      slides: {
        homeTitle: "海峡之间",
        homeText: "一个关于两岸关系与美国政策角色的互动式学术政策图谱。",
        questionTitle: "核心研究问题",
        questionText: "未解决的历史主张、竞争性的政治身份以及美国政策框架，如何共同塑造台湾海峡局势？",
        takeawayTitle: "主要分析结论",
        takeawayText:
          "台湾海峡问题不能只通过单一叙事理解。其现状由未解决的内战历史、台湾民主化、中国大陆的主权主张、美国的法律与外交安排，以及全球经济相互依赖共同塑造。",
        timelineTitle: "历史转折点",
        timelineText:
          "时间线连接殖民统治、内战结果、关系正常化、民主化、危机以及近期选举。",
        positionsTitle: "竞争性官方立场",
        positionsText:
          "按议题比较中国大陆政府、台湾 / 中华民国与美国的官方立场，而不把争议压缩为单一叙事。",
        policyTitle: "美国政策架构",
        policyText:
          "查看《台湾关系法》、三个联合公报、六项保证、AIT实践、军售与战略模糊之间的关系。",
        securityTitle: "安全与经济维度",
        securityText:
          "安全情景是分析类别，而半导体与供应链说明经济为何影响地缘政治风险。",
        methodologyTitle: "来源方法",
        methodologyText:
          "查看本项目如何区分官方主张、法律文件、历史事实、学术解释与情景分析。",
        conclusionTitle: "结论",
        conclusionText:
          "本项目强调证据核查：读者可以比较叙事、打开来源并评估主张，而不把有争议的法律问题视为已经定论。",
      },
    },
    guidedTour: {
      label: "项目导览",
      step: "步骤",
      previous: "上一步",
      next: "下一步",
      skip: "跳过导览",
      finish: "完成导览",
      openPage: "打开页面",
      steps: {
        homeTitle: "首页概览",
        homeText:
          "从项目框架开始：这是一个围绕归属、证据与中立分析建立的双语政策图谱。",
        questionTitle: "核心研究问题",
        questionText:
          "通过核心问题，把历史、身份认同与美国政策架构连接到整个网站的分析中。",
        timelineTitle: "历史时间线",
        timelineText:
          "按时间追踪重要事件，并打开抽屉查看来源与不同解释。",
        positionsTitle: "竞争性官方立场",
        positionsText:
          "按议题比较中国大陆政府、台湾 / 中华民国与美国的表述，而不把它们合并成单一叙事。",
        policyTitle: "美国政策架构",
        policyText:
          "探索法律、公报、保证、AIT实践、军售与战略解释之间的关系。",
        securityTitle: "安全与威慑",
        securityText:
          "把风险类别作为情景分析而非预测，并关注来源信心与预警指标。",
        economicsTitle: "经济与技术",
        economicsText:
          "理解半导体、供应链与技术竞争如何塑造地缘政治风险。",
        documentsTitle: "文件资料库",
        documentsText:
          "在研究数据库中核查来源记录、可靠性说明、引用和原始链接。",
        methodologyTitle: "方法说明与来源透明度",
        methodologyText:
          "查看项目如何区分主张、证据、解释与情景分析。",
      },
    },
    bibliography: {
      title: "按类别整理的来源索引。",
      eyebrow: "学术参考文献",
      intro: "来源按类型分组并以参考文献形式呈现。筛选和来源图谱请使用文件资料库。",
      copyCitation: "复制引用",
      copyLink: "复制链接",
      viewSource: "查看来源",
      institutionAuthor: "机构 / 作者",
    },
    methodology: {
      title: "主张如何转化为证据。",
      eyebrow: "来源方法",
      intro: "本网站区分官方主张、法律文件、历史事实与学术解释，并不把有争议的主权主张呈现为已定的法律结论。",
      projectNote:
        "本网站由 George Chen 研究、设计并开发，作为一个互动式学术项目。",
      categories: "方法类别",
      attributionRules: "归属规则",
      sourceHierarchy: "来源层级",
      sourceHierarchyIntro:
        "来源层级：1. 原始法律与外交文件 2. 政府官方声明 3. 国会与研究机构报告 4. 同行评议学术研究 5. 智库分析 6. 仅用于近期事件的新闻来源",
      reviewed: "内容最后审阅：2026年5月",
      disclaimer:
        "本项目为学术教育用途，区分官方主张、历史事件、法律文件与学术解释。本网站不代表任何政府官方立场，也不对存在争议的主权问题作最终法律裁断。",
    },
  },
};

export function t(locale: Locale, key: string): string {
  const value = key.split(".").reduce<TranslationTree | string | undefined>((acc, part) => {
    if (!acc || typeof acc === "string") {
      return undefined;
    }
    return acc[part];
  }, translations[locale]);

  if (typeof value === "string") {
    return value;
  }

  if (locale !== "en") {
    return t("en", key);
  }

  return key;
}
