import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Category from './pages/Category/Catelogy'
import Home from './pages/Home/Home'
import DontFound from './pages/NotFound/NotFound'
import Search from './pages/Category/Search'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route index element={<Home></Home>}></Route>
                <Route path='mv' element={<Category></Category>}></Route>
                <Route path='search' element={<Search></Search>}></Route>
                <Route path='tv' element={<Category></Category>}></Route>
                <Route path='*' element={<DontFound></DontFound>}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

export default App
