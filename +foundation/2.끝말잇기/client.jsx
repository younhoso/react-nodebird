const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');
const WorRelay = require('./WorRelay');
const Hot = hot(WorRelay);

ReactDom.render(<Hot />,  document.querySelector('#root'));