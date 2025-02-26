import { useParams, Navigate } from "react-router";

type validIdProps = {
    validId: string[] ;
}

export default function UsersId() {
    const { id } = useParams();

    return (
        <div>
            <h1>User with number: {id}</h1>
            <p>This is the content from user#: {id}</p>
        </div>
    );
}







