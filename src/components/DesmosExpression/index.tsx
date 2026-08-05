import React, { useMemo } from "react";
import katex from "katex";

const colors = {
  red: "#c74440",
  blue: "#2d70b3",
  green: "#388c46",
  orange: "#fa7e19",
  purple: "#6042a6",
  black: "#000000",
} as const;

type ExpressionColor = keyof typeof colors | `#${string}`;
export type ExpressionType =
  | "parametricSolid"
  | "parametricDashed"
  | "parametricDotted"
  | "inequality"
  | "point"
  | "points"
  | "move"
  | "moveVertical"
  | "moveHorizontal"
  | "polygonSolid"
  | "polygonDashed"
  | "polygonDotted"
  | "action"
  | "play"
  | "pause"
  | "error"
  | "note"
  | "folder";

export type DesmosExpressionItem = {
  expression: string;
  type?: ExpressionType;
  color?: ExpressionColor;
  hidden?: boolean;
};

type Props = {
  expressions: Array<string | DesmosExpressionItem>;
  ariaLabel?: string;
};

function colorValue(color: ExpressionColor = "blue") {
  return color.startsWith("#") ? color : colors[color as keyof typeof colors];
}

function ExpressionIcon({ item }: { item: DesmosExpressionItem }) {
  if (!item.type) return null;
  const type = item.type;
  const isParametric = type.startsWith("parametric");
  const isPolygon = type.startsWith("polygon");
  const lineStyle = type.endsWith("Dashed")
    ? "dashed"
    : type.endsWith("Dotted")
      ? "dotted"
      : "solid";
  return (
    <span
      className={`desmos-symbol desmos-symbol--${type}${item.hidden ? " is-hidden" : ""}`}
      style={{ "--expression-color": colorValue(item.color) } as React.CSSProperties}
      aria-hidden="true"
    >
      {isParametric ? (
        <svg className={`desmos-symbol__svg is-${lineStyle}`} viewBox="0 0 32 32">
          <path d="M1.5 18.5C6.1 4.8 9.2 2.2 13.1 10.2L19.1 22.1C22.8 29.1 27.1 22.8 31 9.5" />
        </svg>
      ) : isPolygon ? (
        <svg className={`desmos-symbol__svg is-${lineStyle}`} viewBox="0 0 32 32">
          <path d="M9.3 8L24.8 18.1L11.9 25Z" />
        </svg>
      ) : (
        <span className="desmos-symbol__glyph">
          <i />
          <i />
          <i />
        </span>
      )}
    </span>
  );
}

function MathExpression({ latex }: { latex: string }) {
  const normalizedLatex = latex.replaceAll("¥", "\\");
  const html = useMemo(
    () => katex.renderToString(normalizedLatex, { throwOnError: false, strict: false }),
    [normalizedLatex],
  );
  return (
    <span
      className="desmos-expression-math katex-copyable"
      data-latex={normalizedLatex}
      role="button"
      tabIndex={0}
      title="Click to copy LaTeX"
      aria-label={`Copy LaTeX: ${normalizedLatex}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function DesmosExpression({ expressions, ariaLabel = "Desmos expressions" }: Props) {
  return (
    <div className="desmos-expression-list" role="group" aria-label={ariaLabel}>
      {expressions.map((value, index) => {
        const item: DesmosExpressionItem =
          typeof value === "string" ? { expression: value } : value;
        const isText = item.type === "note" || item.type === "folder";
        return (
          <div className="desmos-expression-row" key={`${index}-${item.expression}`}>
            <div className="desmos-expression-gutter">
              <span className="desmos-expression-number">{index + 1}</span>
              <ExpressionIcon item={item} />
            </div>
            <div className={`desmos-expression-content`}>
              {isText ? item.expression : <MathExpression latex={item.expression} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
