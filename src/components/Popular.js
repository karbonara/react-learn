import React from 'react' 

function Popular() {
    return (
                <div className="container popular">
                    <h2>Популярные товары</h2>
                    <ul className="breadcrumb">
                        <li><a href="..">запчасти</a></li>
                        <li><a href="..">автохимия</a></li>
                        <li><a href="..">шины и диски</a></li>
                        <li><a href="..">автоэлектроника</a></li>
                        <li><a href="..">инструменты</a></li>
                        <li><a href="..">аксессуары и другое</a></li>
                    </ul>
            <ul className="categories__items popular__items">
                <li className="popular__item">
                    <div className="banner__stock">
                        <p>Sale</p>
                    </div>
                    <img className="popular__like-img" src="https://i.imgur.com/g9BzJgV.png" alt="..."></img>
                    <img src="https://i.imgur.com/lzhYjan.png" alt=".."></img>
                    <h2>Ремень</h2>
                    <p>440Р</p>
                    <div>
                        <img src="..." alt="..."></img>
                    </div>
                </li>
                <li className="popular__item">
                <img className="popular__like-img" src="https://i.imgur.com/g9BzJgV.png" alt="..."></img>
                    <img src="https://i.imgur.com/lzhYjan.png" alt=".."></img>
                    <h2>Ремень</h2>
                    <p>440Р</p>
                    <div>
                        <img src="..." alt="..."></img>
                    </div>
                </li>
                <li className="popular__item">
                <img className="popular__like-img" src="https://i.imgur.com/g9BzJgV.png" alt="..."></img>
                    <img src="https://i.imgur.com/lzhYjan.png" alt=".."></img>
                    <h2>Ремень</h2>
                    <p>440Р</p>
                    <div>
                        <img src="..." alt="..."></img>
                    </div>
                </li>
                <li className="popular__item">
                <img className="popular__like-img" src="https://i.imgur.com/g9BzJgV.png" alt="..."></img>
                    <img src="https://i.imgur.com/lzhYjan.png" alt=".."></img>
                    <h2>Ремень</h2>
                    <p>440Р</p>
                    <div>
                        <img src="..." alt="..."></img>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Popular