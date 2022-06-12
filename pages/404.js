import Layout from '@c/layout';
import Seo from '@c/seo';
import ErrorComponent from '@c/404';

function ErrorPage() {
    return (
        <Layout>
            <Seo title="Error" />
            <ErrorComponent />
        </Layout>
    );
}
export default ErrorPage;