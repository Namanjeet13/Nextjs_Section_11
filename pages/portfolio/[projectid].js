import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
            <h1>Portfolio Project Page</h1>
            <p>This is the Portfolio Project Page.</p>
        </div>
    );
}

export default PortfolioProjectPage;