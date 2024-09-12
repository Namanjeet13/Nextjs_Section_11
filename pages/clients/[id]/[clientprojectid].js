import { useRouter } from 'next/router';
function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>Selected Client Project Page</h1>
            <p>This is the Selected Client Project Page.</p>
        </div>
    );
}

export default SelectedClientProjectPage;