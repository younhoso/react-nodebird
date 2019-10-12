const React = require('react');
const { Component } = React;

class WorRelay extends Component {
    state = {
        word: '윤호',
        value: '',
        result: '',
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState({
                word: this.state.value,
                value: '',
                result: '딩동댕',
            });
            this.input.focus();
        } else {
            this.setState({
                value: '',
                result: '땡',
            });
            this.input.focus();
        }
    };
    onChange = (e) => {
        this.setState({ value: e.target.value });
    };
    onRefInput = (c) => {
        this.input = c;
    };

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form action="" onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChange}/>
                    <button>입력!!!!!!!!!!!!</button>
                </form>
                <div>{this.state.result}</div> 
            </>
        );
    }
}

module.exports = WorRelay;