module.exports = {
    entry: { // アプリ起動時に動作すべき JS のソースファイルを entry に指定
        app: "./src/index.js"
    },
    output: { // 出力されるファイルのファイル名、パスを指定
        path: __dirname + '/public/js', // 絶対パスで指定する。__dirname はカレントディレクトリを表す
        filename: "[name].js" // [name] と書くとそこには entry のキーが使われる。ここでは `app` となる
    },
    devServer: { // webpack-dev-server の設定
        contentBase: __dirname + '/public', // index.html のあるパスを指定
        port: 8080, // 開発サーバが使うポート番号
        publicPath: '/js/' // webpack の出力する JS があるディレクトリが contentBase と違う場合に指定
    },
    devtool: "eval-source-map",
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            enforce: "pre",
            exclude: /node_modules/,
            loader: "eslint-loader"
        }, {
            test: /\.css$/,
            loader: ["style-loader", "css-loader"]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
