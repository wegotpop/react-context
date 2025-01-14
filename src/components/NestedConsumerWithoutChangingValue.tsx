import { useHasReRendered } from "../hooks/useHasReRendered.ts";
import { useAContext } from "../context/AContext.tsx";
import { useRandomColour } from "../hooks/useRandomColour.ts";
// import React from "react";

// function InnerComponent({ staticString }: { staticString: string }) {
//   useHasReRendered("Static Inner Component");
//   return (
//     <pre>
//       <code>aState == {staticString}</code>
//     </pre>
//   );
// }

export function NestedConsumerWithoutChangingValue({ id }: { id: string }) {
  const { colour } = useRandomColour();

  useHasReRendered(id);

  const { staticString } = useAContext();

  // const staticMemo = React.useMemo(
  //   () => <InnerComponent staticString={staticString} />,
  //   [staticString],
  // );

  return (
    <div className="component" style={{ borderColor: colour }}>
      <div>{id}</div>
      <pre>
        <code>{staticString}</code>
      </pre>
      {/*<div>{staticMemo}</div>*/}
    </div>
  );
}
