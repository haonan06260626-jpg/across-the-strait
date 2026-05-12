import type { Locale } from "@/i18n/config";
import type { NavigationItem } from "@/data/navigation";
import type { PolicyDocument } from "@/data/policies";
import type { PositionColumn } from "@/data/positions";
import type { RiskRow } from "@/data/risk";
import type { SourceCategory, SourceRecord } from "@/data/sources";
import type { TimelineCategory, TimelineEvent, TimelineTag } from "@/data/timeline";
import { getLocalizedText } from "@/i18n/config";

export const categoryLabels: Record<SourceCategory, Record<Locale, string>> = {
  "Official PRC sources": { en: "Official PRC sources", "zh-CN": "中国大陆官方来源" },
  "Official Taiwan / ROC sources": { en: "Official Taiwan / ROC sources", "zh-CN": "台湾 / 中华民国官方来源" },
  "Official U.S. sources": { en: "Official U.S. sources", "zh-CN": "美国官方来源" },
  "Congressional / legal documents": { en: "Congressional / legal documents", "zh-CN": "国会 / 法律文件" },
  "Think tank analysis": { en: "Think tank analysis", "zh-CN": "智库分析" },
  "Academic articles": { en: "Academic articles", "zh-CN": "学术文章" },
  "News / current events": { en: "News / current events", "zh-CN": "新闻 / 时事来源" },
};

export const timelineCategoryLabels: Record<TimelineCategory, Record<Locale, string>> = {
  "Imperial / colonial period": { en: "Imperial / colonial period", "zh-CN": "帝国 / 殖民时期" },
  "ROC and PRC formation": { en: "ROC and PRC formation", "zh-CN": "中华民国与中华人民共和国形成" },
  "U.S.-PRC normalization": { en: "U.S.-PRC normalization", "zh-CN": "美中关系正常化" },
  "Taiwan democratization": { en: "Taiwan democratization", "zh-CN": "台湾民主化" },
  "Cross-Strait crises": { en: "Cross-Strait crises", "zh-CN": "台海危机" },
  "Contemporary policy period": { en: "Contemporary policy period", "zh-CN": "当代政策时期" },
};

export const timelineTagLabels: Record<TimelineTag, Record<Locale, string>> = {
  law: { en: "Law", "zh-CN": "法律" },
  diplomacy: { en: "Diplomacy", "zh-CN": "外交" },
  military: { en: "Military", "zh-CN": "军事" },
  election: { en: "Elections", "zh-CN": "选举" },
  economy: { en: "Economics", "zh-CN": "经济" },
  identity: { en: "Identity", "zh-CN": "身份认同" },
};

export const navigationCategoryLabels = {
  Explore: { en: "Explore", "zh-CN": "探索" },
  Policy: { en: "Policy", "zh-CN": "政策" },
  Research: { en: "Research", "zh-CN": "研究" },
} as const;

const sourceZh: Record<string, Partial<Pick<SourceRecord, "title" | "institution" | "viewpoint" | "reliability" | "preview">>> = {
  "taiwan-gov-history": {
    title: "历史",
    institution: "中华民国（台湾）政府入口网",
    viewpoint: "台湾官方历史叙事",
    reliability: "官方政府入口网站；适合了解台湾政府对重大日期与制度延续的表述。",
    preview: "概述台湾历史、日本统治、1945 年后中华民国接收行政以及 1949 年政府迁台。",
  },
  "jacar-shimonoseki": {
    title: "《马关条约》历史档案",
    institution: "日本亚洲历史资料中心",
    viewpoint: "历史档案",
    reliability: "基于档案的展示页面，适合查证 1895 年条约相关记录。",
    preview: "说明 1895 年 4 月 17 日日本与清政府签署的条约及其历史背景。",
  },
  "state-taiwan-crises": {
    title: "1954-55 年与 1958 年台湾海峡危机",
    institution: "美国国务院历史办公室",
    viewpoint: "美国外交史",
    reliability: "美国官方历史参考资料；页面虽已归档，仍适合用于年代与政策背景。",
    preview: "解释外岛危机、美国角色以及金门、马祖等岛屿的战略意义。",
  },
  "un-res-2758": {
    title: "恢复中华人民共和国在联合国的合法权利",
    institution: "联合国数字图书馆",
    viewpoint: "联合国机构记录",
    reliability: "第 2758 号决议的一手联合国记录；其对台湾法律地位的含义仍有争议。",
    preview: "该决议确认中华人民共和国代表为中国在联合国的代表，并驱逐蒋介石的代表。",
  },
  "ait-policy-docs": {
    title: "本地区关键美国外交政策文件",
    institution: "美国在台协会",
    viewpoint: "美国政策文件档案",
    reliability: "AIT 归档页面，汇集《台湾关系法》、三个联合公报与六项保证相关文件。",
    preview: "本网站使用的主要美国政策文本入口。",
  },
  "ait-shanghai-communique": {
    title: "《上海公报》",
    institution: "美国在台协会",
    viewpoint: "美中联合外交文本",
    reliability: "美国官方归档文本；应与后续美国政策表述一起阅读。",
    preview: "记录中国大陆方面的立场以及美国“认识到 / acknowledge”相关表述。",
  },
  "ait-normalization-communique": {
    title: "《中美建交公报》",
    institution: "美国在台协会",
    viewpoint: "美中联合外交文本",
    reliability: "美国官方归档文本，说明 1979 年美中关系正常化框架。",
    preview: "确立美国承认中华人民共和国政府以及继续与台湾保持文化、商务和其他非官方关系的框架。",
  },
  "ait-1982-communique": {
    title: "《八一七公报》",
    institution: "美国在台协会",
    viewpoint: "美中联合外交文本",
    reliability: "美国官方归档文本；应与《台湾关系法》和六项保证一起阅读。",
    preview: "涉及美国对台军售以及和平解决的相关表述。",
  },
  "ait-tra": {
    title: "《台湾关系法》",
    institution: "美国在台协会",
    viewpoint: "美国国内法律框架",
    reliability: "Public Law 96-8 的官方归档文本，是美国与台湾非官方关系的法律基础。",
    preview: "授权继续商业、文化及其他关系，并规定美国关于台湾自我防卫能力的政策。",
  },
  "ait-six-assurances": {
    title: "解密电报：对台军售与六项保证",
    institution: "美国在台协会",
    viewpoint: "美国行政部门政策记录",
    reliability: "美国官方归档电报；用于理解 1982 年公报谈判中美国未作出的承诺。",
    preview: "列出未同意结束军售日期、未同意调解台北与北京等内容。",
  },
  "crs-six-assurances": {
    title: "里根总统对台湾的六项保证",
    institution: "美国国会研究处 / Congress.gov",
    viewpoint: "美国国会无党派分析",
    reliability: "CRS 为国会准备的资料，适合比较六项保证的不同官方文本。",
    preview: "解释六项保证公开文本的差异及其在美国立法中的使用。",
  },
  "crs-one-china-policy": {
    title: "美国的“一个中国”政策与台湾",
    institution: "美国国会研究处 / Congress.gov",
    viewpoint: "美国国会无党派分析",
    reliability: "CRS 资料，明确区分美国的“一个中国”政策与中国大陆的“一个中国原则”。",
    preview: "说明美国政策由《台湾关系法》、三个联合公报与六项保证等文件共同构成。",
  },
  "crs-background-us-relations": {
    title: "台湾：背景与美国关系",
    institution: "美国国会研究处 / Congress.gov",
    viewpoint: "美国国会无党派分析",
    reliability: "CRS 对台湾政治地位、美国政策、安全议题与国会关切的概述。",
    preview: "将台湾描述为自治民主政体，并概述美国政策框架。",
  },
  "prc-2022-white-paper": {
    title: "《台湾问题与新时代中国统一事业》白皮书",
    institution: "中华人民共和国国务院新闻办公室",
    viewpoint: "中国大陆官方立场",
    reliability: "中国大陆官方立场文件；应作为官方主张归属，而非不加限定的事实结论。",
    preview: "陈述中国大陆政府关于统一、“一个中国原则”及其历史法律依据的立场。",
  },
  "prc-anti-secession-law": {
    title: "《反分裂国家法》",
    institution: "全国人民代表大会 / 中国大陆官方译文",
    viewpoint: "中国大陆国内法律立场",
    reliability: "中国大陆法律文本；其国际法意义和正当性受到其他行动者争议。",
    preview: "反对台湾独立，并规定北京保留采取非和平方式的条件。",
  },
  "taiwan-mac-policy": {
    title: "政府的两岸政策是什么？",
    institution: "大陆委员会，中华民国（台湾）",
    viewpoint: "台湾官方政策",
    reliability: "台湾官方两岸政策页面；应作为台湾政府政策表述引用。",
    preview: "说明台湾政府依据中华民国宪法及相关法律处理两岸事务，并强调和平稳定。",
  },
  "president-martial-law": {
    title: "纪念台湾解除戒严二十周年讲话",
    institution: "中华民国（台湾）总统府",
    viewpoint: "台湾官方历史纪念",
    reliability: "总统府官方讲话；用于说明解除戒严与民主化的官方叙事。",
    preview: "标记 1987 年 7 月 15 日零时戒严结束，并将其定位为民主转型里程碑。",
  },
  "president-tsai-profile": {
    title: "蔡英文，第 14-15 任总统",
    institution: "中华民国（台湾）总统府",
    viewpoint: "台湾官方简历记录",
    reliability: "总统府官方资料；适合查证选举与任期日期。",
    preview: "记录蔡英文 2016 年当选、2020 年连任及相关两岸政策表述。",
  },
  "president-lai-profile": {
    title: "第 16 任总统、副总统就职",
    institution: "中华民国（台湾）总统府",
    viewpoint: "台湾官方简历记录",
    reliability: "赖清德相关总统府官方资料；适合查证就职与官方简历。",
    preview: "记录赖清德 2024 年 1 月当选及 2024 年 5 月就职。",
  },
  "taiwan-cec-2024": {
    title: "2024 年总统、副总统选举",
    institution: "台湾中央选举委员会",
    viewpoint: "选举管理记录",
    reliability: "台湾选举主管机关的官方选举结果页面。",
    preview: "台湾 2024 年总统、副总统选举官方结果入口。",
  },
  "taiwan-mnd-joint-sword-2024a": {
    title: "国防部关于联合利剑-2024A 的新闻稿",
    institution: "中华民国（台湾）国防部",
    viewpoint: "台湾国防部声明",
    reliability: "台湾国防部官方新闻稿；描述台湾方面的回应与表述。",
    preview: "说明解放军东部战区于 2024 年 5 月 23 日宣布在台湾周边举行演习。",
  },
  "csis-blockade": {
    title: "中国大陆可能如何封锁台湾",
    institution: "CSIS 中国力量项目",
    viewpoint: "独立政策分析",
    reliability: "智库情景分析，基于中文资料、桌面推演、专家咨询和调查。",
    preview: "将封锁与检疫作为分析类别，强调不确定性、升级风险和操作复杂性。",
  },
  "crs-semiconductor": {
    title: "台湾在全球半导体供应链中的角色",
    institution: "美国国会研究处 / Congress.gov",
    viewpoint: "美国国会无党派分析",
    reliability: "CRS 资料，适合概述供应链事实与美国政策含义。",
    preview: "说明半导体的战略重要性，并指出台湾和台积电在先进芯片生产中的核心地位。",
  },
  "csis-silicon-island": {
    title: "硅岛：评估台湾对美国经济增长与安全的重要性",
    institution: "战略与国际问题研究中心",
    viewpoint: "独立政策分析",
    reliability: "智库对美台技术相互依存的分析；适合用于综合判断。",
    preview: "研究台湾半导体生态、美国技术依赖以及分散化与经济安全争论。",
  },
  "nist-tsmc-arizona": {
    title: "台积电亚利桑那项目",
    institution: "美国国家标准与技术研究院",
    viewpoint: "美国工业政策来源",
    reliability: "美国 CHIPS 项目官方页面；适合查证美国本土产能和先进芯片相关公开表述。",
    preview: "说明台积电生产全球 90% 以上领先逻辑芯片，并介绍亚利桑那晶圆厂计划。",
  },
  "rti-2024-election": {
    title: "赖清德赢得 2024 年总统选举",
    institution: "中央广播电台",
    viewpoint: "台湾公共媒体新闻报道",
    reliability: "适合用于当时选举报道；主要选举数据仍应以中央选举委员会为准。",
    preview: "报道赖清德与萧美琴赢得 2024 年总统选举。",
  },
  "brookings-2016-election": {
    title: "台湾选举结果解析",
    institution: "布鲁金斯学会",
    viewpoint: "独立政策分析",
    reliability: "研究机构专家分析；适合解释 2016 年选举的政治含义。",
    preview: "分析民进党 2016 年胜选及其对两岸政治的影响。",
  },
  "academic-2016-election": {
    title: "2016 年选举与台湾民主的前景",
    institution: "Orbis / ScienceDirect",
    viewpoint: "学术解释",
    reliability: "学术论文记录；访问可能需要机构订阅。",
    preview: "关于台湾 2016 年选举与民主发展的学术分析。",
  },
  "rand-gray-zone": {
    title: "系统战中的胜利：中国对美中军事平衡的看法",
    institution: "兰德公司",
    viewpoint: "独立防务分析",
    reliability: "研究机构报告；适合提供军事竞争与升级风险背景，而非具体冲突预测。",
    preview: "提供美中军事竞争和台海相关危机环境的分析背景。",
  },
};

const timelineZh: Record<string, Partial<Pick<TimelineEvent, "title" | "explanation" | "whyItMatters" | "narrativeNote" | "date">>> = {
  "1895-shimonoseki": {
    title: "《马关条约》与日本对台湾的统治",
    date: "1895 年 4 月 17 日",
    explanation:
      "《马关条约》结束了甲午战争，并将台湾、澎湖从清朝统治转交日本。此后台湾经历五十年的日本殖民治理，基础设施、法律、教育和身份认同都发生变化。不同政治叙事对此强调各异：中国大陆叙事强调台湾更早属于中国历史脉络，台湾官方叙事则常把 1895 年视为日本殖民统治的开始。",
    whyItMatters: "该条约是讨论殖民统治、主权中断以及 1945 年后行政安排的重要历史锚点。",
    narrativeNote: "中国大陆与台湾官方叙事都会讨论 1895 年，但对其后续法律和政治意义强调不同。",
  },
  "1912-roc": {
    title: "中华民国成立",
    date: "1912 年",
    explanation:
      "清朝结束后，中华民国在中国大陆成立。但当时台湾仍处于日本统治之下。这一区分很重要，因为今日台湾的宪政机构追溯至中华民国，而台湾社会直到二战结束才脱离日本统治。后来的法律历史争论因此会区分中华民国成立与台湾行政归属问题。",
    whyItMatters: "中华民国的成立是台湾宪政语言的核心，但 1949 年后其实际治理范围发生根本变化。",
    narrativeNote: "台湾官方通常强调中华民国制度延续，学者则会区分制度延续与主权问题。",
  },
  "1945-postwar-transfer": {
    title: "战后台湾行政由中华民国接收",
    date: "1945 年",
    explanation:
      "日本投降后，中华民国官员在台湾接受日军投降并开始行政管理。台湾政府资料将此描述为中华民国自 1945 年起对台湾行使管辖。部分法律学者和政府对战后文件是否最终解决台湾主权仍有争论，因此本网站使用较窄的“行政接收”表述，并将更广泛的法律主张归属于提出者。",
    whyItMatters: "行政、管辖与最终法律主权之间的区分，是争议难以用单一中立说法概括的重要原因。",
    narrativeNote: "此处使用“行政”是为了避免对主权争议作最终法律判断。",
  },
  "1949-prc-roc": {
    title: "中华人民共和国成立与中华民国政府迁台",
    date: "1949 年",
    explanation:
      "国共内战产生了两个竞争性政府：中华人民共和国在北京成立，中华民国政府迁至台湾。台湾官方资料称中华民国此后实际管辖台湾及若干外岛；中国大陆政府则称台湾属于中国，并由中华人民共和国代表中国。1949 年后的分裂仍是今日争议的核心历史结构。",
    whyItMatters: "这一分裂造成代表权、管辖权和合法性的竞争性主张，至今影响外交与国内政治。",
    narrativeNote: "这一事件不应被简化为普通国家对国家叙事；它源自内战制度与战后地缘政治。",
  },
  "1954-1958-crises": {
    title: "第一次与第二次台湾海峡危机",
    date: "1954-55 年与 1958 年",
    explanation:
      "危机围绕中华民国控制的外岛，尤其是金门和马祖爆发。美国国务院历史资料描述了解放军炮击、美国对中华民国的支持以及 1954 年《中美共同防御条约》的作用。危机显示，有限地理空间也可能触发更广泛的升级风险。",
    whyItMatters: "这些危机建立了军事压力、美国威慑与政治信号相互作用的早期模式。",
    narrativeNote: "后来的威慑讨论经常回到这些危机，因为它们显示模糊性与联盟政治既可能约束也可能放大风险。",
  },
  "1971-un-2758": {
    title: "联合国大会第 2758 号决议",
    date: "1971 年 10 月 25 日",
    explanation:
      "联合国大会第 2758 号决议确认中华人民共和国代表为中国在联合国的代表，并驱逐蒋介石的代表。中国大陆将其作为“一个中国原则”的重要依据，而台湾及部分美国国会资料则主张该决议并未解决台湾主权或台湾参与国际组织的问题。",
    whyItMatters: "第 2758 号决议影响国际代表权，但其对台湾法律地位的含义仍存在政治争议。",
    narrativeNote: "本网站将决议文本本身与各方后来对文本含义的主张分开呈现。",
  },
  "1972-shanghai": {
    title: "《上海公报》",
    date: "1972 年 2 月 28 日",
    explanation:
      "《上海公报》开启了美中接近进程。关于台湾，中国大陆陈述其立场：中华人民共和国政府是中国唯一合法政府，台湾是中国的一个省。美国则认识到海峡两岸的中国人都主张只有一个中国、台湾是中国的一部分，并表示不挑战这一立场，同时强调和平解决的利益。",
    whyItMatters: "公报引入了至今仍重要的语言：美国的“认识到”并不等同于采纳中国大陆立场。",
    narrativeNote: "读者应区分文件中的中国大陆立场与美国对该立场的措辞。",
  },
  "1979-normalization-tra": {
    title: "美中建交与《台湾关系法》",
    date: "1979 年",
    explanation:
      "美国与中华人民共和国建立外交关系，并终止与中华民国的正式外交关系。随后美国国会通过《台湾关系法》，为美国继续与台湾保持非官方关系以及提供防卫物资和服务建立国内法律框架。由此形成官方承认北京、与台湾维持非官方关系、并关注台海和平稳定的多层架构。",
    whyItMatters: "美国对台政策不是单一文件，而是外交公报、国内法和行政表述构成的政策组合。",
    narrativeNote: "《台湾关系法》是美国国内法；联合公报则是美国与中国大陆的外交文本。",
  },
  "1982-communique-assurances": {
    title: "《八一七公报》与六项保证",
    date: "1982 年 8 月 17 日",
    explanation:
      "1982 年公报涉及美国对台军售和中国大陆关于和平统一的表述。公报公布前，美国向台湾传达六项保证，说明美国未同意若干中国大陆要求，包括设定停止军售日期或在台北与北京之间进行调解。CRS 指出六项保证存在多个官方文本版本。",
    whyItMatters: "公报与保证的组合解释了为什么军售既是政策工具，也是反复出现的外交争议。",
    narrativeNote: "这些文件应合并阅读，因为各方会强调 1982 年记录中的不同部分。",
  },
  "1987-martial-law": {
    title: "台湾解除戒严",
    date: "1987 年 7 月 15 日",
    explanation:
      "台湾在 1987 年 7 月 15 日零时结束戒严。该变化本身并未完成民主化，但为反对党、公民组织和后续宪政改革创造空间。台湾官方讲话将其定位为从威权统治走向自由民主的里程碑。对两岸政治而言，民主化改变了谁能够代表台湾发声。",
    whyItMatters: "民主化使台湾从内战政府的延续转变为领导人必须回应选民的政治共同体。",
    narrativeNote: "1987 年后，台湾内部民意逐渐成为两岸政策合法性的重要约束。",
  },
  "1995-1996-crisis": {
    title: "1995-96 年台海危机",
    date: "1995-96 年",
    explanation:
      "在台湾国际能见度上升及首次总统直选前夕，台海出现重大危机。中国大陆导弹试射和军事演训被广泛解读为胁迫信号；美国部署海军力量，台湾则继续举行选举。此危机成为后来讨论威慑、胁迫、民主韧性与军事信号风险的重要参照。",
    whyItMatters: "该危机把民主转型、军事压力与美国信号直接联系起来。",
    narrativeNote: "本网站对该事件的描述是历史和分析性的，不意味着未来选举必然重复同一模式。",
  },
  "1996-direct-election": {
    title: "台湾首次总统直选",
    date: "1996 年 3 月 23 日",
    explanation:
      "台湾在 1996 年举行首次总统直选。这一里程碑使选举同意成为政治权威的可见基础，并改变两岸外交环境。国际行动者不能再只把台湾视为未解决内战中的一方，还必须考虑台湾选民对身份、安全与经济关系的看法。",
    whyItMatters: "直选使台湾社会成为两岸政治中的独立变量。",
    narrativeNote: "民主里程碑是事实；其政治含义仍会因政府和学者而异。",
  },
  "2005-anti-secession": {
    title: "中国大陆《反分裂国家法》",
    date: "2005 年 3 月 14 日",
    explanation:
      "中国大陆通过《反分裂国家法》，反对台湾独立，并规定北京保留采取非和平方式的条件。中国大陆将其表述为维护主权与和平统一的法律；台湾当局和许多外部分析者则将其视为胁迫性法律工具，因为它把使用武力的可能性写入国内法。",
    whyItMatters: "该法是中国大陆政策和安全争论中关于胁迫与升级的重要法律参照。",
    narrativeNote: "法律文本可以证明官方立场，但并不自动解决国际法争议。",
  },
  "2016-election": {
    title: "2016 年台湾选举与民进党重新执政",
    date: "2016 年 1 月 16 日",
    explanation:
      "蔡英文于 2016 年当选总统，民进党取得立法院多数。台湾总统府资料记录蔡英文为台湾首位女性领导人。此次选举影响两岸政治，因为民进党没有接受北京偏好的“九二共识”表述，而蔡政府强调宪政程序、和平、对等、民主与对话。",
    whyItMatters: "2016 年选举改变了执政权力，也改变了围绕现状的外交语言。",
    narrativeNote: "选举可以作为事实描述；其授权意义仍由各政党和政府不同解释。",
  },
  "2020-election": {
    title: "2020 年台湾选举与蔡英文连任",
    date: "2020 年 1 月 11 日",
    explanation:
      "台湾总统府资料显示，蔡英文在 2020 年以超过 817 万票连任。此次选举发生在香港议题、中国大陆压力与台湾身份、安全辩论受到高度关注的时期。结果强化了台北政策连续性，但未解决北京与台北是否能恢复共同接受的对话框架这一更深层问题。",
    whyItMatters: "选举再次显示公众同意与身份认同在台湾对北京政策中的重要性。",
    narrativeNote: "票数是官方事实；关于选民动机的结论属于解释，应加以归属。",
  },
  "2024-election": {
    title: "2024 年台湾选举与赖清德就职",
    date: "2024 年 1 月 13 日与 5 月 20 日",
    explanation:
      "台湾于 2024 年 1 月举行总统和立法委员选举，赖清德于 2024 年 5 月就职。中央选举委员会提供官方结果，总统府记录其当选与就职。民进党取得第三个连续总统任期，但立法院更为分裂，使两岸政策也成为民主协商的一部分。",
    whyItMatters: "2024 年选举是理解当前台湾政策表述和中国大陆回应的民主基准。",
    narrativeNote: "选举结果是事实；其两岸含义应被视为有争议的解释。",
  },
  "2024-joint-sword": {
    title: "联合利剑-2024A 与近期军事压力",
    date: "2024 年 5 月 23 日",
    explanation:
      "赖清德就职后，台湾国防部称解放军东部战区宣布在台湾周边海空域举行“联合利剑-2024A”演习。台湾将其称为破坏稳定，中国大陆则以主权和反分裂叙事解释此类行动。本网站将其作为有来源的近期发展，而非冲突必然化的证据。",
    whyItMatters: "近期演训显示军事信号、政治讲话和威慑主张仍在台海互动。",
    narrativeNote: "该事件属于军事压力和情景分析，不应被写成确定性的战争预测。",
  },
};

const positionZh: Record<PositionColumn["id"], Partial<Pick<PositionColumn, "heading" | "summary" | "coreDocuments" | "keyPhrases" | "implications" | "caveat">>> = {
  prc: {
    heading: "中国大陆官方立场",
    summary:
      "中国大陆政府称台湾是中国的一部分，中华人民共和国是代表中国的唯一合法政府，国家统一是核心目标。其将“一个中国原则”表述为外交关系基础，并把台湾独立定义为分裂。",
    coreDocuments: ["2022 年国务院新闻办白皮书", "《反分裂国家法》", "北京所解释的三个美中联合公报"],
    keyPhrases: ["一个中国原则", "国家统一", "反对台湾独立", "内部事务"],
    implications: ["反对外国与台湾建立官方关系", "反对美国对台军售和高层政治接触", "在特定国内法条件下保留非和平方式"],
    caveat: "本网站将这些表述视为中国大陆官方主张，而非已定法律结论。",
  },
  taiwan: {
    heading: "中华民国 / 台湾官方立场",
    summary:
      "台湾政府强调民主自治、对台湾及相关岛屿的有效管辖，以及依据中华民国宪法和台湾相关法律处理两岸政策。当代台湾官方常强调维持和平稳定、民主程序与现状。",
    coreDocuments: ["中华民国宪法及两岸相关法律", "大陆委员会政策说明", "总统讲话与官方资料"],
    keyPhrases: ["中华民国（台湾）", "现状", "和平、对等、民主、对话", "民主同意"],
    implications: ["拒绝中华人民共和国对台湾的管辖", "在外交限制下寻求国际参与", "以民主正当性和公共意见建构两岸政策"],
    caveat: "台湾内部政治多元；官方声明并不穷尽台湾社会的全部观点。",
  },
  us: {
    heading: "美国政策立场",
    summary:
      "美国称其“一个中国”政策由《台湾关系法》、三个美中联合公报和六项保证共同指引。美国承认中华人民共和国政府为中国唯一合法政府，同时维持与台湾的非官方关系，并强调和平解决。",
    coreDocuments: ["《台湾关系法》", "三个美中联合公报", "六项保证", "CRS 关于美国一个中国政策的资料"],
    keyPhrases: ["美国的“一个中国”政策", "认识到中方立场", "非官方关系", "和平与稳定"],
    implications: ["与北京保持官方关系，与台湾保持非官方关系", "依据美国法律向台湾提供防卫物资和服务", "并不把中国大陆的“一个中国原则”等同于美国政策"],
    caveat: "美国政策具有多层结构，既受行政实践影响，也受国会行动影响。",
  },
};

const policyZh: Record<string, Partial<Pick<PolicyDocument, "title" | "label" | "summary" | "historicalContext" | "whyItMatters" | "relatedDebates">>> = {
  tra: {
    title: "《台湾关系法》",
    label: "国内法",
    summary: "一部维持美国与台湾非官方关系，并授权提供台湾维持足够自我防卫能力所需防卫物资和服务的美国法律。",
    historicalContext: "美国承认中华人民共和国并终止与台湾中华民国政府的正式关系后，美国国会通过该法。",
    whyItMatters: "它使美国政策在与北京的外交公报之外，拥有独立的国内法律基础。",
    relatedDebates: ["非正式关系的范围", "军售的防御性质", "战略模糊是否仍然足够"],
  },
  communiques: {
    title: "三个美中联合公报",
    label: "外交文本",
    summary: "1972、1979 与 1982 年的公报构成美中外交框架，涉及承认、关系正常化与对台军售问题。",
    historicalContext: "这些文件来自美中接近、建交以及围绕对台军售的谈判。",
    whyItMatters: "它们解释了美国政策为何使用“认识到”等谨慎语言，而不是简单采纳中国大陆立场。",
    relatedDebates: ["“认识到”在美国政策中的含义", "1982 年公报与后续军售的关系", "美中解释是否随时间分化"],
  },
  "six-assurances": {
    title: "六项保证",
    label: "行政保证",
    summary: "1982 年美国向台湾传达的保证，说明美国未同意若干中国大陆要求，包括没有同意终止军售日期。",
    historicalContext: "六项保证与《八一七公报》相伴出现，后来在美国记录中解密。",
    whyItMatters: "它们影响美国官员和国会如何解释 1982 年公报及美国对台湾的政策义务。",
    relatedDebates: ["保证文本存在不同官方版本", "保证是否约束未来政府", "如何解释主权相关措辞"],
  },
  "strategic-ambiguity": {
    title: "战略模糊",
    label: "政策姿态",
    summary: "美国避免公开作出无条件防卫台湾承诺，同时维持抵抗胁迫的能力和政治决策空间。",
    historicalContext: "该姿态来自《台湾关系法》、联盟政治以及同时威慑中国大陆动武和避免单边升级的努力。",
    whyItMatters: "战略模糊在威慑争论中处于核心位置，因为它可能同时安抚、约束并造成不同受众的误读。",
    relatedDebates: ["战略清晰与战略模糊", "在不鼓励单边升级的情况下威慑胁迫", "国会与行政部门在危机决策中的角色"],
  },
  "arms-deterrence": {
    title: "美国军售与威慑",
    label: "安全政策",
    summary: "美国根据《台湾关系法》向台湾提供防卫物资和服务；中国大陆则反对此类军售，认为其干涉内部事务。",
    historicalContext: "军售在关系正常化过程中未被完全解决，并成为 1982 年公报与六项保证的核心问题。",
    whyItMatters: "军售既是实际防卫工具，也是外交信号，因此长期存在争议。",
    relatedDebates: ["不对称防卫与生存能力", "军售如何影响危机稳定", "军售是威慑还是刺激升级"],
  },
  "ait-relations": {
    title: "通过美国在台协会维持非官方关系",
    label: "制度渠道",
    summary: "美国在台协会是美国与台湾进行非官方关系的主要机制。",
    historicalContext: "《台湾关系法》允许美国在终止与中华民国正式外交关系后使用非营利法人机制。",
    whyItMatters: "AIT 使商业、文化、领务和政策沟通等非官方关系能够实际运作。",
    relatedDebates: ["官方与非官方接触边界", "礼宾、象征与外交信号", "台湾国际空间"],
  },
};

type LocalizedRiskFields = Partial<Record<"scenario" | "probability" | "impact" | "indicators" | "confidence", string>>;

const riskZh: Record<string, LocalizedRiskFields> = {
  "Coercion / gray-zone pressure": {
    scenario: "胁迫 / 灰色地带压力",
    probability: "较高",
    impact: "严重",
    indicators: "持续空海行动、网络压力、经济限制、信息操作以及海警或海上民兵活动。",
    confidence: "中高",
  },
  "Blockade or quarantine": {
    scenario: "封锁或检疫",
    probability: "中等",
    impact: "严峻",
    indicators: "宣布禁航区、检查制度、港口扰动、大规模联合演训以及关于执法权的法律叙事。",
    confidence: "中等",
  },
  "Limited strike": {
    scenario: "有限打击",
    probability: "较低",
    impact: "严峻",
    indicators: "导弹部署、明确警告、撤离信号、战区力量动员或对指挥通信及军事设施的攻击。",
    confidence: "低",
  },
  "Full invasion": {
    scenario: "全面入侵",
    probability: "较低",
    impact: "极端",
    indicators: "大规模两栖动员、预备役动员、后勤集结、信息封锁以及争夺制空制海的持续行动。",
    confidence: "低",
  },
  "Accidental escalation": {
    scenario: "意外升级",
    probability: "中等",
    impact: "严峻",
    indicators: "不安全拦截、海空碰撞、误读演训、国内政治压力或危机沟通渠道不清。",
    confidence: "中等",
  },
};

export const economicsCards = [
  {
    title: { en: "Cross-Strait trade", "zh-CN": "两岸贸易" },
    summary: {
      en: "Trade and investment link Taiwan and mainland China while also creating exposure to political pressure and supply-chain disruption.",
      "zh-CN": "贸易与投资将台湾和中国大陆连接起来，同时也带来政治压力与供应链扰动的暴露。",
    },
    sourceIds: ["crs-background-us-relations", "taiwan-mac-policy"],
  },
  {
    title: { en: "TSMC and semiconductor dependency", "zh-CN": "台积电与半导体依赖" },
    summary: {
      en: "Taiwan's foundry ecosystem is central to advanced logic chips, with TSMC especially important to global technology production.",
      "zh-CN": "台湾晶圆代工生态在先进逻辑芯片中居于核心位置，台积电对全球技术生产尤为重要。",
    },
    sourceIds: ["crs-semiconductor", "nist-tsmc-arizona", "csis-silicon-island"],
  },
  {
    title: { en: "U.S.-China technology competition", "zh-CN": "美中技术竞争" },
    summary: {
      en: "Export controls, industrial policy, and advanced-chip access have turned semiconductors into a central U.S.-China competition issue.",
      "zh-CN": "出口管制、产业政策和先进芯片获取，使半导体成为美中竞争的核心议题。",
    },
    sourceIds: ["crs-semiconductor", "csis-silicon-island"],
  },
  {
    title: { en: "Supply-chain risk", "zh-CN": "供应链风险" },
    summary: {
      en: "Concentration in Taiwan creates resilience questions for firms and governments even when diversification is costly and technically difficult.",
      "zh-CN": "即使分散化成本高且技术难度大，产能集中在台湾仍使企业和政府面临韧性问题。",
    },
    sourceIds: ["crs-semiconductor", "csis-silicon-island"],
  },
  {
    title: { en: "Economic deterrence", "zh-CN": "经济威慑" },
    summary: {
      en: "Analysts debate whether interdependence, sanctions risk, and semiconductor disruption deter coercion or increase crisis vulnerability.",
      "zh-CN": "分析者争论相互依存、制裁风险和半导体中断是威慑胁迫，还是增加危机脆弱性。",
    },
    sourceIds: ["csis-blockade", "crs-semiconductor"],
  },
];

export function localizeNavigationItem(item: NavigationItem, locale: Locale) {
  return {
    ...item,
    titleText: getLocalizedText(item.title, locale),
    descriptionText: getLocalizedText(item.description, locale),
  };
}

export function localizeSource(source: SourceRecord, locale: Locale) {
  const zh = locale === "zh-CN" ? sourceZh[source.id] : undefined;
  return {
    ...source,
    titleText: zh?.title ?? source.title,
    institutionText: zh?.institution ?? source.institution,
    categoryText: categoryLabels[source.category][locale],
    viewpointText: zh?.viewpoint ?? source.viewpoint,
    reliabilityText: zh?.reliability ?? source.reliability,
    previewText: zh?.preview ?? source.preview,
  };
}

export function localizeTimelineEvent(event: TimelineEvent, locale: Locale) {
  const zh = locale === "zh-CN" ? timelineZh[event.id] : undefined;
  return {
    ...event,
    dateText: zh?.date ?? event.date,
    titleText: zh?.title ?? event.title,
    explanationText: zh?.explanation ?? event.explanation,
    whyItMattersText: zh?.whyItMatters ?? event.whyItMatters,
    narrativeNoteText: zh?.narrativeNote ?? event.narrativeNote,
    categoryText: timelineCategoryLabels[event.category][locale],
    tagText: timelineTagLabels[event.tag][locale],
  };
}

export function localizePosition(position: PositionColumn, locale: Locale) {
  const zh = locale === "zh-CN" ? positionZh[position.id] : undefined;
  return {
    ...position,
    headingText: zh?.heading ?? position.heading,
    summaryText: zh?.summary ?? position.summary,
    coreDocumentsText: zh?.coreDocuments ?? position.coreDocuments,
    keyPhrasesText: zh?.keyPhrases ?? position.keyPhrases,
    implicationsText: zh?.implications ?? position.implications,
    caveatText: zh?.caveat ?? position.caveat,
  };
}

export function localizePolicyDocument(document: PolicyDocument, locale: Locale) {
  const zh = locale === "zh-CN" ? policyZh[document.id] : undefined;
  return {
    ...document,
    titleText: zh?.title ?? document.title,
    labelText: zh?.label ?? document.label,
    summaryText: zh?.summary ?? document.summary,
    historicalContextText: zh?.historicalContext ?? document.historicalContext,
    whyItMattersText: zh?.whyItMatters ?? document.whyItMatters,
    relatedDebatesText: zh?.relatedDebates ?? document.relatedDebates,
  };
}

export function localizeRisk(row: RiskRow, locale: Locale) {
  const zh = locale === "zh-CN" ? riskZh[row.scenario] : undefined;
  return {
    ...row,
    scenarioText: zh?.scenario ?? row.scenario,
    probabilityText: zh?.probability ?? row.probability,
    impactText: zh?.impact ?? row.impact,
    indicatorsText: zh?.indicators ?? row.indicators,
    confidenceText: zh?.confidence ?? row.confidence,
  };
}
