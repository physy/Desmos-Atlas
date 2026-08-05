import React from "react";
import DesmosCalculator, {
  type DesmosKind,
} from "@site/src/components/DesmosCalculator";

type Props = {
  id: string;
  kind?: DesmosKind;
  title?: string;
  height?: number;
  options?: Record<string, unknown>;
};

export default function DesmosEmbed(props: Props) {
  const {id, ...calculatorProps} = props;
  return <DesmosCalculator {...calculatorProps} hash={id} showCaption />;
}
