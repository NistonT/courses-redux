import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { Header } from "./components/Header/index.tsx";
import "./index.css";
import { Routers } from "./routers.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<Header />
			<Routers />
		</Provider>
	</BrowserRouter>
);
