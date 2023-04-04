import Head from 'next/head';
import Layout from "../components/layout"

export default function WelcomePage() {
    return (
        <Layout>
            <Head>
                <title>Book Hive</title>
            </Head>
            <h1>Welcome!</h1>
            
        </Layout>
    )
}
