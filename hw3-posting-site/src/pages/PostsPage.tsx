import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from 'react-router';

export default function PostsPage() {

    type TypeId = {
        [num: number]: number;
    }

    const [completeData, setCompleteData] = useState<TypeId>({});
    const PASS_SESSION_STORAGE = 'PASS';
    const QUANTITY_ID = 20;

    useEffect(() => {
        let receivedData = sessionStorage.getItem(PASS_SESSION_STORAGE);
        if (receivedData === null) {
            let newIdList: TypeId = {};
            for (let i = 1; i <= QUANTITY_ID; i++) {
                newIdList[i] = Math.random();
            }
            receivedData = JSON.stringify(newIdList);
            sessionStorage.setItem(PASS_SESSION_STORAGE, receivedData);
        }
        setCompleteData(JSON.parse(receivedData));
    }, []);

    let arrId = Object.values(completeData);

    return (
    <>
        <div>
            <ul>
                {arrId.map((item, index) => (
                    <li key={index}>
                        <Link to={`/posts/post/${item.toString().split('.')[1]}`}>Post №{index + 1}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
}
