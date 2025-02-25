import CreateIdPost from "../components/CreateIdPost";

type PostsPageProps = {
    setValidId: React.Dispatch<React.SetStateAction<string[]>>;
};

export function PostsPage({ setValidId }: PostsPageProps) {
    return (
        <CreateIdPost setValidId={setValidId} />
    );
}
