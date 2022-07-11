import "./App.css";
import List from "./List";
import { data } from "./data";

function App() {
	return (
		<div className="mt-5">
			<List data={data} />
		</div>
	);
}

export default App;
