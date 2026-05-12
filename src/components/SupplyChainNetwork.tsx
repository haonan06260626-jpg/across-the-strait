"use client";

import { useState } from "react";
import * as d3 from "d3";
import { Network } from "lucide-react";
import { supplyChainLinks, supplyChainNodes } from "@/data/economics";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SupplyChainNetwork() {
  const { t } = useLocale();
  const [hovered, setHovered] = useState<string | null>(null);
  const width = 760;
  const height = 460;
  const positionsMap: Record<string, { x: number; y: number }> = {
    Taiwan: { x: 95, y: 230 },
    "TSMC / foundries": { x: 245, y: 190 },
    "Advanced logic chips": { x: 405, y: 230 },
    "Global supply chains": { x: 545, y: 230 },
    "United States": { x: 680, y: 95 },
    China: { x: 690, y: 195 },
    Japan: { x: 680, y: 295 },
    "European Union": { x: 670, y: 385 },
  };
  const widthScale = d3.scaleLinear().domain([5, 10]).range([1.5, 7]);
  const colorScale = d3
    .scaleOrdinal<string, string>()
    .domain(["origin", "semiconductors", "systems", "market"])
    .range(["#275e92", "#9a3a3a", "#303846", "#647084"]);

  function isActive(id: string) {
    if (!hovered) {
      return true;
    }

    return (
      id === hovered ||
      supplyChainLinks.some(
        (link) =>
          (link.source === hovered && link.target === id) ||
          (link.target === hovered && link.source === id) ||
          (link.source === id && link.target === hovered) ||
          (link.target === id && link.source === hovered),
      )
    );
  }

  return (
    <div className="glass rounded-lg p-5">
      <div className="mb-4 flex items-center gap-3">
        <Network className="h-5 w-5 text-strait-blue dark:text-blue-300" aria-hidden="true" />
        <h2 className="text-xl font-semibold tracking-normal text-ink-950 dark:text-white">
          {t("economics.networkTitle")}
        </h2>
      </div>
      <svg
        className="h-auto w-full"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={t("economics.networkAria")}
      >
        <defs>
          <marker id="economicsArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#647084" opacity="0.65" />
          </marker>
        </defs>
        {supplyChainLinks.map((link) => {
          const source = positionsMap[link.source];
          const target = positionsMap[link.target];
          const active = isActive(link.source) && isActive(link.target);
          const path = d3.line().curve(d3.curveBasis)([
            [source.x, source.y],
            [(source.x + target.x) / 2, source.y - 38],
            [target.x, target.y],
          ] as [number, number][]);

          return (
            <path
              key={`${link.source}-${link.target}`}
              d={path ?? undefined}
              fill="none"
              stroke="#647084"
              strokeWidth={widthScale(link.value)}
              strokeOpacity={active ? 0.62 : 0.12}
              markerEnd="url(#economicsArrow)"
            />
          );
        })}
        {supplyChainNodes.map((node) => {
          const point = positionsMap[node.id];
          const active = isActive(node.id);

          return (
            <g
              key={node.id}
              transform={`translate(${point.x} ${point.y})`}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="listitem"
              aria-label={node.id}
              className="focus-ring cursor-pointer"
            >
              <circle
                r={node.radius}
                fill={colorScale(node.group)}
                opacity={active ? 0.95 : 0.28}
                stroke="white"
                strokeOpacity="0.9"
                strokeWidth="2"
              />
              <text
                y={node.radius + 18}
                textAnchor="middle"
                className="fill-ink-700 text-[13px] font-semibold dark:fill-white"
                opacity={active ? 1 : 0.35}
              >
                {nodeLabel(node.id, t)}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-4 text-sm leading-7 text-ink-700 dark:text-ink-100">
        {t("economics.networkNote")}
      </p>
    </div>
  );
}

function nodeLabel(id: string, t: (key: string) => string) {
  const zh = t("common.siteTitle") === "海峡之间";
  if (!zh) return id;
  const labels: Record<string, string> = {
    Taiwan: "台湾",
    "TSMC / foundries": "台积电 / 晶圆代工",
    "Advanced logic chips": "先进逻辑芯片",
    "Global supply chains": "全球供应链",
    "United States": "美国",
    China: "中国大陆",
    Japan: "日本",
    "European Union": "欧盟",
  };
  return labels[id] ?? id;
}
