import React, {Component} from 'react';
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

class NumberBaseballclass extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = (e) => {
        const {value, answer, result, tries} = this.state;
        e.preventDefault();
        if(value === answer.join('')){
            this.setState({
                result: '홈런!',
                tries: [...tries, {try: value, result: '홈런!'}],
            })
            alert('게임을 다시 사작합니다!');
            this.setState({
                value:'',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){   //10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`
                });
                alert('게임을 다시 사작합니다!');
                this.setState({
                    value:'',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for(let i = 0; i < 4; i++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                    this.setState({
                        tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                        value: '',
                    })
                }
            }
        }
    };
    
    onChangeInput = (e) => {
        console.log(this.state.answer);
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
    };

    fruits = [
        { id:1, fryut: '사과', taste: '맛있다'},
        { id:2, fryut: '감', taste: '싸다'},
        { id:3, fryut: '귤', taste: '달다'},
        { id:4, fryut: '밤', taste: '맛있다'},
        { id:5, fryut: '배', taste: '달다'},
        { id:6, fryut: '무', taste: '맛없다'},
    ]
    
    render() {
        const {result, value, tries} = this.state;  //비구조분해 할당으로 this.state를 할당할수 있다.
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} type="text"/>
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
        );
    }
};

export default NumberBaseballclass;