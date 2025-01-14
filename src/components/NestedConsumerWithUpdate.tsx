import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";
import { useRandomColour } from "../hooks/useRandomColour.ts";

export function NestedConsumerWithUpdate({ id }: { id: string }) {
  const { colour } = useRandomColour();
  useHasReRendered(id);
  const { aFunc, aState } = useAContext();
  return (
    <div className="component" style={{ borderColor: colour }}>
      <div>{id}</div>
      <pre>
        <code>aState == {aState ? "true" : "false"}</code>
      </pre>
      <button onClick={aFunc}>Update AProvider's internal state</button>
    </div>
  );
}
