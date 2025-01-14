import { useHasReRendered } from "../hooks/useHasReRendered.ts";

export function NestedComponentWithProps({
  id,
  prop,
}: {
  id: string;
  prop: number;
}) {
  useHasReRendered(id);
  return (
    <div className="component">
      <div>Nested component {id}</div>
      <div>Prop: {prop}</div>
    </div>
  );
}
