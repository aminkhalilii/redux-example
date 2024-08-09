import React, { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	}, []);
	const postItems = posts.map((post) => (
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	));
	return (
		<div>
			<h1>posts</h1>
			{postItems}
		</div>
	);
};

export default Posts;
