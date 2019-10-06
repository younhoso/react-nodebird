import React,{ useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);

    const onSubmit = () => {};

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangeNick = (e) => {
        setNick(e.target.value);
    };

    const onChangePassword = (e) => {
        password(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        setPasswordCheck(e.target.term);
    };

    return (
        <section>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js"></script>
            </Head>
            <AppLayout> </AppLayout>
            <Form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="ueer-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="ueer-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="ueer-pass">비밀번호</label>
                    <br/>
                    <Input name="user-pass" value={password} type="password" required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="ueer-pass-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-pass-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의 합니다.</Checkbox>
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </section>
    );
};

export default Signup;