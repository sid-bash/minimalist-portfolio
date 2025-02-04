import ThemeProvider from "./theme";
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
