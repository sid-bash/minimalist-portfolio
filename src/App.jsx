import ThemeProviderWrapper from "./theme";
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ThemeProviderWrapper>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
