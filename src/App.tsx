import { useSelector } from "react-redux";
import { Link } from "react-router";
import { pagesConfig } from "./config/pages.config";
import { RootState } from "./store/store";
import { ICourse } from "./types/types";

function App() {
	const courses = useSelector((store: RootState) => store.course.courses);

	return (
		<div>
			{courses ? (
				<div>
					{courses.map((elem: ICourse) => (
						<div key={elem.id}>
							<Link to={pagesConfig.toCourse(elem.id)}>{elem.title}</Link>
						</div>
					))}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default App;
