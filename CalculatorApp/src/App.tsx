import { Provider } from "react-redux";
import Heading from "./components/Heading";
import CalculatorLayout from "./layout/CalculatorLayout";
import PageLayout from "./layout/PageLayout";
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <PageLayout>
        <Heading heading="Calculator App" />
        <CalculatorLayout />
      </PageLayout>
    </Provider>
  )
}
export default App;