import React, {useMemo} from "react";
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
type ExpressionType =
  | "expression"
  | "parametricSolid"
  | "parametricDashed"
  | "parametricDotted"
  | "inequality"
  | "shadedInequalityDash"
  | "point"
  | "points"
  | "openPoint"
  | "open"
  | "action"
  | "pause"
  | "note";

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

function ExpressionIcon({item}: {item: DesmosExpressionItem}) {
  const type = item.type ?? "expression";
  const normalizedType =
    type === "parametricSolid" || type === "parametricDashed" || type === "parametricDotted"
      ? "expression"
      : type === "shadedInequalityDash"
        ? "inequality"
        : type === "points"
          ? "point"
        : type === "open"
          ? "openPoint"
          : type;
  return (
    <span
      className={`desmos-expression-icon desmos-expression-icon--${normalizedType}${item.hidden ? " is-hidden" : ""}`}
      style={{"--expression-color": colorValue(item.color)} as React.CSSProperties}
      aria-hidden="true"
    />
  );
}

function MathExpression({latex}: {latex: string}) {
  const normalizedLatex = latex.replaceAll("¥", "\\");
  const html = useMemo(
    () => katex.renderToString(normalizedLatex, {throwOnError: false, strict: false}),
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
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
}

export default function DesmosExpression({
  expressions,
  ariaLabel = "Desmos expressions",
}: Props) {
  return (
    <div className="desmos-expression-list" role="group" aria-label={ariaLabel}>
      {expressions.map((value, index) => {
        const item: DesmosExpressionItem =
          typeof value === "string" ? {expression: value} : value;
        const isNote = item.type === "note";
        return (
          <div className="desmos-expression-row" key={`${index}-${item.expression}`}>
            <div className="desmos-expression-gutter">
              <span className="desmos-expression-number">{index + 1}</span>
              <ExpressionIcon item={item} />
            </div>
            <div className={`desmos-expression-content${item.hidden ? " is-hidden" : ""}`}>
              {isNote ? item.expression : <MathExpression latex={item.expression} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
