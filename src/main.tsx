import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { Header } from "./components/Header/index.tsx";
import "./index.css";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Header />
		<App />
	</Provider>
);
