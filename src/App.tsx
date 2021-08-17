import RelayEnviroment from "./relay/RelayEnviroment";
import { RelayEnvironmentProvider } from "react-relay";
import { Routes } from "./routes";
import { Suspense } from "react";

function App() {

  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <Suspense fallback={'Loading...'}>
        <Routes />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
