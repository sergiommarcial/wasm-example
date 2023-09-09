import { Provider } from "react-redux";
import configureStore from "./wasm/configureStore";
import Posts from "./components/posts";
import "./App.css";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <Posts />
        </Provider>
    );
};

export default App;