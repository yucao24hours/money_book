import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

// ReactDOM.render の第一引数で指定するタグ名(コンポーネント名)とこの関数名を揃える必要がある
// かつ、大文字で始める必要がある
const MoneyBook = () => {
    const books = [
        {date: "1/1", item: "お年玉", amount: 10000},
        {date: "1/3", item: "ケーキ", amount: -500},
        {date: "2/1", item: "小遣い", amount: 3000},
        {date: "2/5", item: "マンガ", amount: -600}

    ]
    // class 名は className と書く必要がある。class というキーワードは JS とかぶってしまうため。
    return (
        <div>
            <Title>小遣い帳</Title>
            <table className="book">
                <thead>
                    <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
                </thead>
                <tbody>
                    {/* 
                        MoneyBookItem という名前のコンポーネントをここに描画する。
                        コンポーネント内では、引数に book というプロパティ名（キー）でアクセスできるようになる。
                        引数.book のように。今回は props としているので props.book でここの {} 内の値にアクセスできる。
                    */}
                    {/*
                        繰り返しでコンポーネントを表示する場合には、要素が追加・削除されたときにも正しく表示できるように `key` パラメータに
                        ユニークな値を渡す必要がある。
                    */}
                    {books.map((book) =>
                        <MoneyBookItem book={book} key={book.date + book.item} />)}
                </tbody>
            </table>
        </div>
    )
}

const MoneyBookItem = (props) => {
    const {date, item, amount} = props.book
    if (amount > 0) {
        return (
                <tr>
                    <td>{date}</td>
                    <td>{item}</td>
                    <td>{amount}</td>
                    <td></td>
                </tr>
        )
    } else {
        return (
                <tr>
                    <td>{date}</td>
                    <td>{item}</td>
                    <td></td>
                    <td>{-amount}</td>
                </tr>
        )
        
    }
}

MoneyBookItem.propTypes = {
    book: PropTypes.object.isRequired
}

const Title = (props) => {
    return (<h1>{props.children}</h1>)
}

Title.propTypes = {
    // 子要素にアクセスするための children は予約語? hoge とか任意のキー名にしてもアクセスする側であわせてればいい、とかではない。
    children: PropTypes.string
}

ReactDOM.render(
    <MoneyBook />,
    document.getElementById('root')
)
