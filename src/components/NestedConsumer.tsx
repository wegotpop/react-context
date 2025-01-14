import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";
import { useRandomColour } from "../hooks/useRandomColour.ts";

export function NestedConsumer({ id }: { id: string }) {
  useHasReRendered(id);

  const { colour } = useRandomColour();

  const { aState } = useAContext();

  return (
    <div className="component" style={{ borderColor: colour }}>
      <div>{id}</div>
      <pre>
        <code>aState == {aState ? "true" : "false"}</code>
      </pre>
    </div>
  );
}
