import Header from "./components/Header.js";
import Body from './components/Body';
import { Provider } from "react-redux";
import store from "./utils/store.js"


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
