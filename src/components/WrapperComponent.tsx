import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useRandomColour } from "../hooks/useRandomColour.ts";

export function WrapperComponent({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { colour } = useRandomColour();

  useHasReRendered(id);
  return (
    <div className="wrapper" style={{ borderColor: colour }}>
      <div>{id}</div>
      {children}
    </div>
  );
}
