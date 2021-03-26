import { Provider } from "react-redux";

import store from "./store";

import Global from "./styles/Global";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Global />
        <Home />
        <AboutUs />
      </Provider>
    </>
  );
};

export default App;
