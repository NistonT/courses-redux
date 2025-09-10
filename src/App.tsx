import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ICourse } from "./types/types";

function App() {
	const courses = useSelector((store: RootState) => store.course.courses);

	return (
		<div>
			{courses ? (
				<div>
					{courses.map((elem: ICourse) => (
						<div key={elem.id}>{elem.title}</div>
					))}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default App;
