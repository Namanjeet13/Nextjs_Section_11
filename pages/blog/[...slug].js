import { useRouter } from 'next/router';
function BlogPostsPage() {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>Blog Posts Page</h1>
            <p>This is the Blog Posts Page.</p>
        </div>
    );
}

export default BlogPostsPage;