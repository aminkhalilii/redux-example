import { useDispatch, useSelector } from "react-redux";
import { setBody, setTitle } from "../App";

const PostForm = () => {
	const title = useSelector((state) => state.title);
	const body = useSelector((state) => state.body);
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		const post = {
			title,
			body,
		};

		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(post),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<h1>add Post</h1>
			<form
				onSubmit={(e) => {
					onSubmit(e);
				}}
			>
				<div>
					<label htmlFor="">Title</label>
					<br />
					<input
						onChange={(e) => dispatch(setTitle({ title: e.target.value }))}
						value={title}
						type="text"
						name="title"
					/>
				</div>
				<div style={{ marginTop: 35 }}>
					<label htmlFor="">Body</label>
					<br />
					<textarea
						onChange={(e) => dispatch(setBody({ body: e.target.value }))}
						value={body}
						cols={40}
						rows={10}
						name="body"
					></textarea>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
