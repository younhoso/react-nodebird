const React = require('react');
const { useState, useRef } = React;

const GuguDan = () => {     //class 컴포넌트에서 -> 함수 컴포넌트로 변경
    // 함수 컴포넌트에서는 setState를 아래와 같이 사용한다.
        //[state, setState] 이런형식으로 바뀌었다.
    const [first, setFirst]   = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue]   = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult('정답:' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();   //ref 함수 컴포넌트에서 이런식으로 변경됨
        } else {
            setResult('땡:' + value);
            setValue('');
            inputRef.current.focus();   //ref 함수 컴포넌트에서 이런식으로 변경됨
        }
    };

    return (
        <>
            <div>{first} 곱하기 {second}는 ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button id="button" className="" htmlFor>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
};

module.exports = GuguDan;