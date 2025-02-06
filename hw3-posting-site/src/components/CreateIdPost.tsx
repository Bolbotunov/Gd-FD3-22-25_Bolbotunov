import { useEffect, useState } from "react";
import { PostPageLinksStyled } from "../styles/PostPageStyled";
import { PostsUlStyled } from "../styles/PostPageStyled";
import { PostsLiStyled } from "../styles/PostPageStyled";
import { PostPageWrongLinksStyled } from "../styles/PostPageStyled";



type TypeId = {
    [num: number]: number;
}

type CreateIdPostProps = {
    setValidId: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PASS_SESSION_STORAGE = 'PASS';
export const QUANTITY_ID = 20;

export default function CreateIdPost({ setValidId }: CreateIdPostProps) {
    const [completeData, setCompleteData] = useState<TypeId>({});

    useEffect(() => {
        let receivedData = sessionStorage.getItem(PASS_SESSION_STORAGE);
        if (receivedData === null) {
            let newIdList: TypeId = {};
            for (let i = 1; i <= QUANTITY_ID; i++) {
                newIdList[i] = Math.floor(Math.random() * 10000) + 1;
            }
            receivedData = JSON.stringify(newIdList);
            sessionStorage.setItem(PASS_SESSION_STORAGE, receivedData);
        }
        let parsedData = JSON.parse(receivedData)
        setCompleteData(parsedData);
        setValidId(Object.values(parsedData).map(item => (item as number).toString()))
    }, [setValidId]);

    let arrId = Object.values(completeData);

    return (
        <PostsUlStyled>
                {arrId.map((item, index) => (
                    <PostsLiStyled key={index}>
                        <PostPageLinksStyled to={`/posts/post/${item.toString()}`}>Post №{index + 1}</PostPageLinksStyled>
                    </PostsLiStyled>
                ))}
                 <PostPageWrongLinksStyled to={`/posts/post/${'s'}`}>{'WrongUrlLink'}</PostPageWrongLinksStyled>
        </PostsUlStyled>
    )
}