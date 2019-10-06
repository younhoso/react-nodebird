import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <section>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"></script>
            </Head>
            <AppLayout> </AppLayout>
            <article>
                <Link href="./about"><a>about</a></Link>
                <Link href="./user/create">create</Link>
                <h1>Hello, Next!</h1>
            </article>
        </section>
    )
};

export default Home;