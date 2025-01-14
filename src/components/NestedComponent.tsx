import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useRandomColour } from "../hooks/useRandomColour.ts";

export function NestedComponent({ id }: { id: string }) {
  const { colour } = useRandomColour();

  useHasReRendered(id);

  return (
    <div className="component" style={{ borderColor: colour }}>
      {id}
    </div>
  );
}
