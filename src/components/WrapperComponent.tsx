import { useHasReRendered } from "../hooks/useHasReRendered.ts";

export function WrapperComponent({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  useHasReRendered(id);
  return (
    <div className="wrapper">
      <div>Wrapper component {id}</div>
      {children}
    </div>
  );
}
