import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Shows from './components/Shows'
import Show from './components/Show'
import People from './components/People'
import { Navbar } from './components/Navbar'
import Cuatro04 from './components/Cuatro04'

const Paths = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/' element={<Outlet />} >
                    <Route index element={<Shows />} />
                    <Route path='/show/:showID' element={<Show />} />

                </Route>
                <Route path='/404' element={<Cuatro04 />} />
                <Route path='*' element={<Navigate to='/404' />} />
            </Routes>

        </div>

    )
}

export default Paths
