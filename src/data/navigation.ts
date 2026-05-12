import {
  Activity,
  Archive,
  BookOpen,
  Compass,
  FileText,
  Landmark,
  Network,
  Scale,
  Shield,
} from "lucide-react";
import type { LocalizedText } from "@/i18n/config";

export type NavigationItem = {
  title: LocalizedText;
  href: string;
  description: LocalizedText;
  category: "Explore" | "Policy" | "Research";
  icon: typeof Compass;
};

export const navigationItems: NavigationItem[] = [
  {
    title: { en: "Overview", "zh-CN": "概览" },
    href: "/overview",
    description: {
      en: "A concise map of the historical, legal, diplomatic, security, economic, and identity layers.",
      "zh-CN": "简要呈现历史、法律、外交、安全、经济与身份认同等层次之间的关系。",
    },
    category: "Explore",
    icon: Compass,
  },
  {
    title: { en: "Timeline", "zh-CN": "时间线" },
    href: "/timeline",
    description: {
      en: "Filter major events by period and domain, then open evidence-backed event drawers.",
      "zh-CN": "按时期和领域筛选重大事件，并打开带来源的事件抽屉。",
    },
    category: "Explore",
    icon: Activity,
  },
  {
    title: { en: "Presentation Mode", "zh-CN": "演示模式" },
    href: "/presentation",
    description: {
      en: "A guided full-screen path through the project for classroom or review settings.",
      "zh-CN": "适合课堂或评审场景的全屏式项目导览路径。",
    },
    category: "Explore",
    icon: Compass,
  },
  {
    title: { en: "Compare Positions", "zh-CN": "比较立场" },
    href: "/positions",
    description: {
      en: "Compare PRC, ROC / Taiwan, and U.S. positions by issue without flattening the dispute.",
      "zh-CN": "按议题比较中国大陆政府、中华民国 / 台湾与美国的立场，而不把争议简化为单一叙事。",
    },
    category: "Explore",
    icon: Scale,
  },
  {
    title: { en: "U.S. Policy Architecture", "zh-CN": "美国政策架构" },
    href: "/us-policy",
    description: {
      en: "Explore the Taiwan Relations Act, communiques, Six Assurances, AIT, arms sales, and ambiguity.",
      "zh-CN": "探索《台湾关系法》、联合公报、六项保证、美国在台协会、军售与战略模糊。",
    },
    category: "Policy",
    icon: Landmark,
  },
  {
    title: { en: "Security & Deterrence", "zh-CN": "安全与威慑" },
    href: "/security",
    description: {
      en: "Scenario analysis, risk cards, and regional implications clearly separated from prediction.",
      "zh-CN": "以情景分析、风险卡片和地区影响呈现安全议题，并明确区别于预测。",
    },
    category: "Policy",
    icon: Shield,
  },
  {
    title: { en: "Economics & Technology", "zh-CN": "经济与技术" },
    href: "/economics",
    description: {
      en: "Trade, semiconductors, supply chains, technology competition, and economic deterrence.",
      "zh-CN": "贸易、半导体、供应链、技术竞争与经济威慑。",
    },
    category: "Policy",
    icon: Network,
  },
  {
    title: { en: "Documents", "zh-CN": "文件资料库" },
    href: "/documents",
    description: {
      en: "A searchable research database with viewpoint categories and reliability notes.",
      "zh-CN": "一个带有观点类别与可靠性说明的可搜索研究数据库。",
    },
    category: "Research",
    icon: Archive,
  },
  {
    title: { en: "Glossary / Key Terms", "zh-CN": "术语表 / 关键概念" },
    href: "/glossary",
    description: {
      en: "Definitions and source-backed notes for the central policy, legal, and analytical terms.",
      "zh-CN": "为核心政策、法律与分析性术语提供定义和来源说明。",
    },
    category: "Research",
    icon: BookOpen,
  },
  {
    title: { en: "Bibliography", "zh-CN": "参考文献" },
    href: "/bibliography",
    description: {
      en: "Academic source listings grouped by category with copy and source actions.",
      "zh-CN": "按类别整理的学术来源列表，并提供复制与查看来源操作。",
    },
    category: "Research",
    icon: BookOpen,
  },
  {
    title: { en: "Methodology", "zh-CN": "方法说明" },
    href: "/methodology",
    description: {
      en: "How the site distinguishes claims, facts, law, interpretation, and scenarios.",
      "zh-CN": "说明本网站如何区分主张、事实、法律、解释与情景分析。",
    },
    category: "Research",
    icon: FileText,
  },
];

export const navigationCategories = ["Explore", "Policy", "Research"] as const;
