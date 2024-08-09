import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
	name: "posts",
	initialState: {
		title: "",
		body: "",
	},
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload.title;
		},
		setBody: (state, action) => {
			state.body = action.payload.body;
		},
	},
});
export const { setBody, setTitle } = postSlice.actions;
const store = configureStore({
	reducer: postSlice.reducer,
});
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<PostForm />
				<hr />
				<Posts />
			</div>
		</Provider>
	);
}

export default App;
