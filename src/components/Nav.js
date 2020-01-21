import React from 'react'

function Nav() {
    return (
        <nav className="container nav">
            <ul className="nav__item-title">
                <li><a className="nav__item-link" href="...">Магазины</a></li>
                <li><a className="nav__item-link" href="...">Акции</a></li>
                <li><a className="nav__item-link" href="...">Доставка и оплата</a></li>
            </ul>
            <a href="..."><img src="https://i.imgur.com/98oIJgd.png" alt="..." width="102"></img></a>
            <div>
                <p>Санкт-Петербург, <br />
                    ул Большая Конюшенная, д 19</p>
            </div>
            <ul className="nav__item-title">
                <li><a href="..."><img src="https://i.imgur.com/XqgrtnX.png" alt=".."></img></a></li>
                <li><a href="..."><img src="https://i.imgur.com/WqsGJ9n.png" alt="..."></img></a></li>
                <li><a href="..."><img src="https://i.imgur.com/UjId0on.png" alt="..."></img></a></li>
            </ul>
        </nav>
    )
}

export default Nav