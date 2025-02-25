import { useParams, Navigate } from "react-router";

type validIdProps = {
    validId: string[] ;
}

export default function AlbumId({ validId }: validIdProps) {
    const { id } = useParams();

    if (!id || !validId.includes(id)) {
        return <Navigate to="/error" />;
    }

    return (
        <div>
            <h1>Album with number: {id}</h1>
            <p>This is the content for Album with number: {id}</p>
        </div>
    );
}







