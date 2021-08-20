import RelayEnviroment from "./relay/RelayEnviroment";
import { RelayEnvironmentProvider } from "react-relay";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./hooks/useAuth";
import { Suspense } from "react";

function App() {

  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <AuthProvider>
        <Suspense fallback={'...Loading'}>
          <Routes />
          <GlobalStyle />
        </Suspense>
      </AuthProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
