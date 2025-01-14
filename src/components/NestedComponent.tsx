import { useHasReRendered } from "../hooks/useHasReRendered.ts";

export function NestedComponent({ id }: { id: string }) {
  useHasReRendered(id);
  return <div className="component">Nested component {id}</div>;
}
