const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서버스: production으로 변경
    devtool: 'eval',

    entry: { //입력
        app:['./client'],
    },
    output: {  //출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']    // class문법 사용할때는 설치하고, 추가 
            },
        }],
    },

    resolve: { //entry에 확장자들 지정을 배열로 여러게 한다.
        extensions: ['.js', '.jsx']
    }
};