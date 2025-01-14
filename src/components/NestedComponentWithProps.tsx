import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useRandomColour } from "../hooks/useRandomColour.ts";

export function NestedComponentWithProps({
  id,
  prop,
}: {
  id: string;
  prop: number;
}) {
  const { colour } = useRandomColour();

  useHasReRendered(id);

  return (
    <div className="component" style={{ borderColor: colour }}>
      <div>{id}</div>
      <div>Prop: {prop}</div>
    </div>
  );
}
