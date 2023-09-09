import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../wasm/posts";
import { useEffect } from "react";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        const posts = loadposts();
        console.info(posts);
        dispatch(posts);
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={Math.random()}>{post.saying}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;