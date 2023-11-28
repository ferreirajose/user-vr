import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/Home'
import NotFound from '../../views/NotFound';
import User from '../../views/User';

const Content = props => (
    <main className="Content">
        <Routes>
             
            <Route path="/" element={ <Home />} />
               
            <Route path="/home" element={<Home />}/>
                
            <Route path="/user" element={ <User />} />
               
            <Route path="*" element={<NotFound />}/>
            
        </Routes>
    </main>
)

export default Content