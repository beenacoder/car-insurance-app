import { CotizadorProvider } from "./context/CotizadorProvider";
import InsuranceApp from "./components/InsuranceApp";

const App = () => {
  return (
    <CotizadorProvider>
      <InsuranceApp />
    </CotizadorProvider>
  )
}

export default App