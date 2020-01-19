import React from 'react'
import Article from './Article'
import Section from './Section'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <div className="container">
                <Article />
            </div>
           <section>
                <Section />
           </section>
        </div>
    )
} 

export default App