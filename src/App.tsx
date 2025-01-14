import "./App.css";
import { AProvider } from "./context/AContext.tsx";
import { NestedComponent } from "./components/NestedComponent.tsx";
import { NestedConsumer } from "./components/NestedConsumer.tsx";
import { WrapperComponent } from "./components/WrapperComponent.tsx";
import { useState } from "react";
import { NestedComponentWithProps } from "./components/NestedComponentWithProps.tsx";
import { NestedConsumerWithUpdate } from "./components/NestedConsumerWithUpdate.tsx";
import { NestedConsumerWithoutChangingValue } from "./components/NestedConsumerWithoutChangingValue.tsx";

function Wrapped() {
  return (
    <WrapperComponent id={"outer-wrapper"}>
      <h3>Using Context Provider</h3>
      <NestedComponent id={"nested-1"} />
      <NestedConsumer id={"consumer-1"} />
      <NestedConsumerWithoutChangingValue id={"consumer-static-1"} />
      <WrapperComponent id={"inner-wrapper"}>
        <WrapperComponent id={"inner-inner-wrapper"}>
          <NestedConsumerWithUpdate id={"consumer-2"} />
        </WrapperComponent>
      </WrapperComponent>
    </WrapperComponent>
  );
}

function WrappedWithProps() {
  const [wrappedState, setWrappedState] = useState(0);
  function increment() {
    setWrappedState((prev) => prev + 1);
  }
  return (
    <WrapperComponent id={"outer-wrapper-passing-props"}>
      <h3>Using "Prop Drilling"</h3>
      <NestedComponent id={"nested-1-no-props"} />
      <NestedComponentWithProps
        id={"nested-3-with-props"}
        prop={wrappedState}
      />
      <WrapperComponent id={"inner-wrapper"}>
        <NestedComponent id={"nested-2-no-props"} />
      </WrapperComponent>
      <button onClick={increment}>Increment state passed as prop</button>
    </WrapperComponent>
  );
}

function App() {
  return (
    <AProvider initialState={true}>
      <h1>React Context</h1>
      <div className="side-by-side">
        <Wrapped />
        <WrappedWithProps />
      </div>
    </AProvider>
  );
}

export default App;
