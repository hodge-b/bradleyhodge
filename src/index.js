import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import Wordle from './components/Wordle/index'

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/wordle' element={<Wordle />} />
        </Routes>
    </Router>, 
    document.getElementById('root'))