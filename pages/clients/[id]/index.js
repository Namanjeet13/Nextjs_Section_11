import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);

        function loadProjectHandler() {
            //load data...
            router.push({
                pathname: '/clients/[id]/[clientprojectid]',
                query: { id:'max', clientprojectid:'project-a' },
            });
        }

    return (
        <div>
            <h1>Client Projects Page</h1>
            <p>This is the Client Projects Page.</p>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;