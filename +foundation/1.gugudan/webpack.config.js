const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서버스: production으로 변경
    devtool: 'eval',     //hidden-source-map
    resolve: { //entry에 확장자들 지정을 배열로 여러게 한다.
        extensions: ['.js', '.jsx']
    },

    entry: { //입력
        app:['./client'],
    },
    module: {
        rules: [
            {   // jsx에서 html-loader 사용할때 필요하다. 
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)|(dist)/,   //node_modules디렉토리 아래있는 파일들은 제외하고, | dist디렉토리 제외하고
                loader: 'babel-loader',
                options: {
                    presets: [
                        // plugin들의 모음이 preset입니다. (preset안에 수십개의 플러그인들이 존재함)
                        ['@babel/preset-env',{
                            targets: {
                                // 브라우저 호환 옵션을 구체적으로 지정할수 있다.
                                browsers: [
                                    '> 5% in KR'
                                ],
                            },
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: [],
                },
            },
            {   // images css에서 background-image 속성 사용할때 필요하다. 
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'dist-img/'
                    }
                    }
                ]
            },
            {  // scss
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [  //추가 기능
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {  //출력
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
};