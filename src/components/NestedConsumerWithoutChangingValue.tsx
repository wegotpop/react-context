import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";
// import React from "react";

// function InnerComponent({ staticString }: { staticString: string }) {
//   useHasReRendered("Static Inner Component");
//   return <div>{staticString}</div>;
// }

export function NestedConsumerWithoutChangingValue({ id }: { id: string }) {
  useHasReRendered(id);
  const { staticString } = useAContext();

  // const staticMemo = React.useMemo(
  //   () => <InnerComponent staticString={staticString} />,
  //   [staticString],
  // );

  return (
    <div className="component">
      <div>Nested consumer {id}</div>
      <div>{staticString}</div>
      {/*<div>{staticMemo}</div>*/}
    </div>
  );
}
