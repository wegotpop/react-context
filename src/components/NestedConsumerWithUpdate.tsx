import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";

export function NestedConsumerWithUpdate({ id }: { id: string }) {
  useHasReRendered(id);
  const { aFunc, aState } = useAContext();
  return (
    <div className="component">
      <div>Nested consumer {id}</div>
      <div>aState == {aState ? "true" : "false"}</div>
      <button onClick={aFunc}>Update AProvider's internal state</button>
    </div>
  );
}
