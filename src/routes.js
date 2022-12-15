import { Routes, Route } from 'react-router-dom';
import SingIn from './pages/SingIn';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SingIn />} />
        </Routes>
    )
}

export default MainRoutes;
