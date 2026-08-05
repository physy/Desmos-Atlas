import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  createDesmosInstance,
  fetchDesmosState,
  getDesmosUrl,
  loadDesmos,
  type DesmosExpression,
  type DesmosInstance,
  type DesmosKind,
  type DesmosMathBounds,
  type DesmosState,
} from "@site/src/utils/desmos";

type CommonProps = {
  kind?: DesmosKind;
  title?: string;
  height?: number;
  compact?: boolean;
  options?: Record<string, unknown>;
  bounds?: DesmosMathBounds;
  children?: ReactNode;
  onReady?: (calculator: DesmosInstance) => void;
  showCaption?: boolean;
};

type InitialDataProps =
  | {expressions?: DesmosExpression[]; state?: never; hash?: never}
  | {state: DesmosState; expressions?: never; hash?: never}
  | {hash: string; expressions?: never; state?: never};

export type DesmosCalculatorProps = CommonProps & InitialDataProps;

const CalculatorContext = createContext<DesmosInstance | null>(null);
const emptyOptions: Record<string, unknown> = {};

export function useDesmosCalculator(): DesmosInstance | null {
  return useContext(CalculatorContext);
}

export function DesmosControls({
  children,
  label = "Graph controls",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="desmos-toolbar" role="group" aria-label={label}>
      {children}
    </div>
  );
}

type DesmosButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  onPress: (calculator: DesmosInstance) => void;
};

export function DesmosButton({
  onPress,
  disabled,
  type = "button",
  children,
  className,
  ...props
}: DesmosButtonProps) {
  const calculator = useDesmosCalculator();
  const label = React.Children.map(children, (child) =>
    React.isValidElement<{children?: ReactNode}>(child) && child.type === "p"
      ? child.props.children
      : child,
  );
  return (
    <button
      {...props}
      className={`desmos-control-button${className ? ` ${className}` : ""}`}
      type={type}
      disabled={disabled || !calculator}
      onClick={() => calculator && onPress(calculator)}
    >
      <span className="desmos-control-button__label">{label}</span>
    </button>
  );
}

export default function DesmosCalculator({
  kind = "2d",
  title = "Desmos graph",
  height = 480,
  compact = false,
  options = emptyOptions,
  bounds,
  children,
  onReady,
  showCaption = false,
  ...initialData
}: DesmosCalculatorProps) {
  const {i18n} = useDocusaurusContext();
  const elementRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<DesmosInstance | null>(null);
  const [calculator, setCalculator] = useState<DesmosInstance | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const hash = "hash" in initialData ? initialData.hash : undefined;
  const state = "state" in initialData ? initialData.state : undefined;
  const expressions = "expressions" in initialData ? initialData.expressions : undefined;

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;
    setLoaded(false);
    setFailed(false);
    setCalculator(null);

    const statePromise = hash
      ? fetchDesmosState(hash, kind, controller.signal)
      : Promise.resolve(state);

    Promise.all([loadDesmos(), statePromise])
      .then(([, initialState]) => {
        if (disposed || !elementRef.current) return;
        const instance = createDesmosInstance(kind, elementRef.current, {
          expressions: !compact,
          settingsMenu: !compact,
          zoomButtons: true,
          language: i18n.currentLocale === "ja" ? "ja" : "en",
          ...options,
        });
        calculatorRef.current = instance;

        if (initialState) instance.setState(initialState);
        else if (expressions?.length) {
          if (instance.setExpressions) instance.setExpressions(expressions);
          else expressions.forEach((expression) => instance.setExpression(expression));
        }
        if (bounds && kind === "2d") instance.setMathBounds(bounds);

        setCalculator(instance);
        setLoaded(true);
        onReady?.(instance);
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      });

    return () => {
      disposed = true;
      controller.abort();
      calculatorRef.current?.destroy();
      calculatorRef.current = null;
    };
  }, [kind, hash, state, expressions, bounds, compact, options, onReady, i18n.currentLocale]);

  const content = (
    <CalculatorContext.Provider value={calculator}>
      <div className="desmos-shell" role="region" aria-label={title}>
        {children}
        {failed && (
          <div className="desmos-fallback">
            {i18n.currentLocale === "ja"
              ? "Desmosを読み込めませんでした。グラフの種類、ハッシュ、接続状態を確認してください。"
              : "Desmos could not be loaded. Check the calculator type, hash, and connection."}
          </div>
        )}
        {!failed && (
          <div className="desmos-stage" style={{height}} aria-busy={!loaded}>
            <div ref={elementRef} className="desmos-graph" />
            {!loaded && (
              <div className="desmos-loading" role="status">
                {i18n.currentLocale === "ja" ? "グラフを読み込み中…" : "Loading graph…"}
              </div>
            )}
          </div>
        )}
      </div>
    </CalculatorContext.Provider>
  );

  if (!showCaption || !hash) return content;

  return (
    <figure className="desmos-figure">
      {content}
      <figcaption className="desmos-caption">
        <a href={getDesmosUrl(hash, kind)} target="_blank" rel="noopener noreferrer">
          {i18n.currentLocale === "ja"
            ? "Desmos で開く ↗"
            : "Open in Desmos ↗"}
        </a>
      </figcaption>
    </figure>
  );
}

export type {
  DesmosExpression,
  DesmosInstance,
  DesmosKind,
  DesmosMathBounds,
  DesmosState,
};
