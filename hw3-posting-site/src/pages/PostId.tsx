import { useParams, Navigate } from "react-router";


type validIdProps = {
    validId: string[] ;
}

export default function PostId({ validId }: validIdProps) {
    const { id } = useParams();

    if (!id || !validId.includes(id)) {
        return <Navigate to="/error" />;
    }

    return (
        <div>
            <h1>Post with number: {id}</h1>
            <p>This is the content for post with number: {id}</p>
        </div>
    );
}







