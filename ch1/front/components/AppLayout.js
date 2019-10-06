import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

const AppLayout = ({Children}) =>  {
    return (
        <header>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
                </Menu.Item>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </Menu>
            {Children}
        </header>
    );
};

// class AppLayout extends Component {
//     constructor(props){
//         super(props);
//         this.li = {lit: "Children"}
//     }
//     render() {
//         return (
//             <div>
//                 <Menu>
//                     <Menu.Item key="home">노드버드</Menu.Item>
//                     <Menu.Item key="profile">프로필</Menu.Item>
//                     <Menu.Item key="mail">
//                         <Input.Search enterButton />
//                     </Menu.Item>
//                 </Menu>
//                 {this.li.lit}
//             </div>
//         )
//     }
// }


export default AppLayout;