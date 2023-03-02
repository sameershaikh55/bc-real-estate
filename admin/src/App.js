// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

// ALERT
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// IMPORTING ROUTER AND SWITCH
import Routes from "./Routes";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Routes />
      </AlertProvider>
    </Provider>
  );
}

export default App;
