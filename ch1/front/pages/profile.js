import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const profile = () => {
    return (
        <div>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"></script>
            </Head>
            <AppLayout> </AppLayout>
            내 프로필
        </div>
    );
};

export default profile;