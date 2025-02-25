import { useParams, Navigate } from "react-router";

type validIdProps = {
    validId: string[] ;
}

export default function UsersId({ validId }: validIdProps) {
    const { id } = useParams();

    if (!id || !validId.includes(id)) {
        return <Navigate to="/error" />;
    }

    return (
        <div>
            <h1>User with number: {id}</h1>
            <p>This is the content from user#: {id}</p>
        </div>
    );
}







