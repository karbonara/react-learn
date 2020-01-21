import React from 'react'

function Banner() {
    return (
        <div className="container container__banner">
            <div>
                <img src="https://i.imgur.com/mn8qnZK.png" alt="..." width="770"></img>
            </div>
            <div className="banner__sale">
                <div className="banner__stock">
                    <p>Акция</p>
                </div>
                <p>200р</p>
                <p>500р</p>
                <img src="https://i.imgur.com/xssBi6U.png" alt="..."></img>
                <h2>Лампочка mini...</h2>
                <div className="banner__sale-stock">
                    <p>До конца акции осталось:</p>
                    <p>До конца акции осталось:</p>
                </div>
            </div>
        </div>
    )
}

export default Banner