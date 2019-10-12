const React = require('react');
const { useState, useRef } = React;

const WorRelay = () => {
    const [word, setWord] = useState('윤호');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => { 
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setWord(value);
            setValue('');
            setResult('');
            inputRef.current.focus();
        } else {
            setValue('');
            setResult('땡')
            inputRef.current.focus();
        }
    };
    const onChange = (e) => {
        setValue( e.target.value );
    };

    return (
        <>
            <div>{word}</div>
            <form action="" onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input id="wordInput" className="wordInput" ref={inputRef} type="text" value={value} onChange={onChange}/>
                <button>클릭!!!</button>
            </form>
            <div>{result}</div> 
        </>
    );
}

module.exports = WorRelay;