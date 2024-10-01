import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Assai from '../pages/Assai'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/assai' element={<Assai />} />
        </Routes>
    )
}

export default Router