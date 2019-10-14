import React, {Component} from 'react';

class importrequire extends Component {

}
exprot const hello = 'hello'; //이런식으로 변수나, 값들 따로 내보낼수도 있다. import { hello }(가져가 사용할때)
exprot const bye = 'hello';  //(변수나,값은 여러번 선언가능), import { hello, bye }(한번에 여러가를 가져올수 있다.)

exprot default importrequire; //import importrequire (default는 한번만 선언가능)
/* 리액트에서는 import, exprot를 사용한다. */


/**
 * const React = require('react');
 * exports.hello = 'hello';
 * module.exports = importrequire;
 * 노드에서는 require를 사용한다.
 */