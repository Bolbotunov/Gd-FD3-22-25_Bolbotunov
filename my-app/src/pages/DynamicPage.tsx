import InputWithSave from "../components/InputWithSave";
import { useParams } from "react-router";

export default function DynamicPage(props: any) {
    const params = useParams()

    //?query=some-value
    const queryParams = new URLSearchParams(window.location.search)
    const query = queryParams.get('query')
    console.log('query', query)
    return (
        <div className="content">
            <InputWithSave/>
            My id: {params?.id}
            My id2: {params?.courseId}
        </div>
    )
}
