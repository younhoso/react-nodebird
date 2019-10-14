import React, {useState} from 'react';
import Try from './Tryclass';

function getNumbers() { // 내부에 this를 사용하지 않을때는 class밖에 선언 가능하다.
                        // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
};

const NumberBaseball = () => {
    const [result,  setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTried] = useState([]);


    const onSubmitForm = (e) => {
        const {value, answer, result, tries} = this.state;
        e.preventDefault();
        if(value === answer.join('')){
            setResult('홈런!');
            setTries((prevState)=>{
                return [...prevState.tries, {try: value, result: '홈런!'}]
            });
    
            alert('게임을 다시 사작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTried([]);
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){   //10번 이상 틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`);
                alert('게임을 다시 사작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTried([]);
            } else {
                for(let i = 0; i < 4; i++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                    setTried((prevState) => { return [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}] });
                    setValue('');
                }
            }
        }
    };
    
    const onChangeInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} type="text"/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((data, i) => {   // 화살표 함수에서는 return을 생략이 가능하다.
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo={data}/>
                    );
                })}
            </ul>
        </>
    )
}

export default NumberBaseball;