import { useParams, Navigate } from "react-router";

export default function PostId () {
    const { id } = useParams();
    const idCheck = /^[0-9]+$/;

    if (!id || !idCheck.test(id)) {
        return <Navigate to="/error" />;
    }

    return (
        <div>
            <h1>Post with number: {id}</h1>
            <p>This is the content for post with number: {id}</p>
        </div>
    );
}
