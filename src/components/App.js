import React from 'react'
import Article from './Article'
import Banner from './Banner'
import Search from './Search'
// import Section from './Section'
import Nav from './Nav'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Nav />
            <Article />
            <Banner />
            <Search />
        </div>
    )
} 

export default App