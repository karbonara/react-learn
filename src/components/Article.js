import React from 'react';

function Article() {
  const title  = <div><h1 className="title">о товаре</h1><p>какой то текст</p></div>
  const btn = <button className="btn__main">купить</button>
  return (
    <div className="square__main">
      <div className="square"></div>
      <h2>Hello React</h2>
      {title}
      {btn}
      <p>текст рыба</p>
      <a href="..." className="btn">buy</a>
    </div>
  )
}
export default Article