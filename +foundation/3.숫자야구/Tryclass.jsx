import React, {Component} from 'react';

class Tryclass extends Component {
    render() {
        const { tryInfo } = this.props;  //비구조분해 할당으로 this.props를 할당할수 있다.
        return (
           <li>
               <div>{tryInfo.try}</div>
               <div>{tryInfo.result}</div>
           </li>
        );
    };
};

export default Tryclass;