export type DesmosKind = "2d" | "3d" | "geometry";
export type DesmosState = Record<string, unknown>;
export type DesmosExpression = Record<string, unknown> & {id?: string; latex?: string};
export type DesmosMathBounds = {
  left: number;
  right: number;
  bottom: number;
  top: number;
};

export type DesmosInstance = {
  setExpression: (expression: DesmosExpression) => void;
  setExpressions?: (expressions: DesmosExpression[]) => void;
  setMathBounds: (bounds: DesmosMathBounds) => void;
  setState: (state: DesmosState, options?: Record<string, unknown>) => void;
  getState?: () => DesmosState;
  removeExpression: (options: {id: string}) => void;
  destroy: () => void;
};

type DesmosConstructor = (
  element: HTMLElement,
  options?: Record<string, unknown>,
) => DesmosInstance;

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator?: DesmosConstructor;
      Calculator3D?: DesmosConstructor;
      Geometry?: DesmosConstructor;
      enabledFeatures?: Record<string, boolean>;
    };
  }
}

const scriptId = "desmos-api-script";
const demoApiKey = "dcb31709b452b1cf9dc26972add0fda6";
let loadPromise: Promise<void> | undefined;

export function loadDesmos(): Promise<void> {
  if (window.Desmos) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");

    const handleLoad = () => {
      if (window.Desmos) resolve();
      else reject(new Error("Desmos API loaded without exposing window.Desmos"));
    };
    const handleError = () => {
      loadPromise = undefined;
      if (!existing) script.remove();
      reject(new Error("Failed to load the Desmos API"));
    };

    script.addEventListener("load", handleLoad, {once: true});
    script.addEventListener("error", handleError, {once: true});

    if (!existing) {
      script.id = scriptId;
      script.src = `https://www.desmos.com/api/v1.12/calculator.js?apiKey=${demoApiKey}&lang=all`;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return loadPromise;
}

export function createDesmosInstance(
  kind: DesmosKind,
  element: HTMLElement,
  options?: Record<string, unknown>,
): DesmosInstance {
  const constructors = {
    "2d": window.Desmos?.GraphingCalculator,
    "3d": window.Desmos?.Calculator3D,
    geometry: window.Desmos?.Geometry,
  } satisfies Record<DesmosKind, DesmosConstructor | undefined>;
  const constructor = constructors[kind];

  if (!constructor) {
    throw new Error(`The configured Desmos API key does not enable ${kind}`);
  }
  return constructor(element, options);
}

export function getDesmosUrl(hash: string, kind: DesmosKind = "2d"): string {
  const productPath = kind === "2d" ? "calculator" : kind;
  return `https://www.desmos.com/${productPath}/${hash}`;
}

export async function fetchDesmosState(
  hash: string,
  kind: DesmosKind = "2d",
  signal?: AbortSignal,
): Promise<DesmosState> {
  if (!/^[a-zA-Z0-9]+$/.test(hash)) throw new Error("Invalid Desmos graph hash");

  const response = await fetch(getDesmosUrl(hash, kind), {
    headers: {Accept: "application/json"},
    signal,
  });
  if (!response.ok) throw new Error(`Unable to load Desmos state (${response.status})`);

  const payload = (await response.json()) as {state?: DesmosState};
  if (!payload.state || typeof payload.state !== "object") {
    throw new Error("Desmos response did not contain state");
  }
  return payload.state;
}
