import React from 'react'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './Article'
import Banner from './Banner'
import Search from './Search'
import Categories from './Categories'
import Nav from './Nav'

function App() {
    return (
        <div>
            <Nav />
            <Article />
            <Banner />
            <Search />
            <Categories />
            <Categories />
        </div>
    )
} 

export default App