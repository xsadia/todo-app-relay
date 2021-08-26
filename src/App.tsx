import RelayEnviroment from "./relay/RelayEnviroment";
import { RelayEnvironmentProvider } from "react-relay";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { Spinner } from "./components/Spinner";

function App() {

  return (
    <RelayEnvironmentProvider environment={RelayEnviroment}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
      <GlobalStyle />
    </RelayEnvironmentProvider>

  );
}

export default App;
