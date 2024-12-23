import GlobalStyles from "./components/utils/StyledThemes";
import CentralizedLayout from "./components/layout/CentralizedLayout";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <CentralizedLayout/>
    </div>
  );
}

export default App;