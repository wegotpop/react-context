import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";

export function NestedConsumer({ id }: { id: string }) {
  useHasReRendered(id);
  const { aState } = useAContext();
  return (
    <div className="component">
      <div>Nested consumer {id}</div>
      <div>aState == {aState ? "true" : "false"}</div>
    </div>
  );
}
